<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="unit">
    <article>
        <hgroup>
            <h1>{data.meta.title}</h1>
            <p>{data.meta.address}</p>
            <p>{data.meta.phase}</p>
            <p>{data.meta.units}</p>
        </hgroup>

        <div class="tags">
            {#each data.meta.categories as category}
                <span class="surface-4">&num;{category}</span>
            {/each}
        </div>
        <div class="prose">
            <data.content />
        </div>
        <div>
            {#each Object.entries(data.meta.permits) as [permitId, permitDetails]}
                <p><strong>{permitId}</strong> {permitDetails.status}</p>
                <p>{permitDetails.description}</p>
            {/each}
        </div>
    </article>
</div>