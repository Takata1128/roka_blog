<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Roka Blog</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<header class="flex items-center justify-between px-6 py-3 bg-black">
		<h1>
			<a href="/" class="text-xl font-bold text-white">Roka Blog</a>
		</h1>
		<nav class="flex gap-4">
			<a href="/" class="text-white hover:text-gray-400">home</a>
			<a href="/profiles" class="text-white hover:text-gray-400">Profile</a>
			<a href="/articles" class="text-white hover:text-gray-400">Article</a>
		</nav>
	</header>

	<div class="flex-grow px-4 py-6">
		<slot />
	</div>

	<footer class="bg-black py-2 text-center text-white">
		<p>My Awesome Website!</p>
	</footer>
</div>
