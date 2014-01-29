'use strict';

/* jasmine specs for core go here */

describe('core', function(){

  	var map = new google.maps.Map(document.createElement('div'), {} );
	var myLatlng = new google.maps.LatLng(-25,130);

	it('should say the map exists', function() {
		expect(typeof map).toBe('object');
	});
	
	it('should say the coordinates are (-25,130)', function() {
		expect(myLatlng.lat()).toBe(-25);
		expect(myLatlng.lng()).toBe(130);
	});

	it('should create a PointOfInterest', function() {
		var a = new PointOfInterest(myLatlng, "Name", false, "Description", map);
		expect(typeof a).toBe('object');
		expect(a.getTitle()).toBe('Name');
		expect(a.getType()).toBe(false);
		expect(a.getDescription()).toBe('Description');
		expect(a.getMap()).toBe(map);
	});

	it('should create a Track', function() {
		var a = new Track(new google.maps.MVCArray(), "Name", false, "Description", "#ffffff", 1, 1, map);
		expect(typeof a).toBe('object');
		expect(a.getTitle()).toBe('Name');
		expect(a.getType()).toBe(false);
		expect(a.getDescription()).toBe('Description');
		expect(a.getMap()).toBe(map);
	});

});
