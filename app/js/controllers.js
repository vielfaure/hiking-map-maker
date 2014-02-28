(function () {
    'use strict';
    /* global angular, google */

    /* Controllers */

    angular.module('hmmApp.controllers', []).
    controller('MapCtrl', ['$scope', function($scope) {
        $scope.mapConfig = {
            center: {
                latitude: 46.7481387,
                longitude: 1.7021013
            },
            zoom: 6,
            draggable: true,
            events: {
                tilesloaded: function(mapInstance) {
                    $scope.$apply(function () {
                        $scope.map = mapInstance;
                    });
                }
            },
            options: {
                disableDefaultUI: true
            }
        };

    }]);
}());
