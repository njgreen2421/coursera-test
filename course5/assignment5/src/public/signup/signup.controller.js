(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {

  var $ctrl = this;
  $ctrl.signedUp = UserService.signedUp;
  $ctrl.favDishInvalid = false;
  $ctrl.reg = {};

  $ctrl.submit = function() {

    MenuService.getMenuItem($ctrl.reg.favDish)
      .then(
        function(data) {
          $ctrl.favDishInvalid = false;
          UserService.signedUp = true;
          $ctrl.signedUp = UserService.signedUp;
          UserService.registeredUser = $ctrl.reg;
          UserService.registeredUserFavDish = data;
        }, 
        function (data) {
          $ctrl.favDishInvalid = true;
        } 
      );
  }

}

})();