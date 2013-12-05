requirejs.config({
    paths: {
        'jquery'        : 'lib/jquery.min',
        'underscore'    : 'lib/underscore-min',
        'backbone'      : 'lib/backbone-min',
        'socketio'      : '../socket.io/socket.io',
        'text'          : 'lib/text'
    },
    shim: {
        'underscore': {
            exports     : '_'
        },  
        'socketio': {
            exports     : 'io'
        },
        'backbone': {
            deps        : ['underscore', 'jquery','socketio'],
            exports     : 'Backbone',
            init        : function () {

                var href = document.location.protocol + document.location.hostname;
                window.socket = io.connect(href);  

                return Backbone.noConflict();

            }
        }
    }
});

define(function(require) {
    var App = require('app');

    App.initialize();

})
