<script lang="ts">
    export let data;

    // Tracks the selected filter
    let selectedPhase = 'All';

    // Filtered developments based on the selectedPhase
    $: filteredDevelopments = selectedPhase === 'All'
        ? data.developments
        : data.developments.filter(dev => dev.phase === selectedPhase);

    // Phases for filtering options
    const phases = ['All', 'Approved', 'Under Review', 'Complete', 'Withdrawn'];
</script>

<svelte:head>
    <title>List</title>
</svelte:head>

<article>
    <div class="box">
        <div class="filter-buttons">
            {#each phases as phase}
                <button 
                    on:click={() => selectedPhase = phase}
                    class:selected={selectedPhase === phase}>
                    {phase}
                </button>
            {/each}
        </div>
    </div>
    <div class="box">
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
                    {#each filteredDevelopments as development}
                        <tr>
                            <td>{development.units}</td>
                            <td><a href={development.slug} class="title">{development.title}</a></td>
                            <td>
                                <span 
                                    style="background: {development.phase === 'Approved' ? '#2A81CB' : development.phase === 'Under Review' ? 'orange' : development.phase === 'Withdrawn' ? 'lightgrey' : '#2AAD27'}" 
                                    class="tag">
                                    {development.phase}
                                </span>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
</article>

<style>
    .developments {
        width: 560.63px;
    }
    .filter-buttons {
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 1rem;
    }
    .filter-buttons button {
        display: flex;
        margin-right: 0.5rem;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #f3f3f3;
        font-size: 1rem;
    }
    .filter-buttons button.selected {
        background-color: #007bff;
        color: white;
    }
    .filter-buttons button:hover {
        background-color: #0056b3;
        color: white;
    }
</style>
