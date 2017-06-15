(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      resolve: {
          categoriesdata : ['MenuDataService', function(MenuDataService){
            return MenuDataService.getAllCategories();
            }]
        },
        controller: 'CategoriesController as list',
    })

    .state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'src/items.html',
      resolve: {
          categoryItems : ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        },
      controller: 'CategoryItemsController as catItemsCtrl'
    });
}

})();