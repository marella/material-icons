const fs = require('fs')
const path = require('path')
const { EOL } = require('os')
const opentype = require('opentype.js')

const ROOT_DIR = path.resolve(__dirname, '..')
const ICONFONT_DIR = path.resolve(ROOT_DIR, 'iconfont')
const CODEPOINTS_JSON = path.resolve(ROOT_DIR, '_data', 'codepoints.json')
const CODEPOINTS_SCSS = path.resolve(ROOT_DIR, 'css', '_codepoints.scss')

const main = () => {
  const existing = getExistingCodepoints()
  const latest = getLatestCodepoints()
  logChanges(existing, latest)
  save(latest)
}

const getExistingCodepoints = () => {
  const json = fs.readFileSync(CODEPOINTS_JSON).toString()
  return JSON.parse(json)
}

const getLatestCodepoints = () => {
  const codepoints = {}
  const styles = ['', 'outlined', 'round', 'sharp', 'two-tone']
  styles.reverse() // last processed font overwrites previous ones
  styles.forEach((style) => {
    const file = `${ICONFONT_DIR}/material-icons${style && `-${style}`}.woff`
    processFont(file, codepoints)
  })
  return sortMap(codepoints)
}

const processFont = (file, codepoints) => {
  const font = opentype.loadSync(path.resolve(file))
  const glyphToCodepoints = {}
  const { glyphIndexMap } = font.tables.cmap
  for (const [codepoint, glyph] of Object.entries(glyphIndexMap)) {
    glyphToCodepoints[glyph] = parseInt(codepoint)
  }
  font.tables.gsub.lookups.forEach(({ lookupType, subtables }) => {
    if (lookupType === 4) {
      subtables.forEach(({ coverage: { ranges }, ligatureSets }) => {
        const prefixes = []
        ranges.forEach(({ start, end }) => {
          for (let i = start; i <= end; i++) {
            prefixes.push(i)
          }
        })
        ligatureSets.forEach((ligatureSet, i) => {
          ligatureSet.forEach(({ ligGlyph, components }) => {
            const ligature = [prefixes[i], ...components]
              .map((v) => String.fromCharCode(glyphToCodepoints[v]))
              .join('')
            const codepoint = glyphToCodepoints[ligGlyph]
            codepoints[ligature] = codepoint.toString(16)
          })
        })
      })
    }
  })
}

const save = (codepoints) => {
  codepoints = sortMap(codepoints)
  const sassMap = createSassMap(codepoints)
  fs.writeFileSync(CODEPOINTS_JSON, JSON.stringify(codepoints, null, 2))
  fs.writeFileSync(CODEPOINTS_SCSS, sassMap)
}

const createSassMap = (codepoints) => {
  const mapName = '$material-icons-codepoints'
  let map = ''
  for (const [name, codepoint] of Object.entries(codepoints)) {
    map += `  "${name}": ${codepoint},${EOL}`
  }

  map = map.replace(/,\s*$/, '')
  map = `${mapName}: () !default;
${mapName}: map-merge((
${map}
), ${mapName});
`
  return map
}

const logChanges = (existing, latest) => {
  Object.keys(existing).forEach((name) => {
    if (!latest[name]) {
      console.error(`Removed "${name}"`)
    }
  })
  Object.keys(existing).forEach((name) => {
    if (latest[name] && latest[name] !== existing[name]) {
      console.warn(`Changed "${name}"`)
    }
  })
  Object.keys(latest).forEach((name) => {
    if (!existing[name]) {
      console.info(`Added "${name}"`)
    }
  })
}

const sortMap = (map) => {
  return Object.fromEntries(Object.entries(map).sort())
}

main()
