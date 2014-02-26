'use strict';

/* Controllers */

angular.module('hmmApp.controllers', []).
  controller('MapCtrl', [function($scope) {
  	var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(46.7481387, 1.7021013),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map-canvas-map'), mapOptions);
  }]);
