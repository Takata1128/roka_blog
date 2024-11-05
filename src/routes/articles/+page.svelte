<script lang="ts">
	import ArticleLink from '$lib/components/ArticleLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<ul class="article-list">
		{#each data.articles as article}
			<li>
				<ArticleLink {article} />
			</li>
		{/each}
	</ul>
</div>

<style>
	/* .article-list {
		display: grid;
		width: fit-content;
		column-gap: 2em;
		grid-template-columns: repeat(2, auto);
	} */
</style>
