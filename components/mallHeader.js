angular
  .module('tmallApp')
  .directive('mallHeader',function(){
    return {
			restrict: 'E',
			templateUrl: 'components/pages/mallHeader.html',
			replace: true
			}
  });
