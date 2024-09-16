<script>
	import ArticleLink from '$lib/components/ArticleLink.svelte';

	export let data;
</script>

<div class="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-slate-100">
	<h1 class="text-3xl font-bold">Roka Blog</h1>
	<div class="mt-4">
		<p class="text-lg text-gray-600">日記を書いていく</p>
	</div>
</div>
<ul>
	{#each data.articles as article}
		<li>
			<ArticleLink {article} />
		</li>
	{/each}
</ul>
