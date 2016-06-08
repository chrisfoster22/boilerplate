(function() {

var myApp = angular.module('myApp', [
  'ui.router',
  'seedControllers',
  'ngSanitize',
  ]);

//you need ngSanitize for changing the innerHTML on an element using Angular.
//See the add_another controller for seeing it in action.

  myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /login
    $urlRouterProvider.otherwise("/home");
    //
    // The states
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home.html"
      })
      .state('page2', {
        url: "/page2",
        templateUrl: "views/page2.html"
      })
      .state('page3', {
        url: "/page3",
        templateUrl: "views/page3.html"
      });
  }); //end config


}()); //end wrapper function
