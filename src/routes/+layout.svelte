<script lang="ts">
	import '../app.css';
	let { children } = $props();
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<div class="layout">
    <Navbar />
	<main>
		<div class="wrap">
			{@render children()}
		</div>
	</main>
    <Footer />
</div>



