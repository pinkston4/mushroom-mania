"use strict";

app.controller("ShroomCtrl", function ($scope, ShroomData) {
	ShroomData.getShroomData()
	.then( (mushroomData) => {
		console.log("mushroom data from controller", mushroomData);
		$scope.mushroom = mushroomData;
		console.log("mushroom", $scope.mushroom);
		$scope.$apply();
	});
});