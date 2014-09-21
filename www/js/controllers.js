angular.module('starter.controllers', [])

.controller('ActivityCtrl', function($scope) {
})

.controller('RewardsCtrl', function($scope) {
})

.controller('MapCtrl', function($scope) {
    var init = function(){
        $scope.mapReady = true;
        $scope.map = {
            center: {
                latitude: -31.4,
                longitude: -64.1833333
            },
            zoom: 8
        };
        $scope.options = {scrollwheel: false};
        $scope.marker0 = {
            id:0,
            title: "Family Home",
            coords: {
                latitude: -31.4,
                longitude: -64.1833333
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            },
            show: true
        };
        $scope.marker1 = {
            id:1,
            title: "Kids School",
            coords: {
                latitude: -32,
                longitude: -64.2
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            },
            show: true
        };
        $scope.marker2 = {
            id:2,
            icon: "img/man.png",
            coords: {
                latitude: -32,
                longitude: -65
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            },
            show: true
        };
        $scope.marker3 = {
            id:3,
            icon: "img/woman.png",
            coords: {
                latitude: -31,
                longitude: -63.5
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    $log.log(marker.getPosition().lat());
                    $log.log(marker.getPosition().lng());
                }
            },
            show: true
        };
        $scope.title0 = $scope.marker0.title;
        $scope.title1 = $scope.marker1.title;
    };
    //if($scope.mapReady){
        init();
    //}
})

.controller('FamilyCtrl', function($scope, Family) {
  $scope.family = Family.all();
})

.controller('FamilyDetailCtrl', function($scope, $stateParams, Family) {
  $scope.family = Family.get($stateParams.memberId);
})

.controller('MoreCtrl', function($scope) {
});
