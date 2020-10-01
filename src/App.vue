<template>
	<div id="app">
		<app-header />
		<app-hero />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-hero": Hero,
		},
	};
</script>

<style>
	.black-background {
		background-color: #010101;
	}

	.arena-green {
		color: #8bc63f;
	}
</style>
