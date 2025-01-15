<script>
    import { page } from "$app/stores"
    
    $: routeId = $page.route.id;
    
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<header>
    <div class="flexbox">
        <div class="site-logo">
            <h1 style="margin: 0px;">Track SJ</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/" class:active={routeId == "/"}>Home</a></li>
                <li><a href="/about" class:active={routeId == "/about"}>About</a></li>
                <li><a href="/list" class:active={routeId == "/list"}>List</a></li>
                <li><a href="/map" class:active={routeId == "/map"}>Map</a></li>
                <li><a href="/info" class:active={routeId == "/info"}>Info</a></li>
            </ul>
        </nav>

    </div>
</header>