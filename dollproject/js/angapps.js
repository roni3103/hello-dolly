var myApp = angular.module('myApp', [
    //'ngRoute',
    //'shopControllers'
]);

myApp.controller('SpecialsController', ['$scope', '$http', function($scope, $http) {
  console.log("before trying to get the data");
    $http.get('js/data.json').success(function(data) {
        $scope.products = data;
        console.log("success in getting the data");

    });
}]);
// myApp.config(['$routeProvider', function($routeProvider) {
//     $routeProvider.
//     when('/specialorders', {
//         templateUrl: 'specials.html',
//         controller: 'SpecialsController'
//     }).
//     otherwise({
//           redirectTo: '/specialorders'
//       });
//
//

// }]);
