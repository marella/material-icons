#!/usr/bin/env node

/* Maps codepoints to CSS class names */

function run(callback) {
  var fileSystem = require('fs');
  var readLine = require('readline');
  var path = require('path');
  var EOL = require('os').EOL;

  // file paths
  var CODEPOINTS = __dirname + '/codepoints';
  var MAP_FILE_NAME = __dirname + '/stylus/icons.styl';

  // Create a file streaming interface
  var readLineHandle = readLine.createInterface({
    input: fileSystem.createReadStream(CODEPOINTS),
    output: process.stdout,
    terminal: false
  });

  // Read each line by line from the file codepoints file
  var map = '';
  readLineHandle.on('line', function(line) {
    // Match the name, space then any unicode after it
    var nameCodepointPair = line.split(' ');

    // make css class prefix
    var codepoint = nameCodepointPair[1];
    var name = nameCodepointPair[0].toLowerCase().trim()
        .replace(/[^0-9a-z]+/gi, '-')

    // make the css
    map += '.{icon-prefix}-' + name + ':before { content: "\\' + codepoint + '"; }' + EOL;
  });

  readLineHandle.on('close', function() {
    // Once reading has finished here we can write the file
    fileSystem.writeFileSync(MAP_FILE_NAME, map);
    callback();
  });
}

exports.run = run;
