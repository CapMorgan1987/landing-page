<template>
	<section class="black-background py-3 px-3">
		<b-image
			class="img-header"
			:src="require('@/assets/img/logo.webp')"
			:webp-fallback="require('@/assets/img/logo.png')"
		></b-image>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
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