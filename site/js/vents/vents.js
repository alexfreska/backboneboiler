define(function(require) {

    var $           = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone');

    Vents = _.extend({},Backbone.Events);

    return Vents;

});
