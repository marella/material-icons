var config = {
  paths: {
    main: 'src/stylus/material-icons.styl',
    styles: 'src/**/*.styl'
  },
  tasks: {
    clean: {
      fn: function(cb, tools, gulp) {
        tools.del(['css'], cb);
      }
    },
    main: {
      deps: ['clean'],
      src: 'main',
      dest: 'css',
      run: [
        'stylus', 'autoprefixer', 'dest',
        'minifyCss', { rename: {suffix: '.min'} }, 'dest',
        { livereload: {start: true} }
      ]
    },
    watch: {
      styles: 'main'
    },
    default: ['watch', 'main'],
    init: {
      fn: function(cb) {
        // first generate icons.styl
        // manually run 'gulp init' when codepoints are changed
        require('./src/map.js').run(cb);
      }
    }
  },
  tools: {
    del: 'del'
  }
}

var engulf = require('engulf');
engulf.importTools();
engulf.run(config);
