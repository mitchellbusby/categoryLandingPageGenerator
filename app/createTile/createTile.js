'use strict';

angular.module('myApp.createTile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/createTile', {
    templateUrl: 'createTile/createTile.html',
    controller: 'CreateTileCtrl'
  });
}])

.controller('CreateTileCtrl', ['$scope', 'PageService', '$rootScope', function($scope, PageService, $rootScope) {
	/*var tile = {
		id: null,
		title: '',
		url: '',
		imageUrl: ''
	};
	$scope.tiles = [{
		id: 1,
		title: '',
		url: '',
		imageUrl: '',
		hasSubtile: false,
		btnId: '',
		subTile: {
			id: '',
			shopAllUrl: '',
			shopAllImageUrl: '',
			popularFilterTitle: '',
			popularFilterImageUrl: '',
			popularFilterOptions: [['',''],['',''],['',''],['','']],
			popularBrands: []
		}
	}];*/
	$scope.addTile = function() {
		$scope.tiles.push({
			id: ($scope.tiles.length>0) ? ($scope.tiles[$scope.tiles.length-1].id+1) : 1,
			title: '',
			url: '',
			imageUrl: '',
			hasSubtile: false,
			btnId: '',
			subTile: {
				id: '',
				shopAllUrl: '',
				shopAllImageUrl: '',
				popularFilterTitle: '',
				popularFilterImageUrl: '',
				popularFilterOptions: [['',''],['',''],['',''],['','']],
				popularBrands: [{name:'', url:'', imageUrl:''}, {name:'', url:'', imageUrl:''},
				{name:'', url:'', imageUrl:''}, {name:'', url:'', imageUrl:''},
				{name:'', url:'', imageUrl:''},{ name:'', url:'', imageUrl:''}]
			}
		});
	}
	$scope.removeTile = function(tileToRemove) {
		$scope.tiles.splice($scope.tiles.indexOf(tileToRemove), 1);
	}
	$scope.next = function() {
		// Do any post processing
		for (var i=0; i<$scope.tiles.length; i++) {
			$scope.tiles[i].subTile.id = $scope.tiles[i].title.replace(/ /g, '');
			$scope.tiles[i].btnId = $scope.tiles[i].subTile.id+'Btn';
		}
		PageService.pageTitle = $scope.pageTitle;
		PageService.categoryTiles = $scope.tiles;
		PageService.numberOfCategoryTiles = $scope.tiles.length;
		$rootScope.$broadcast("updateHtml");
		console.log("Broadcasted");
	}
	$scope.tiles=[];
	$scope.addTile();
}]);