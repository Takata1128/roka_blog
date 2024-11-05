<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let article: ArticleInfo;
</script>

<Card href="/articles/{article.slug}" class="w-80">
	<h5 class="font-bold">前の記事</h5>
	<p>{article.metadata.title}</p>
</Card>
