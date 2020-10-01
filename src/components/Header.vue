<template>
	<section class="has-background-black py-3 px-3">
		<b-image
			class="img-header"
			:src="require('@/assets/img/logo_it_white.webp')"
			:webp-fallback="require('@/assets/img/logo_it_white.png')"
		></b-image>
	</section>
</template>

<script>
	export default {};
</script>

<style>
	.img-header {
		max-width: 200px;
	}

	@media screen and (max-width: 769px) {
		.img-header {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>