<script lang="ts">
    import { onMount } from 'svelte';
    import type { Development } from "$lib/types.ts";

    let developments: Development[] = [];

    let map;

    // Tracks the selected filter
    let selectedPhase = 'All';

    // Initial map settings
    const initialCoords = [37.26122126028809, -121.92632026290008]; // Latitude and Longitude
    const initialZoom = 13;

    // Fetch data when the component is mounted
    onMount(async () => {
        try {
            // Fetch developments data
            const response = await fetch('/api/developments');
            developments = await response.json();

            // Initialize the map
            initializeMap();
        } catch (error) {
            console.error('Error fetching developments:', error);
        }
    });

    // Function to initialize the map
    function initializeMap() {
        // Ensure this code runs only in the browser
        if (typeof window !== 'undefined') {

            // Initialize the map
            map = L.map('map').setView(initialCoords, initialZoom);

            // Add layers
            var completedLayer = L.layerGroup([]);
            var approvedLayer = L.layerGroup([]);
            var constructionLayer = L.layerGroup([]);
            var withdrawnLayer = L.layerGroup([]);
            var underReviewLayer = L.layerGroup([]);

            // Define an Awesome Marker
            const underReviewMarker = L.AwesomeMarkers.icon({
                icon: 'info-sign', // Font Awesome or Glyphicons icon
                markerColor: 'under-review', // Marker color
                prefix: 'glyphicon', // Icon library prefix
            });
            const approvedMarker = L.AwesomeMarkers.icon({
                icon: 'info-sign', // Font Awesome or Glyphicons icon
                markerColor: 'blue', // Marker color
                prefix: 'glyphicon', // Icon library prefix
            });
            const completeMarker = L.AwesomeMarkers.icon({
                icon: 'info-sign', // Font Awesome or Glyphicons icon
                markerColor: 'green', // Marker color
                prefix: 'glyphicon', // Icon library prefix
            });
            const withdrawnMarker = L.AwesomeMarkers.icon({
                icon: 'info-sign', // Font Awesome or Glyphicons icon
                markerColor: 'lightgray', // Marker color
                prefix: 'glyphicon', // Icon library prefix
            });

            var overlayMaps = {
                "<span class='tag under-review'>Under Review</span>": underReviewLayer,
                "<span class='tag approved'>Approved</span>": approvedLayer,
                "<span class='tag complete'>Complete</span>": completedLayer,
                "<span class='tag withdrawn'>Withdrawn</span>": withdrawnLayer,
            };

            var layerControl = L.control.layers(null, overlayMaps, {collapsed:false, position:'topright'}).addTo(map);

            // Add a tile layer (OpenStreetMap in this example)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Define an Awesome Marker
            const awesomeMarker = L.AwesomeMarkers.icon({
                icon: 'info-sign', // Font Awesome or Glyphicons icon
                markerColor: 'white', // Marker color
                prefix: 'glyphicon', // Icon library prefix
            });

            // Add a marker for each development
            developments.forEach(dev => {
                if (dev.geometry && dev.geometry.length === 2) {
                    const coords = dev.geometry.map(coord => parseFloat(coord));
                    if (dev.phase === 'Under Review') {
                        const marker = L.marker(coords, { icon: underReviewMarker}).addTo(underReviewLayer);
                        marker.bindPopup(`
                            <strong>${dev.title}</strong><br>
                            <em>${dev.address}</em><br>
                            Developer: ${dev.developer}<br>
                            Units: ${dev.units}<br>
                            Phase: ${dev.phase}
                        `);
                        marker.on('mouseover', function() { this.openPopup() });
                        marker.on('mouseout', function() { this.closePopup(); });
                        marker.on('click', function() { open(dev.slug, '_self'); });
                    } else if (dev.phase === 'Approved') {
                        const marker = L.marker(coords, { icon: approvedMarker }).addTo(approvedLayer);
                        marker.bindPopup(`
                            <strong>${dev.title}</strong><br>
                            <em>${dev.address}</em><br>
                            Developer: ${dev.developer}<br>
                            Units: ${dev.units}<br>
                            Phase: ${dev.phase}
                        `);
                        marker.on('mouseover', function() { this.openPopup() });
                        marker.on('mouseout', function() { this.closePopup(); });
                    } else if (dev.phase === 'Withdrawn'){
                        const marker = L.marker(coords, {icon: withdrawnMarker}).addTo(withdrawnLayer);
                        marker.bindPopup(`
                            <strong>${dev.title}</strong><br>
                            <em>${dev.address}</em><br>
                            Developer: ${dev.developer}<br>
                            Units: ${dev.units}<br>
                            Phase: ${dev.phase}
                        `);
                        marker.on('mouseover', function() { this.openPopup() });
                        marker.on('mouseout', function() { this.closePopup(); });
                        marker.on('click', function() { open(dev.slug, '_self'); });
                    } else {
                        const marker = L.marker(coords, {icon: completeMarker}).addTo(completedLayer);
                        marker.bindPopup(`
                            <strong>${dev.title}</strong><br>
                            <em>${dev.address}</em><br>
                            Developer: ${dev.developer}<br>
                            Units: ${dev.units}<br>
                            Phase: ${dev.phase}
                        `);
                        marker.on('mouseover', function() { this.openPopup() });
                        marker.on('mouseout', function() { this.closePopup(); });
                        marker.on('click', function() { open(dev.slug, '_self'); });
                    };
                }
            });

            underReviewLayer.addTo(map);
            completedLayer.addTo(map);
            approvedLayer.addTo(map);
            constructionLayer.addTo(map);
            withdrawnLayer.addTo(map);
            
            var marker = L.marker(initialCoords, {icon: awesomeMarker}).addTo(map).bindPopup('<strong>strange</strong>');

            marker._icon.style.filter = "invert(61%) sepia(66%) saturate(1259%) hue-rotate(350deg) brightness(88%) contrast(79%)"

        }
    }
</script>

<div id="map"></div>

<style>
    #map {
        display: flex;
        min-width: 200px;
        height: 645px;
        width: 750px;
    }
</style>