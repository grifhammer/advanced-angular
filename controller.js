var countryApp = angular.module('countryApp', ['ngRoute']);

countryApp.config( function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: "country-list.html",
		controller: 'countryController'
	}).
	when('/country/:countryName/:population',{
		templateUrl: "country-detail.html",
		controller: 'countryDetailController'
	}).
	when('/country/:countryName/:population',{
		templateUrl: "country-detail.html",
		controller: 'countryDetailController'
	}).
	when('/capital/:capital/',{
		templateUrl: "country-detail.html",
		controller: 'capitalController'
	}).
	otherwise({
		redirectTo: '/'
	});
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
});

countryApp.controller('countryController', function($scope, $http){
	$http.get('countries.json').success(function(countryData){
		$scope.countries = countryData;
		// console.log($scope.countries)

	});
});

countryApp.controller('countryDetailController', function($scope, $routeParams, $http){
	$scope.name = $routeParams.countryName;
	$scope.population = $routeParams.population;
	$http.get('countries.json').success(function(countryDetailData){
		var country = countryDetailData.filter(function(currCountry){
			return currCountry.name === $scope.name;
		})[0];
		$scope.country = country;

	})
});

countryApp.controller('capitalController', function($scope, $routeParams, $http){
	$scope.capital = $routeParams.capital
	$http.get('countries.json').success(function(countryDetailData){
		var country = countryDetailData.filter(function(currCountry){
			return currCountry.capital === $scope.capital
		})[0]
		$scope.country = country;
	});
});