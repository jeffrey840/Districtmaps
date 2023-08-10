function hexToKMLColor(hexColor) {
	// Remove the hash (#) symbol if it's present
	hexColor = hexColor.replace('#', '');

	// Extract the red, green, and blue components from the hex color
	const red = parseInt(hexColor.substring(0, 2), 16);
	const green = parseInt(hexColor.substring(2, 4), 16);
	const blue = parseInt(hexColor.substring(4, 6), 16);

	// Convert to KML color format (AABBGGRR)
	const kmlColor = 'ff' + blue.toString(16) + green.toString(16) + red.toString(16);

	return kmlColor;
}

// Test the function
const hexColorCode = '#FFA500'; // Orange
const kmlColorCode = hexToKMLColor(hexColorCode);
alert(kmlColorCode); // Output: "ff00a5ff"
