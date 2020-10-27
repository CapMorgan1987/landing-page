<template>
	<section class="py-3 px-3 bg-color">
		<div class="container">
			<b-image
				class="img-header"
				:src="require('@/assets/img-new/logo.webp')"
				:webp-fallback="require('@/assets/img-new/logo.png')"
			></b-image>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.bg-color {
		background-color: #eef2f5;
	}

	.img-header {
		width: 200px;
	}

	@media screen and (max-width: 769px) {
		.img-header {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>