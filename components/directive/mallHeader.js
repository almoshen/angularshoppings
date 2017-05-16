angular
  .module('tmallApp')
  .directive('mallHeader',function(){
    return {
        restrict: 'E',
        templateUrl: 'components/directive/mallHeader.html',
        
    };
  });
