<template>
  <section class="documents">
	<h5 class="documents__bread-crumbs">Главная страница &nbsp;•&nbsp; Документы  &nbsp;•&nbsp; <span class="documents__bread-crumbs_grey">{{ $route.query.header }}</span></h5>
    <h2 class="documents__header">{{ $route.query.header }}</h2>
    <p class="documents__description">{{ $route.query.desc }}</p>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.documents{
	width: 1156px;
	margin: 0 auto;

	&__bread-crumbs{
		margin: 20px 0;
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 13px;

		&_grey{
			color: #8F8F8F;
		}
	}

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 41px;
		line-height: 49.2px;
		margin-bottom: 20px;
	}

	&__description{
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 18px;
	}
}
</style>