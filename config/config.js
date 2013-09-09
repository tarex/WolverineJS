
 var path = require('path'),
 rootPath = path.normalize(__dirname +'/..');



module.exports={
  dev:{
    db:'mongodb://localhost/wolv-blog',
    root: rootPath,
  },
  pro:{}
}