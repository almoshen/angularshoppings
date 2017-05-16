
(function(){
    'use strict';

    angular
        .module('tmallApp')
        .controller('tmallController',function($scope,$http,tmallFactory, $location,$routeParams){
        
        $scope.products = tmallFactory.getProducts();
        $scope.categories = getCategories($scope.products);

          $scope.logIn = function(){
              $location.path('#!/login')
          }
            
          $scope.logOut = function(){
              $location.path('/')
          }

          function getCategories(products) {
            var categories = [];
            angular.forEach(products, function(item){
              angular.forEach(item.specifications.type, function(category){
                categories.push(category);
              });
            });
            return _.uniq(categories);
          }

          /*function getDetails(products) {
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
