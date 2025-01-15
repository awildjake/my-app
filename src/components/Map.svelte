<script>
    import L from 'leaflet';
    import { onMount } from 'svelte';

    let map;

    // Initial map settings
    const initialCoords = [51.505, -0.09]; // Latitude and Longitude
    const initialZoom = 13;

    onMount(() => {
        // Initialize the map
        map = L.map('map').setView(initialCoords, initialZoom);

        // Add a tile layer (OpenStreetMap in this example)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker
        L.marker(initialCoords).addTo(map)
            .bindPopup('A simple Leaflet map.')
            .openPopup();

        return () => {
            // Cleanup on component destroy
            map.remove();
        };
    });
</script>

<style>
    #map {
        display: flex;
        min-width: 200px;
        height: 645px;
        width: 645px;
    }
    .map-container {
        display: flex;
        margin-top: 1rem;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
    }
</style>

<div class="map-container">
    <div id="map"></div>
</div>