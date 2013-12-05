define(function(require, exports, module) {
    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        
    /**
     * app#Router
     *
     */

    AppRouter = Backbone.Router.extend({

        routes: {
            
            ''  : 'index',
            '/' : 'index'
            
        },

        index: function () {
            var s = this;
        } 

    });

    var initialize = function() {

        var appRouter = new AppRouter;

        Backbone.history.start();

    }

    return {

        initialize: initialize

    };

});
