var express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    fs = require('fs'),
    path = require('path'),
    twig = require('twig'),
    i18n = require('i18n'),
    moment = require('moment'),
    io = require('socket.io')(http),
    builder = require('./builder'),
    twigFolder = './server/twig/';


// App configure
app
    .set('isDev', app.get('env') == 'development')
    .set('config', require('./configs/config'))
    .set('port', process.env.PORT || 3000)
    .set('views', path.join(__dirname, 'client'))
    .set('view engine', 'twig')
    /*.use(express.static(path.join(__dirname, 'client')))*/;


// i18n configure
i18n.configure({
	locales: app.get('config').locales,
	updateFiles: false,
	directory: './locales'
});


// Twig extensions
fs.readdirSync(twigFolder).forEach(function(file) {
    var _file = file.split('.'),
        filePath = twigFolder + file;
    
    if (_file[0] == 'function') {
        twig.extendFunction(_file[1], require(filePath));
    }
    else if (_file[0] == 'filter') {
        twig.extendFilter(_file[1], require(filePath));
    }
});


// Rewrite res.render function
app.all('*', function  (req, res, next) {
    
    var render = res.render;

    res.render = function (view, data) {
        
        res.render = render;

        var langs = req.get('accept-language') || '',
            lang = langs.replace(/(-|,)(.*)/, ''),
            view;

        if (app.get('config').locales.indexOf(lang) != -1) {
            i18n.setLocale(lang);
            moment.locale(lang);
        }

        app.locals.Config = app.get('config');
        app.locals.Request = req;
        app.locals.Lang = lang;
        
        res.render('layouts/main/main', {view: view, data: data});
    }

    next();
});


app.get(/\.(styl|scss|less|css|js)$/, function (req, res, next) {
    var pathname = req._parsedUrl.pathname;
    
    builder.renderFile(pathname, function (data) {
        res.end(data);
    });
});


app.get(/\.(png|jpg|gif)$/, function (req, res, next) {
    var pathname = req._parsedUrl.pathname
    data = fs.readFileSync(process.cwd() + '/client' + pathname);
    
    res.type(req.params[0]);
    res.end(data);
});


app.get('/', function (req, res, next) {
    res.render('index', {});
});


// Socet.IO
io.on('connection', function (socket) {
    console.log('a user connected');
});


// Start server
http.listen(process.env.PORT || 3000, function () {
	console.log('Server started');
});
