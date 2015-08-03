var fs = require ('fs');

var filenames = process.argv.splice(2);

filenames.forEach(function(filename) {
  fs.readFile(filename, {encoding: 'utf8'}, function(
    error, contents) {
      console.log(contents);
    });
});
