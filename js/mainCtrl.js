angular.module("friendsList").controller("mainCtrl", function($scope) {
	//We are not passing in an empty array here because we want to use the same friendsList module that was created under app.js.
	//.controller is adding the controller property to the app and uses the same name of our controller from the index.html file.
	//Second parameter is a callback function that has the $scope property built into it--whatever we stick on $scope will not be available in our view (index.html).
	$scope.friends = ["Ashley", "Nancy", "Jennifer", "James", "Tony", "Kevin", "John", "Sally", "Margaret"];

	// $scope.addFriend = function(){
	// 	friends.push(newFriend);
	// 	return friends;
	// }

	$scope.addFriend = function(newFriend){
		$scope.friends.push(newFriend)
		$scope.newFriend = '';
	}
});
