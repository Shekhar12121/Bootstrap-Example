app.controller('playController', function($scope,$route,$routeParams,$http){
	

	 $scope.getPlayers = function(){
	 	$http.get('/api/players')
	   .then(function(res){
	   	$scope.players = res.data;
	   });
	};
    
    //show button
	 $scope.showPlayer = function(){
	 	var id = $routeParams.id;
	 	$http.get('/api/players/' + id)
	   .then(function(res){
	   	$scope.player = res.data;
	   });
	};
   
   //Add new player
	$scope.addPlayer = function(){
		$http.post('/api/players/', $scope.player).then(function(res){
			window.location.href = '/';
		})
	}

   //edit button
   $scope.updatePlayer = function(){
   	var id = $routeParams.id;
		$http.put('/api/players/' + id, $scope.player).then(function(res){
			window.location.href = '/';
		})
	};
 

    //delete button
	$scope.deletePlayer = function(id){
		var id = id;
		$http.delete('/api/players/'+ id).then(function(response){
			$route.reload();
		});
	};


})