<script lang="ts">
	import NextLink from '$lib/components/NextLink.svelte';
	import PrevLink from '$lib/components/PrevLink.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="py-8 px-4 mb-10 rounded-lg flex flex-col items-center bg-slate-100">
	<h1 class="text-3xl font-bold">{data.metadata.title}</h1>
	<div class="flex justify-center items-center w-full mt-4">
		<p
			class="inline-flex items-center px-2 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-sm mr-2"
		>
			{data.metadata.category}
		</p>
		<p class="text-lg text-gray-600 ml-2">{data.metadata.date}</p>
	</div>
</div>

<div class="container mx-auto w-1/2">
	<div class="article-contents">
		<div class="markdown-body prose prose-xl !max-w-none">
			{@html data.htmlContent}
		</div>
	</div>
	<div class="side-bar"></div>
	<div class="flex justify-between mt-10">
		<div>
			{#if data.prevArticleInfo}
				<PrevLink article={data.prevArticleInfo} />
			{/if}
		</div>
		<div>
			{#if data.nextArticleInfo}
				<NextLink article={data.nextArticleInfo} />
			{/if}
		</div>
	</div>
</div>
