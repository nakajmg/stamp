// module for ng-app
var sr = angular.module('stamprally', ['experts']);

// define routing - view - controller
sr.config(function($routeProvider){
	$routeProvider.
		when("/", {
			templateUrl: "./views/memberList.html",
			controller: "MemberListCtrl"
		}).
		when("/info", {
			templateUrl: "./views/memberInfo.html",
			controller: "MemberInfoCtrl"
		}).
		otherwise({ redirectTo: "/" });
});

sr.value('data', {});

// for memberlist.html
sr.controller('MemberListCtrl', function($scope, data, expertsData){
	data = expertsData.get();
	$scope.experts = data;
});

// for memberinfo.html
sr.controller('MemberInfoCtrl', function($scope, $routeParams, data){
	
});

/**
 * module for getting json
 */
angular.module('experts', ['ngResource'])
	.factory('expertsData', function($resource){
		return $resource('./json/data.json', {}, {
			get: { method:'GET' }
		});
	});
