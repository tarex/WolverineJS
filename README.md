[![Build Status](https://travis-ci.org/tarex/WolverineJS.svg?branch=master)](https://travis-ci.org/tarex/WolverineJS)  [![npm version](https://badge.fury.io/js/wolverinejs.svg)](http://badge.fury.io/js/wolverinejs)




WolverineJS
===========

[![Join the chat at https://gitter.im/tarex/WolverineJS](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/tarex/WolverineJS?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Simple MVC framework based on Node JS

installation
===========

	npm install wolverinejs --save


It uses ExpressJS and Nunjucks templating engine . You need to follow this folder structure to make it work .




    .
    ├── README.md
    ├── app
    │   ├── controllers                     (folder)
    │   │   ├── Auth
    │   │   │   └── AuthController.js
    │   │   ├── userController.js 
    │   ├── models                          (folder)
    │   │   ├── article.js
    │   │   ├── product
    │   │   │   └── products.js
    │   │   ├── book.js
    │   │   └── user.js
    │   └── views                           (folder)
    │       ├── base.html
    │       ├── home.html
    ├── app.js
    ├── config                              (folder)
    |   ├── routes.js
    ├── package.json
    └── public                              (folder)
    |   ├── css
    |   ├── img
    |   └── js










into the `app.js` file you need to include this , it will handle rest of the thing automatically .

    var wolverine = require('wolverinejs');


It will boostrap your application and all models , controller , routes will be included .

check `demo` folder , write `node app.js` to run this form demo folder . 


Routes
===========

you can set your routes into `app/config/routes.js` , the format will be like this


    module.exports = function(router , controller){

            // controller.great.index means , it will be into the app/controllers
            // folder and the name of the controller is AuthController and
            // index method will be executed  

            router.get('/', controller.AuthController.index );

            router.get('/test',function(rep , res , next){
                res.send('hello world');
            });

        return router;
    }


Views
===========

By default it uses `Nunjucks` [ http://nunjucks.jlongster.com/ ] . Your view files will be loaded from `app/views` folder . Its possible to extend template , it has many option , you can read form here http://mozilla.github.io/nunjucks/templating.html



Controllers
===========

Controller will be into `app/controllers` directory and it follows

    exports.index = function(req , res){
            // index.html is nunjucks templating file and it
            // will be loaded from app/views/ folder

            res.render('index.html',{title:'Please Sign up'});
    }


Models
===========

 models will be into `app/models` folder





Todo
===========

- ORM support for major database engines .
- Configuration override
- App environment settings
- Error & Event Handling
- Passport
- SockJS
- Test

Note :
===========

Its a very simple framework that follows MVC patterns , very light weighted , still in heavy development  
