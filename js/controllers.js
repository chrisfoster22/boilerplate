
var seedControllers = angular.module('seedControllers', []);


seedControllers.controller('HomeController', function($scope, $http, Data, Markers) {
  Data.get().then(function (data) {
      });

      $scope.message = "Hello!";

});

seedControllers.controller('MapController', function($scope, $http, Data, Markers, NgMap) {

  // function initMap() {
  //     var mapDiv = document.getElementById('map');
  //     var map = new google.maps.Map(mapDiv, {
  //       center: {lat: 37.553, lng: -77.462},
  //       zoom: 14
  //     });
  //
  //     var marker = new google.maps.Marker({
  //
  //       });
  //
  //   }

    NgMap.getMap().then(function(map) {
      map.center = [37.553, -77.462]
  });

  Markers.get().then(function (data) {
    $scope.positions = data.data.markers;
        console.log($scope.markers);
      });



});
