'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('app/index.html');
  });

  it('url should be index.html', function() {
    expect(browser().location().url()).toBe('');
  });

});
