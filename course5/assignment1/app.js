(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope','$filter'];
function LunchCheckController($scope, $filter)
{
  

  $scope.checkTooMuch = function () {
    var toCheck = $scope.input;
    if (typeof toCheck ==='undefined' || toCheck===""){
      $scope.checkResult = "Please enter data first";
    }
    else {
    var listArray = $scope.input.split(",");
    
    var nonEmptyCount = listArray.length;
    //check each element for emptyness. --optional so commented out.
    //  nonEmptyCount = 0;
    // for (var i=0;i<listArray.length;i++ ){
    //   if (listArray[i] != "") {
    //   nonEmptyCount++;
    //   }
    // }

    if (nonEmptyCount <=3) {
      $scope.checkResult = "Enjoy!";
    } else {
      $scope.checkResult = "Too much!";
    }
    
      }
  };


  
}


})();
