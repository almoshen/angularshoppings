/**
 * Created by skylark on 4/17/2017.
 */
(function() {

    "use strict";

    angular
        .module('tmallApp')
        .factory('tmallFactory', function ($http, $timeout) {
            var products, url = 'data/products.json';
            function getProducts() {
                return products;
            }
            function getProductById(id) {
              return products[id];
            }
            $timeout(function(){
              $http.get(url).then(function(response){
                products = response.data;
                console.log(products);
              })
            },0)
            return {
                getProducts:getProducts,
                getProductById: getProductById
            }
        });
})();
