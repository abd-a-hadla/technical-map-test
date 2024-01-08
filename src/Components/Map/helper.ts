export function calculateZoomLevel(markerPositions: [number, number][]) {
    const R = 6371; // Earth's radius in kilometers
    let maxDistance = 0;

    // Find the maximum distance between any two markers
    for (let i = 0; i < markerPositions.length; i++) {
        const [lat1, lng1] = markerPositions[i];

        for (let j = i + 1; j < markerPositions.length; j++) {
            const [lat2, lng2] = markerPositions[j];

            const dLat = toRadians(lat2 - lat1);
            const dLng = toRadians(lng2 - lng1);

            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadians(lat1)) *
                Math.cos(toRadians(lat2)) *
                Math.sin(dLng / 2) *
                Math.sin(dLng / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            const distance = R * c;
            maxDistance = Math.max(distance, maxDistance);
        }
    }

    // Estimate zoom level based on the maximum distance and map aspect ratio
    const aspectRatio = 2; // Adjust this value based on the desired aspect ratio
    const latDiff = Math.max(...markerPositions.map(position => position[0])) - Math.min(...markerPositions.map(position => position[0]));
    const lngDiff = Math.max(...markerPositions.map(position => position[1])) - Math.min(...markerPositions.map(position => position[1]));
    const latZoom = Math.floor(Math.log2((360 * aspectRatio) / latDiff));
    const lngZoom = Math.floor(Math.log2(360 / lngDiff));
    const zoom = Math.min(latZoom, lngZoom);

    // Calculate center coordinates of the markers
    const latitudes: number[] = markerPositions.map(position => position[0]);
    const longitudes: number[] = markerPositions.map(position => position[1]);
    const centerLat = (Math.min(...latitudes) + Math.max(...latitudes)) / 2;
    const centerLng = (Math.min(...longitudes) + Math.max(...longitudes)) / 2;

    return {
        center: [centerLat, centerLng],
        zoom: zoom
    };
}

function toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
}