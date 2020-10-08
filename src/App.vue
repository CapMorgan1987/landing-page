<template>
	<div id="app">
		<app-header />
		<app-hero />
		<app-services />
		<app-phone />
		<app-mail />
		<app-phone />
		<app-slider />
		<app-banner />
		<app-transport />
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";
	import Services from "./components/Services.vue";
	import Phone from "./components/Phone.vue";
	import Mail from "./components/Mail.vue";
	import Slider from "./components/Slider.vue";
	import Banner from "./components/Banner.vue";
	import Transport from "./components/Transport.vue";

	export default {
		name: "App",
		components: {
			"app-header": Header,
			"app-hero": Hero,
			"app-services": Services,
			"app-phone": Phone,
			"app-mail": Mail,
			"app-slider": Slider,
			"app-banner": Banner,
			"app-transport": Transport,
		},
	};
</script>

<style>
	body {
		font-family: "Montserrat";
		color: #58585b;
	}

	.font400 {
		font-weight: 400;
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
		border: 2px solid white !important;
		transition-duration: 500ms;
	}
	.btn-arena:hover {
		background-color: white !important;
		color: #8bc63f !important;
		border: 2px solid #8bc63f !important;
	}
</style>
