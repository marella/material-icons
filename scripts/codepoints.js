const fs = require('fs')
const path = require('path')
const { EOL } = require('os')
const got = require('got')

const CODEPOINTS_URL = 'https://fonts.google.com/metadata/icons'
const CODEPOINTS_JSON = path.resolve(__dirname + '/../iconfont/codepoints.json')
const CODEPOINTS_SCSS = path.resolve(__dirname + '/../iconfont/codepoints.scss')

const main = async () => {
  const existingCodepoints = getExistingCodepoints()
  const latestCodepoints = await getLatestCodepoints()
  // merge both to avoid deleting existing codepoints
  let codepoints = { ...existingCodepoints, ...latestCodepoints }
  codepoints = Object.fromEntries(Object.entries(codepoints).sort()) // sort by name
  console.log(
    `Got ${
      Object.keys(existingCodepoints).length
    } codepoints from ${CODEPOINTS_JSON}`
  )
  console.log(
    `Got ${
      Object.keys(latestCodepoints).length
    } codepoints from ${CODEPOINTS_URL}`
  )
  console.log(`Got ${Object.keys(codepoints).length} codepoints from both`)
  const sassMap = createSassMap(codepoints)
  fs.writeFileSync(CODEPOINTS_JSON, JSON.stringify(codepoints, null, 2))
  fs.writeFileSync(CODEPOINTS_SCSS, sassMap)
}

const getExistingCodepoints = () => {
  const json = fs.readFileSync(CODEPOINTS_JSON).toString()
  return JSON.parse(json)
}

const getLatestCodepoints = async () => {
  const { body } = await got(CODEPOINTS_URL)
  const json = body.substring(body.indexOf('\n')) // remove first line
  const { icons } = JSON.parse(json)
  const codepoints = {}
  icons.forEach(({ name, codepoint }) => {
    if (!name || !codepoint) {
      return
    }
    codepoints[name] = codepoint.toString(16)
  })
  return codepoints
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

main()
