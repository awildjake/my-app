<script lang="ts">
    export let data
</script>
<!-- src/routes/+page.svelte -->

<svelte:head>
    <title>List</title>
</svelte:head>

<div class="flexcontainer">
    <div class="unit">
        <article>
            <div class="prose">
                <table class="developments">
                    <thead>
                        <tr>
                            <th>Units</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.developments as development}
                        <tr>
                            <td>{development.units}</td>
                            <td><a href={development.slug} class="title">{development.title}</a></td>
                            <td><span class="tag">{development.phase}</span></td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </article>
    </div>
</div>
<style>
    .developments {

        margin-left: auto;
        margin-right: auto;
    }
    .developmments tbody td{
        justify-content: center;
    }
    .active-li {
        background-color: #fff;
        
    }
</style>