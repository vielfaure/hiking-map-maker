(function (angular, google) {
    'use strict';

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
                },
                click: function(map, eventName, args) {
                    if ($scope.myTrack === undefined)
                        $scope.myTrack = new Track({title: "Sample polyline", strokeColor: "#333", map: $scope.map});
                    $scope.myTrack.getPath().push(args[0].latLng);
                    console.log('[log] ' + args[0].latLng + ' added to ' + $scope.myTrack.getTitle());
                }
            },
            options: {
                disableDefaultUI: true
            }
        };
    }]);
}(angular, google));
