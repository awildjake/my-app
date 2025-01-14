<script lang="ts">
    export let data
</script>
<!-- src/routes/+page.svelte -->

<svelte:head>
    <title>Home</title>
</svelte:head>
<div class="unit">
    <article>
        <h1>Home</h1>
        <ul class="developments">
            {#each data.developments as development}
                <li class="development">
                    <a href={development.slug} class="title">{development.title}</a>
                    <p class="date">{development.units}</p>
                </li>
            {/each}
        </ul>
    </article>
</div>
