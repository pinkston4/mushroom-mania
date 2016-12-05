"use strict";

var app = angular.module("Shrooms", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: 'partials/shrooms.html',
		controller: 'ShroomCtrl'
	});
});

app.run( function(FBcreds) {
	let creds = FBcreds;
	let authConfig = {
		apiKey: creds.key,
		authDomain: creds.authDomain
	};
	firebase.initializeApp(authConfig);
});