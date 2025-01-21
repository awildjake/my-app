<script lang="ts">
    export let data
</script>
<!-- src/routes/+page.svelte -->

<svelte:head>
    <title>Home</title>
    <!--Leaflet CSS-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""/>

    <!--Leaflet JS-->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    crossorigin=""></script>
</svelte:head>

<article>
    <div class="box">
        <div class="prose">
            <h2>Home</h2>
            <p>Build SJ is a website dedicated to keeping track of ongoing, residential development projects in within the City of San Jose. By clicking on the list or map buttons on the navigation bar you can find information on projects in your neighborhood.</p>
        </div>
    </div>
    <div class="box full-image">
        <img src="/src/img/1989-402_p20.jpg">
    </div>
</article>
