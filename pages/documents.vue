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
	box-sizing: border-box;

	@media (max-width: 1200px) {
		width: 100%;
		padding: 0 20px;
    }

	@media (max-width: 375px) {
		width: 320px;
    }

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

		@media (max-width: 1200px) {
		    font-size: 30px;
			line-height: 30px;
        }

		@media (max-width: 620px) {
		    font-size: 25px;
			line-height: 25px;
        }

		@media (max-width: 375px) {
			text-align: center;
		    font-size: 22px;
        }
	}

	&__description{
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 18px;

		@media (max-width: 1200px) {
		    font-size: 14px;
			line-height: 14px;
        }
	}
}
</style>