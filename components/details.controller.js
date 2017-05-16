(function(){
    'use strict';

    angular
        .module('tmallApp')
        .controller('detailsController',function($scope,tmallFactory,$routeParams){
        

            $scope.details = tmallFactory.getProductById($routeParams.productId);
            console.log($scope.details);


          /*$scope.search = function() {
            var url = 'data/products.json';
            return $http.get(url);
          }

          function getById(arr, id) {
            for (var i = 0, len = arr.length; i < len; i++) {
              if (arr[i].id === id) {
                return arr[i];
              }
            }
          }

          $scope.search().then(function(response) {
            $scope.details = getById(response.data, $routeParams.productId);
          }); */

        /*  function getDetails(products) {
            var details = [];
            angular.forEach(products, function(item){
              angular.forEach(item.id, function(detail){
                details.push(detail);
              });
            });
            return _.uniq(details);
          } */
    });
})();
