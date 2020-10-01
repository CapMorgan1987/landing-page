<template>
	<div id="app">
		<app-header />
		<app-hero />
		<app-services />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";
	import Services from "./components/Services.vue";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-hero": Hero,
			"app-services": Services,
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
