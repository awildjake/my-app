<script>
    import { page } from "$app/stores"
    
    $: routeId = $page.route.id;
</script>

<header>
    <div class="flexbox">
        <div class="site-logo">
            <h1>Test</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/" class:active={routeId == "/"}>Home</a></li>
                <li><a href="/about" class:active={routeId == "/about"}>About</a></li>
                <li><a href="/list" class:active={routeId == "/list"}>List</a></li>
                <li><a href="/blog" class:active={routeId == "/blog"}>Blog</a></li>
            </ul>
        </nav>
    </div>
</header>