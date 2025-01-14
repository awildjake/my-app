<script lang="ts">
    export let data
</script>
<!-- src/routes/+page.svelte -->

<svelte:head>
    <title>List</title>
</svelte:head>
<div class="flexcontainer">
    <div class="unit one-fifth">
        <ul>
            <li><a class="tag-a" href="/list">⊙ All</a></li>
            <li>Under Review</li>
            <li>Approved</li>
            <li>Complete</li>
        </ul>
    </div>
    <div class="unit four-fifths">
        <article>
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
        </article>
    </div>
</div>
<style>
    .developments {
        width: 100%;
        justify-content: center;
    }
    .developmments tbody td{
        justify-content: center;
    }
    .active-li {
        background-color: #fff;
        
    }
</style>