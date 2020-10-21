<template>
	<section class="py-3 px-3 header-bg">
		<div class="container">
			<b-image
				class="img-header"
				:src="require('@/assets/img-new/logo_min.webp')"
				:webp-fallback="require('@/assets/img-new/logo_min.png')"
			></b-image>
		</div>
	</section>
</template>

<script>
	export default {};
</script>

<style scoped>
	.header-bg {
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