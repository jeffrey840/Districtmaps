
//this code displayed an overlay
//kml is requested from github and then applied to google maps
function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: { lat: 37.06, lng: -95.68 },
	});
	const kmlLayer = new google.maps.KmlLayer({
		url: "https://raw.githubusercontent.com/jeffrey840/zipcode_2/main/zip77056.kml",
		suppressInfoWindows: true,
		map: map,
	});

	kmlLayer.addListener("click", (kmlEvent) => {
		const text = kmlEvent.featureData.description;

		showInContentWindow(text);
	});

	function showInContentWindow(text) {
		const sidebar = document.getElementById("sidebar");

		sidebar.innerHTML = text;
	}
}

window.initMap = initMap;