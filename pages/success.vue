<template>
  <section class="success">
	<h5 class="success__header">Форма отправлена успешно</h5>
	<img src="../assets/images/mail.gif" alt="Image" class="success__image">
  </section>
</template>

<style lang="scss" scoped>
.success{
	width: 1156px;
	margin: 0 auto;

	@media (max-width: 375px) {
		width: 320px;
    }

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 34px;
		line-height: 40.8px;
		text-align: center;
		margin-top: 20px;

		@media (max-width: 375px) {
			text-align: center;
		    font-size: 22px;
		    line-height: 25px;
        }
	}

	&__image{
		width: 500px;
		margin: 0 auto;
		display: flex;

		@media (max-width: 375px) {
			width: 300px;
        }
	}
}
</style>