(function (window) {
    'use strict';
    
    // Definitions of inheritance mechanism
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }
    function inheritPrototype(childObject, parentObject) {
        var copyOfParent = Object.create(parentObject.prototype);
        copyOfParent.constructor = childObject;
        childObject.prototype = copyOfParent;
    }

    // Extention of google.maps.Marker
    function PointOfInterest(args) {
        if (typeof args.clickable === 'undefined') args.clickable = false;
        if (typeof args.crossOnDrag === 'undefined') args.crossOnDrag = false;
        if (typeof args.raiseOnDrag === 'undefined') args.raiseOnDrag = false;
        if (typeof args.draggable === 'undefined') args.draggable = false;
        if (typeof args.flat === 'undefined') args.flat = true;
        google.maps.Marker.call(this, args);
        if (typeof args.type !== 'undefined') this.type = args.type;
        if (typeof args.description !== 'undefined') this.description = args.description;
    }
    window.PointOfInterest = PointOfInterest;
    inheritPrototype(PointOfInterest, google.maps.Marker);
    PointOfInterest.prototype.getType = function() {
        return this.type;
    };
    PointOfInterest.prototype.getDescription = function() {
        return this.description;
    };

    // Extention of google.maps.Polyline
    function Track(args) {
        if (typeof args.clickable === 'undefined') args.clickable = false;
        if (typeof args.draggable === 'undefined') args.draggable = false;
        if (typeof args.editable === 'undefined') args.editable = false;
        google.maps.Polyline.call(this, args);
        if (typeof args.title !== 'undefined') this.title = args.title;
        if (typeof args.type !== 'undefined') this.type = args.type;
        if (typeof args.description !== 'undefined') this.description = args.description;
    }
    window.Track = Track;
    inheritPrototype(Track, google.maps.Polyline);
    Track.prototype.getTitle = function() {
        return this.title;
    };
    Track.prototype.getType = function() {
        return this.type;
    };
    Track.prototype.getDescription = function() {
        return this.description;
    };

    // Container for the whole route
    function Route(args) {
        if (typeof args.title !== 'undefined') this.title = args.title;
        if (typeof args.type !== 'undefined') this.type = args.type;
        if (typeof args.difficulty !== 'undefined') this.difficulty = args.difficulty;
        if (typeof args.interest !== 'undefined') this.interest = args.interest;
        if (typeof args.description !== 'undefined') this.description = args.description;
        if (typeof args.tracks !== 'undefined' &&
            Array.isArray(args.tracks)) this.tracks = args.tracks;
            if (typeof args.pois !== 'undefined' &&
                Array.isArray(args.pois)) this.pois = args.pois;
        }
    window.Route = Route;
    Route.prototype.getTitle = function() {
        return this.title;
    };
    Route.prototype.getType = function() {
        return this.type;
    };
    Route.prototype.getDifficulty = function() {
        return this.difficulty;
    };
    Route.prototype.getInterest = function() {
        return this.interest;
    };
    Route.prototype.getDescription = function() {
        return this.description;
    };
    Route.prototype.getTracks = function() {
        return this.tracks;
    };
    Route.prototype.getPois = function() {
        return this.pois;
    };
}(window));
