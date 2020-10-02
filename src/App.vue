<template>
	<div id="app">
		<app-header />
		<app-hero />
		<app-services />
		<app-phone />
		<app-mail />
		<app-phone />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";
	import Services from "./components/Services.vue";
	import Phone from "./components/Phone.vue";
	import Mail from "./components/Mail.vue";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-hero": Hero,
			"app-services": Services,
			"app-phone": Phone,
			"app-mail": Mail,
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
	.arena-background-light {
		background-color: #8bc63fcb;
	}
	.arena-green {
		color: #8bc63f;
	}
	.btn-arena {
		background-color: #8bc63f !important;
		color: white !important;
		border: 1px solid white !important;
	}
	.btn-arena:hover {
		background-color: white !important;
		color: #8bc63f !important;
		border: 1px solid #8bc63f !important;
	}
</style>
