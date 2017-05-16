(function() {

    "use strict";
    angular
    .module('tmallApp')
    .factory("dataFactory", function () {

    var myStore = new store();
    var storeDetails = new detailsprod();

    return {
        store: myStore,
        detailsprod: storeDetails
    };
  });
})();
