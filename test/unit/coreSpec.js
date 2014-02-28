(function () {
    'use strict';

    /* jasmine specs for core go here */

    describe('core', function(){

        var map = new google.maps.Map(document.createElement('div'), {} );
        var myLatlng = new google.maps.LatLng(-25,130);

        describe('google.maps.api (quick tests)', function() {
            it('should say the map exists', function() {
                expect(typeof map).toBe('object');
            });
            
            it('should say the coordinates are (-25,130)', function() {
                expect(myLatlng.lat()).toBe(-25);
                expect(myLatlng.lng()).toBe(130);
            });
        })

        describe('PointOfInterest', function() {
            it('should create a PointOfInterest', function() {
                var a = new PointOfInterest({
                    position: myLatlng, 
                    title: "Name", 
                    type: false, 
                    description: "Description", 
                    map: map
                });
                expect(typeof a).toBe('object');
                expect(a.getTitle()).toBe('Name');
                expect(a.getType()).toBe(false);
                expect(a.getDescription()).toBe('Description');
                expect(a.getMap()).toBe(map);
            });
        })

        describe('Track', function() {
            it('should create a Track', function() {
                var a = new Track({
                    title: "Name", 
                    type: false, 
                    description: "Description", 
                    strokeColor: "#ffffff", 
                    strokeOpacity: 1, 
                    strokeWeight: 1, 
                    map: map
                });
                expect(typeof a).toBe('object');
                expect(a.getTitle()).toBe('Name');
                expect(a.getType()).toBe(false);
                expect(a.getDescription()).toBe('Description');
                expect(a.getMap()).toBe(map);
            });
        })

        describe('Route', function() {
            it('should create a Route', function() {
                var a = new Route({
                    title: "Name", 
                    type: false, 
                    description: "Description", 
                    difficulty: 3, 
                    interest: 1
                });
                expect(typeof a).toBe('object');
                expect(a.getTitle()).toBe('Name');
                expect(a.getType()).toBe(false);
                expect(a.getDescription()).toBe('Description');
                expect(a.getDifficulty()).toBe(3);
                expect(a.getInterest()).toBe(1);
            });
        })

    });
}());
