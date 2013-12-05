
var     application_root    = __dirname,
        express             = require('express'),
        path                = require('path'), 
        http                = require('http'),
        _                   = require('underscore'),
        app                 = module.exports    
                            = express(), 
        server              = http.createServer(app), 
        io                  = require('socket.io').listen(server);


// Uncomment to fall back to long polling ajax

io.configure(function () {

    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);

});

// Configure server
app.configure(function() {

    //parses request body and populates request.body
    app.use(express.json());
    app.use(express.urlencoded());


    //checks request.body for HTTP method overrides
    app.use(express.methodOverride());

    //perform route lookup based on url and HTTP method
    app.use(app.router);

    //Where to serve static content
    app.use(express.static(path.join(application_root, 'site')));

    //Show all errors in development
    app.use(express.errorHandler({

        dumpExceptions  : true,
        showStack       : true

    }));

});


io.sockets.on('connection', function (socket) {

});

var port = process.env.PORT || 3000;

if (!module.parent) {
    server.listen(port);
}
