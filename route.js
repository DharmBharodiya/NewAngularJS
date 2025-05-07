angular.module("MyApp", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "home.html",
        controller: "HomeCtrl"
      })
      .when("/about", {
        templateUrl: "about.html",
        controller: "AboutCtrl"
      })
      .when("/contact", {
        templateUrl: "contact.html",
        controller: "ContactCtrl"
      })
      .otherwise({
        redirectTo: "/home"
      });
  }])
  .controller("HomeCtrl", ['$scope', function($scope) {
    $scope.message = "This is home page.";
  }])
  .controller("AboutCtrl", ['$scope', function($scope) {
    $scope.message = "This is about page.";
    $scope.team = ["Alice", "Dharm", "Astha"];
  }])
  .controller("ContactCtrl", ['$scope', function($scope) {
    $scope.message = "This is contact page.";
    $scope.contacts = {
      name: "Dharm",
      email: "Dharm@gmail.com"
    };
  }]);