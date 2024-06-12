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

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 34px;
		line-height: 40.8px;
		text-align: center;
		margin-bottom: 40px;
	}
}
</style>
