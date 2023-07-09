import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Barcelona = () => {
	const mapContainerRef = useRef(null);

	const googleChecker = () => {
		if (!window.google) {
			setTimeout(googleChecker, 100);
			console.log("not there yet");
		} else {
			console.log("we're good to go!!");
			renderMap();
		}
	}

	const renderMap = () => {
		const coords = { lat: 41.375885, lng: 2.177813 };
		// create map instance
		new window.google.maps.Map(mapContainerRef.current, {
			zoom: 16,
			center: {
				lat: coords.lat,
				lng: coords.lng
			}
		});
	}

	useEffect(() => {
		googleChecker();
	}, []);

	return (
		<div className="card map-holder">
			<div className="card-block" ref={mapContainerRef} />
		</div>
	);
}

const App = () => (
	<div className="row">
		<div className="col-12">
			<h2 className="text-center">React - Google Maps</h2>
			<hr />
			<Barcelona />
		</div>
	</div>
);

ReactDOM.render(<App />, document.getElementById("app"));
