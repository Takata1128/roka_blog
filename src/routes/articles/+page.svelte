<script lang="ts">
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ul>
	{#each data.articles as article}
		<li>
			<ArticleLink {article} />
		</li>
	{/each}
</ul>
