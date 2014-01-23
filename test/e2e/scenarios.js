'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Hiking Map Maker App', function() {

  beforeEach(function() {
    browser().navigateTo('app/index.html');
  });


  it('should automatically redirect to /map', function() {
    expect(browser().location().url()).toBe("/map");
  });


  describe('map', function() {

    beforeEach(function() {
      browser().navigateTo('#/map');
    });


    it('should render map when user navigates to /map', function() {
      expect(element('[ng-view] h1').text()).
        toMatch(/Here's the map/);
    });

  });
});
