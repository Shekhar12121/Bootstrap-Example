app.controller('studController',function($scope, $http){
	
	$scope.loadinfo = function (){
		$http.get('/api/student')
		  .then(function(res){
		  	$scope.info = res.data;

		  })
	}	


	$scope.formSubmit = function(){
		$http.post('/api/student', $scope.user).then(function(res){
      window.location.href = '/'
		})

	}
})