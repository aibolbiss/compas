<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'theDocuments',
  setup(){
	return {
		headerText: 'Документы',
	}
  }
});
</script>

<template>
	<section class="documents">
		<h3 class="documents__header">{{ headerText }}</h3>
		<TheCarousel />
	</section>
</template>

<style lang="scss" scoped>
.documents{
	width: 1156px;
	margin: 0 auto 100px auto;

	@media (max-width: 1200px) {
		width: 570px;
    }

	@media (max-width: 375px) {
		width: 320px;
    }

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 34px;
		line-height: 40.8px;
		text-align: center;
		margin-bottom: 40px;

		@media (max-width: 1200px) {
			font-size: 30px;
		    line-height: 30px;
			margin-bottom: 30px;
        }

		@media (max-width: 375px) {
		    font-size: 22px;
		    line-height: 25px;
			margin-bottom: 20px;
        }
	}
}
</style>
