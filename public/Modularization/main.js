let map;
let loadedLayers = {};

document.addEventListener('DOMContentLoaded', () => {
	map = initGoogleMap();
	setupControls();
});

function setupControls() {
	const controlsDiv = document.getElementById('controls');
	// Assume zipCodesData is an object containing zip codes and their corresponding GeoJSON URLs
	Object.keys(zipCodesData).forEach(zipCode => {
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.id = zipCode;
		checkbox.addEventListener('change', (e) => {
			toggleZipCodeLayer(e.target.id, e.target.checked);
		});

		const label = document.createElement('label');
		label.htmlFor = zipCode;
		label.textContent = `Zip Code ${zipCode}`;

		controlsDiv.appendChild(checkbox);
		controlsDiv.appendChild(label);
	});
}

function toggleZipCodeLayer(zipCode, isChecked) {
	if (isChecked) {
		// Load and display the layer
		if (!loadedLayers[zipCode]) {
			fetchHousesInZipCode(zipCode).then(houses => {
				const layer = displayHousesOnMap(houses);
				loadedLayers[zipCode] = layer;
			});
		}
	} else {
		// Remove the layer from the map
		if (loadedLayers[zipCode]) {
			removeLayerFromMap(loadedLayers[zipCode]);
			delete loadedLayers[zipCode];
		}
	}
}

// Other functions like fetchHousesInZipCode, displayHousesOnMap, removeLayerFromMap...
