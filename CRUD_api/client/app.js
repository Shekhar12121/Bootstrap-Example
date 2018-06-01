var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl:'templates/list.html',
		controller:'playController'
	})

	.when('/players',{
		templateUrl:'templates/list.html',
		controller:'playController'
	})

	.when('/players/create',{
		templateUrl:'templates/add.html',
		controller:'playController'
	})

	.when('/players/:id/edit',{
		templateUrl:'templates/edit.html',
		controller:'playController'
	})

	.when('/players/:id/show',{
		templateUrl:'templates/show.html',
		controller:'playController'
	});
});