// Definitions of hineritance mechanism
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
function PointOfInterest(position, name, type, description, map) {
    google.maps.Marker.call(this, {
        position: position,
        title: name,
        map: map,
        clickable: false,
        crossOnDrag: false,
        raiseOnDrag: false,
        draggable: false,
        flat: true
    });
    this.type = type;
    this.description = description;
}
inheritPrototype(PointOfInterest, google.maps.Marker);
PointOfInterest.prototype.getType = function() {
    return this.type;
}
PointOfInterest.prototype.getDescription = function() {
    return this.description;
}

// Extention of google.maps.Polyline
function Track(path, name, type, description, color, opacity, weight, map) {
    google.maps.Polyline.call(this, {
        strokeColor: color,
        strokeOpacity: opacity,
        strokeWeight: weight,
        path: path,
        map: map,
        clickable: false,
        draggable: false,
        editable: false
    });
    this.name = name;
    this.type = type;
    this.description = description;
}
inheritPrototype(Track, google.maps.Polyline);
Track.prototype.getTitle = function() {
    return this.name;
}
Track.prototype.getType = function() {
    return this.type;
}
Track.prototype.getDescription = function() {
    return this.description;
}