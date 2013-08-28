// var cont_path = './app/controllers';

// fs.readdirSync(cont_path).forEach(function(file) {
//   if (file != 'index.js') {
//     var moduleName = file.substr(0, file.indexOf('.'));
//     exports[moduleName] = require(cont_path +'/' + moduleName);
//   // console.log(moduleName);
//   }
// });


var fs = require('fs');


fs.readdirSync(__dirname).forEach(function(file) {
  if (file != 'index.js') {
    var moduleName = file.substr(0, file.indexOf('.'));
    exports[moduleName] = require('./' + moduleName);
  }
});