(function () {
'use strict';

//Module, controller, service specification
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//Controller definitions
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItemsToBuy();

  showList.BuyItem = function(itemIndex){
    console.log("You clicked on index:"+itemIndex);
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService){
 var showList = this;
 showList.items = ShoppingListCheckOffService.getBoughtItems();
}
//Service definitions
function ShoppingListCheckOffService() {
//Define service functions here
var service = this;

//define lists
var toBuyItems = [];
var boughtItems = [];

//push initial 5 items to list
var item1 = {
  name: "cookies",
  quantity: 10
};
var item2 = {
  name: "sandwiches",
  quantity: 5
};
var item3 = {
  name: "chips",
  quantity: 7
};
var item4 = {
  name: "crackers",
  quantity: 4
};
var item5 = {
  name: "fruit",
  quantity: 1
};
//Push items to initial array
toBuyItems.push(item1);
toBuyItems.push(item2);
toBuyItems.push(item3);
toBuyItems.push(item4);
toBuyItems.push(item5);


//Service functions
service.getItemsToBuy = function() {
  return toBuyItems;
}

service.getBoughtItems = function(){
  return boughtItems;
}

service.buyItem = function(itemIndex) {
//Add bought item = to bought items list
boughtItems.push(toBuyItems[itemIndex]);
//Remove bought item from toBuyItems list
toBuyItems.splice(itemIndex,1);

}




}
})();
