<script lang="ts">
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<header>
	<Navbar>
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
				>Roka Blog</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl}>
			<NavLi href="/" class="text-lg">Home</NavLi>
			<NavLi href="/profiles" class="text-lg">Profiles</NavLi>
			<NavLi href="/articles" class="text-lg">Articles</NavLi>
		</NavUl>
	</Navbar>
</header>
