<script>
    import { page } from "$app/stores"
    import { base } from '$app/paths';
    
    $: routeId = $page.route.id;
    
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<header>
    <div class="flexbox">
        <div class="site-logo">
            <h1 style="margin: 0px;">Build SJ</h1>
        </div>
        <nav>
            <ul>
                <li><a href="{base}/" class:active={routeId == "{base}/"}>Home</a></li>
                <li><a href="{base}/about" class:active={routeId == "base}/about"}>About</a></li>
                <li><a href="{base}/list" class:active={routeId == "{base}/list"}>List</a></li>
                <li><a href="{base}/map" class:active={routeId == "{base}/map"}>Map</a></li>
                <li><a href="{base}/info" class:active={routeId == "{base}/info"}>Info</a></li>
            </ul>
        </nav>
    </div>
</header>