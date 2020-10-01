<template>
	<div id="app">
		<app-header />
		<app-hero />
		<app-services />
		<app-phone />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";
	import Services from "./components/Services.vue";
	import Phone from "./components/Phone.vue";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-hero": Hero,
			"app-services": Services,
			"app-phone": Phone,
		},
	};
</script>

<style>
	.black-background {
		background-color: #010101;
	}

	.arena-background {
		background-color: #8bc63f;
	}
	.arena-green {
		color: #8bc63f;
	}
</style>
