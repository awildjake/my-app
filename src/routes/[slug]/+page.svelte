<script lang="ts">
	let { data } = $props()

</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<div class="unit main-col">
    <article>
        <div class="prose">
            <hgroup>
                <span class="tag">{data.meta.phase}</span>
                <span class="tag">Units: {data.meta.units}</span>
                <span class="tag">{data.meta.developer}</span>
                <h1>{data.meta.title}</h1>
            </hgroup>
            <data.content />
            <h2>Permits</h2>
            {#each Object.entries(data.meta.permits) as [permitId, permitDetails]}
                <p><strong>{permitId}</strong> {permitDetails.status}</p>
                <p>{permitDetails.description}</p>
            {/each}
        </div>
    </article>
</div>