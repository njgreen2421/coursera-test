(function () {
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http){
    var service = this;
    var baseUrl = 'https://davids-restaurant.herokuapp.com';

    service.getAllCategories = function() {
        return $http.get(baseUrl + '/categories.json')
            .then(function (result) {
                return result.data;
        });
    }

    service.getItemsForCategory = function(categoryShortName) {
        return $http.get(baseUrl + '/menu_items.json', {
            params: { category : categoryShortName }
        })
            .then(function (result) {
                return result.data;
        });
    }
}

})();
