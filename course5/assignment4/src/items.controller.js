(function () {
'use strict';

 angular.module('MenuApp')
     .controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['categoryItems'];
function CategoryItemsController(categoryItems) {
    console.log('category');
    console.log(categoryItems);
    console.log(categoryItems.menu_items[0].name);
    var ctrl = this;
    ctrl.categoryItems = categoryItems;
}

})();