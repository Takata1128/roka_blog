<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Roka Blog</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />

	<div class="flex-grow px-4 py-6">
		<slot />
	</div>

	<Footer />
</div>
