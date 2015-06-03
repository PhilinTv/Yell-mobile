var express = require('express'),
	app = express(),
	http = require('http').createServer(app),
	fs = require('fs'),
	path = require('path'),
	i18n = require('i18n'),
	moment = require('moment'),
	io = require('socket.io')(http)
	mime = require('mime'),
	builder = require('./builder'),
	ECT = require('ect'),
	ectRenderer = ECT({ watch: true, root: __dirname + '/client', ext: '.ect'}),
	helpers = {},
	helpersPath = './server/helpers/';


// App configure
app
	.set('isDev', app.get('env') == 'development')
	.set('config', require('./configs/config'))
	.set('port', process.env.PORT || 3000)
	.set('views', path.join(__dirname, 'client'))
	.set('view engine', 'ect')
	.engine('ect', ectRenderer.render)
	/*.use(express.static(path.join(__dirname, 'client')))*/;


// i18n configure
i18n.configure({
	locales: app.get('config').locales,
	updateFiles: false,
	directory: './locales'
});


// Helpers
fs.readdirSync(helpersPath).forEach(function(file) {
	var _file = file.split('.'),
		filePath = helpersPath + file;
	
	helpers[_file[0]] = require(filePath);
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
		app.locals.Helpers = helpers;
        app.locals.footerNav = require('./data/footerNav');
		
		res.render('layouts/main/main', {view: view, data: data});
	}

	next();
});


app.get(/\.(styl|scss|less)$/, function (req, res, next) {
	var pathname = req._parsedUrl.pathname;

	builder.renderFile(pathname, function (data) {
		res.type('css');
		res.end(data);
	});
});


app.get(/\.(js|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/, function (req, res, next) {
	var pathname = req._parsedUrl.pathname,
		filePath = process.cwd() + '/client' + pathname;
	
	res.type(mime.lookup(filePath));
	res.end(fs.readFileSync(filePath));
});


app.get('/', function (req, res, next) {
	res.render('index', {
        categories: require('./data/categories'),
        guides: require('./data/guides'),
        events: require('./data/events'),
        videos: require('./data/videos'),
        affiche: require('./data/affiche'),
        reviews: require('./data/reviews')
    });
});


// Socet.IO
io.on('connection', function (socket) {
	console.log('a user connected');
});


// Start server
http.listen(process.env.PORT || 3000, function () {
	console.log('Server started');
});
