<script lang="ts">
import { defineComponent } from 'vue';
import logoURL from '@/assets/images/logo.svg';

export default defineComponent({
  name: 'theNavigation',
  setup() {
    return {
      logoURL,
	  tariffs: 'Тарифы',
	  contacts: 'Контакты',
	  number: '+7 495 118-44-22',
	  login: 'Вход',
	  registration: 'Регистрация'
    };
  }
});
</script>

<template>
	<header class="navigation">
		<nav class="navigation__content">
			<div class="navigation__left">
				<router-link to="/" class="navigation__logo-link">
					<img :src="logoURL" alt="Logo">
				</router-link>
				<router-link to="/tariffs" class="navigation__link">{{ tariffs }}</router-link>
				<router-link to="/contacts" class="navigation__link">{{ contacts }}</router-link>
			</div>
			<div class="navigation__right">
				<a href="tel:+74951184422" class="navigation__number">{{ number }}</a>
				<router-link to="/login" class="navigation__link">{{ login }}</router-link>
				<router-link to="/registration" class="navigation__btn-link">
					<button class="navigation__button">{{ registration }}</button>
				</router-link>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped> 
.navigation{
	width: 100%;
	height: 60px;
	background: rgb(0,0,0);
	background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(28,39,52,1) 100%);
	display: flex;
	align-items: center;

	@media (max-width: 375px) {
		display: block;
    }

	&__content{
		width: 1156px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;

		@media (max-width: 375px) {
		    width: inherit;
			height: 100%;
			justify-content: center;
			align-items: center;
        }
	}

	&__left, &__right{
		display: flex;
		align-items: center;

		@media (max-width: 375px) {
	       display: block;
        }
	}

	&__logo-link{
		text-decoration: none;
		margin: 17px 30px 13px 0;

		@media (max-width: 375px) {
		    margin: 0;
        }
	}

	&__link{
		margin: 19px 30px 19px 0;
		color: #fff;
		text-decoration: none;
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 18px;

		@media (max-width: 375px) {
	       display: none;
        }
	}

	&__link:last-child {
		margin-right: 0;
	}

	&__number{
		margin: 19px 30px 19px 0;
		color: #fff;
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 18px;
		text-decoration: none;

		@media (max-width: 375px) {
	       display: none;
        }
	}

	&__button{
		margin: 12px 0;
		padding: 9px 18px;
		height: 36px;
		background-color: #0584FE;
		color: #fff;
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 15px;
		border: none;
		border-radius: 8px;
		cursor: pointer;

		@media (max-width: 375px) {
	       display: none;
        }
	}

	&__button:hover{
		background-color: #0075e2;
	}
}
</style>