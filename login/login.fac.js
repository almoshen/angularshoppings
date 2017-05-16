(function(){

	"use strict";

	angular
		.module('tmallApp')
		.factory('loginFactory', function($http){

			 function logIn(){
			 	return $http.get('data/logIn.json');
			 }

			 return {
			 	logIn: logIn
			 }

		});

})();
