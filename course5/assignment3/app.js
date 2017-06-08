(function () {
'use strict';

//Module, controller, service specification
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
//Controller definitions

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true  
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this; 
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.isEmpty = true;
  //showList.items = ShoppingListCheckOffService.getItemsToBuy();
  ctrl.PerformSearch = function(searchTerm){
     MenuSearchService.getMatchedMenuItems(searchTerm)
            .then(function(result){
                ctrl.found = result;
                ctrl.isEmpty=false;
            });                
  }



   ctrl.removeItem = function(itemIndex){
    ctrl.found.splice(itemIndex,1);
    if (ctrl.found.length==0) { ctrl.isEmpty=true;}
   }
}

//Service definitions
MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
//Define service functions here
var service = this;


//Service functions
service.getMatchedMenuItems = function(searchTerm) {

  return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")          
    }).then(function (result){
      //console.log(result.data.menu_items);
      var foundItems=[];
      var menuItems = result.data.menu_items;
      var descrWordArray;
       if (!searchTerm) {
         foundItems.push({name: "Nothing Found",
          description:"No Results. Please search again."});
        return foundItems;
       }
                

      //Loop through menu items
      for (var i = 0; i< menuItems.length; i++){
         descrWordArray = menuItems[i].description.toUpperCase().split(" ");
         //Loop through words in Description
         for(var j=0; j<descrWordArray.length;j++){
            if (descrWordArray[j] === searchTerm.toUpperCase()) {
              foundItems.push(menuItems[i]);
              break;
            }
         }
      }
      if (foundItems.length==0){
        foundItems.push({name: "Nothing Found",
          description:"No Results. Please search again."});
      }
      return foundItems;
    })
    .catch(function(error){
      return error.data;
    });
  
};




}
})();
