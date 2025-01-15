<script lang="ts">
    import { onMount } from 'svelte';

	let { data } = $props()
    let text = data.meta.phase; // Example text

    let map;

    const initialCoords = data.meta.geometry.map(coord => parseFloat(coord)); // Convert coordinates to numbers
    const initialZoom = 12;

    onMount(async () => {
        // Ensure this code runs only in the browser
        if (typeof window !== 'undefined') {
            const L = await import('leaflet'); // Dynamically import Leaflet

            // Initialize the map
            map = L.map('map').setView(initialCoords, initialZoom);

            // Add a tile layer (OpenStreetMap in this example)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add a marker
            L.marker(initialCoords).addTo(map).bindPopup(data.meta.title);

            return () => {
                // Cleanup when the component is destroyed
                if (map) map.remove();
            };
        }
    });
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <div class="box">
        <div class="prose">
            <hgroup>
                <span style="background: {text === 'Approved' ? 'green' : text === 'Under Review' ? 'orange' : 'red'}" class="tag">{data.meta.phase}</span>
                <span class="tag" >Units: {data.meta.units}</span>
                <span class="tag">{data.meta.developer}</span>
                <h1>{data.meta.title}</h1>
            </hgroup>
            <div id="map"></div>
            <data.content />
            <h2>Permits</h2>
            {#each Object.entries(data.meta.permits) as [permitId, permitDetails]}
                <p><strong>{permitId}</strong> {permitDetails.status}</p>
                <p>{permitDetails.description}</p>
            {/each}
        </div>
    </div>
</article>

<style>
    #map {
        display: flex;
        min-width: 200px;
        height: 250px;
        width: 100%;
        border-radius: 10px;
    }
    .map-container {
        display: flex;
        margin-top: 1rem;
        box-shadow: 0 3px 10px rgba(0, 0, 0, .1);
    }
</style>