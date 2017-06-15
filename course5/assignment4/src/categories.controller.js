(function () {
'use strict';

angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoriesdata'];
function CategoriesController(categoriesdata) {
    var ctrl = this;
    ctrl.categories = categoriesdata;
}

})();