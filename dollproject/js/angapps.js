var myApp = angular.module('myApp', [
    //'ngRoute',
    //'shopControllers'
    //

]);

myApp.controller('SpecialsController', ['$scope', '$http', function($scope, $http) {
  console.log("before trying to get the data");
    $http.get('js/data.json').success(function(data) {
        $scope.products = data;
        console.log("success in getting the data");
        console.log($scope.products);
        //set totals for purchases and overall
        $scope.purchases=0;
        $scope.overall=0;
        //
        //

        for(i=0;i<$scope.products.length;i++)
        {
          console.log(Cookies.get($scope.products[i].name));

          if(Cookies.get($scope.products[i].name)===0||Cookies.get($scope.products[i].name)===undefined)
          {
          console.log("nothing to show");

          }
          else {
            //increment the purchases variable
            $scope.purchases++;
            //put the total in the total field
            $scope.products[i].total=Cookies.get($scope.products[i].name);
            $scope.parsedTotal=parseInt(Cookies.get($scope.products[i].name));
            $scope.products[i].subtotal=$scope.parsedTotal*$scope.products[i].price;
            $scope.products[i].subtotal=$scope.products[i].subtotal.toFixed(2);
            $scope.overall=$scope.overall+(Cookies.get($scope.products[i].name)*$scope.products[i].price);

          }

        }
          //
          //
          //
          // $scope.overall=$scope.overall.toFixed(2);
          //
          // console.log("Total purchases so far: " + $scope.overall);
        });






      //Method to purchase instantly one item
      $scope.buyStuff=function($index){

        //get it to add one every time its clicked
        $scope.products[$index].total++;
        Cookies.set($scope.products[$index].name,$scope.products[$index].total);

        //confirmation message for testing
        console.log($scope.products[$index].name + " " + $scope.products[$index].total);


      };

      $scope.removeStuff=function(index){
        //get it to add one every time its clicked
        $scope.products[index].total--;
        Cookies.set($scope.products[index].name,$scope.products[index].total);

        //confirmation message for testing
        console.log($scope.products[index].name + " " + $scope.products[index].total);
      };

    //});


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
