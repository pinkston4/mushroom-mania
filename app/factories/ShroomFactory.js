"use strict";

app.factory("ShroomData", function($http, FBcreds) {

	let getShroomData = function () {
		let mushrooms = [];
		return new Promise ( (resolve, reject) => {
			$http.get(`${FBcreds.URL}/mushrooms.json`)
			.success( (data) => {
				let newData = data;
				let mushroomData = newData;
				console.log("newData, on ShroomFactory", newData);
				console.log("defined mushroomData on factory", mushroomData);
				Object.keys(mushroomData).forEach((key) => {
					mushroomData[key].id = key;
					mushrooms.push(mushroomData[key]);
				});
				resolve(mushrooms);
			})
			.error( (error) => {
				reject(error);
			});
		});
	};
	return {getShroomData};
});