var app = angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
	
	.when('/',{
		templateUrl : 'template/registration.html',
		controller : 'studController'
	})

	.when('/registerform',{
		templateUrl : 'template/registration.html',
		controller : 'studController'
	})

	.when('/login',{
		templateUrl : 'template/login.html',
		controller : 'studController'
	})
});


/*.when('/',{
		templateUrl:'templates/list.html',
		controller:'empController'
	})

	.when('/employee',{
		templateUrl:'templates/list.html',
		controller:'empController'
	})*/