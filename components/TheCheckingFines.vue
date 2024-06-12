<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import rightIcon from '@/assets/images/right.svg';
import youTubeIcon from '@/assets/images/youtube.svg';
import interfaceImage from '@/assets/images/interface.svg';

const headerText = ref('Проверьте штрафы и зарегестрируйтесь в 1 клик');
const fields = ref([
	{id: 1, label: 'Номер автомобиля', count: 6, value: ''},
	{id: 2, label: 'Регион', count: 6, value: ''},
	{id: 3, label: 'Свидетельство о регистрации ТС', count: 6, size: true, value: ''}
]);
const errors = ref([false, false, false]);
const btnText = ref('Проверить штрафы');
const aboutService = ref('О сервисе');
const timeVideo = ref('(1 мин. 20 сек)');
const privacyPolicy = ref('Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту');

const router = useRouter();

const openModal = () => {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.style.display = 'block';
  }
};

const handleSubmit = () => {
	let count = 0;
	for(let i = 0; i < fields.value.length; i++){
		if(fields.value[i].value === ''){
			count++
		}
	}
	if(count !== 0){
		alert('Поля не могут быть пустыми');
	} else {
		router.push({
        path: '/success',
    });
	}
}
</script>

<template>
	<TheModal/>
	<section class="check">
			<div class="check__left">
				<h1 class="check__header">{{ headerText }}</h1>
				<form @submit.prevent="handleSubmit">
					<div class="three-inputs-grid">
						<TheField v-for="field of fields" :key="field.id" :label="field.label" :count="field.count" :size="field.size" v-model="field.value"  />
					</div>
					<div class="button">
						<button class="button__submit">
						   <span class="button__submit-text">{{ btnText }}</span>
						   <img :src="rightIcon" alt="Right" class="button__submit-icon">
					    </button>
					    <a href="#" class="button__link" @click="openModal">
						   <img :src="youTubeIcon" alt="YouTube" class="button__link-icon">
						   <span class="button__link-text">{{ aboutService }}</span>
						   <span class="button__link-time">{{ timeVideo }}</span>
					    </a>
					</div>
					<span class="privacy-policy">{{ privacyPolicy }}</span>
				</form>
				
			</div>
			<div class="check__right">
				<img :src="interfaceImage" alt="Image">
			</div>
		</section>
</template>

<style lang="scss" scoped>
.check{
	width: 1156px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

	@media (max-width: 1200px) {
		flex-direction: column-reverse;
		justify-content: center;
		align-items: center;
		width: 570px;
    }

	@media (max-width: 600px) {
		width: 100%;
		
		&__right img{
			width: 400px;
		}
    }

	@media (max-width: 375px) {
		width: 320px;
		display: block;

		&__right{
			display: none;
		}
    }

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 41px;
		line-height: 49.2px;
		margin-bottom: 25px;

		@media (max-width: 1200px) {
		font-size: 30px;
		line-height: 30px;
		text-align: center;
        }

		@media (max-width: 600px) {
		    font-size: 26px;
		    line-height: 26px;
        }

		@media (max-width: 375px) {
		    font-size: 22px;
        }
	}

	.three-inputs-grid {
		display: grid;
		grid-template-columns: 320px 213px;
		grid-template-rows: auto auto;
		gap: 16px;
		row-gap: 16px; /* Отступ между строками */
		column-gap: 30px; /* Отступ между колонками */

		@media (max-width: 600px) {
			display: block;
        }
	}

	.button{
		display: flex;
		margin: 15px 0;

		@media (max-width: 375px) {
			display: block;
        }

		&__submit{
			display: flex;
            align-items: center;
		    justify-content: center;
		    width: 210px;
		    height: 45px;
		    background-color: #0584FE;
		    color: #fff;
		    font-family: "PT Sans", sans-serif;
		    font-weight: 400;
		    font-size: 18px;
		    border: none;
		    border-radius: 8px;
		    cursor: pointer;
			margin-right: 20px;

			@media (max-width: 375px) {
			    width: 100%;
				margin: 0 0 10px 0;
            }
		}

		&__submit:hover{
			background-color: #0075e2;
		}

		&__submit-text{
			font-family: "PT Sans", sans-serif;
		    font-weight: 400;
		    font-size: 18px;
		}

		&__submit-icon{
			position: relative;
			top: 2px;
			left: 5px;

			@media (max-width: 375px) {
			    width: 15px;
            }
		}

		&__link{
			display: flex;
			justify-content: center;
			border: 1px solid #0584FE;
			border-radius: 8px;
			padding: 10px 20px;
			text-decoration: none;
			font-family: "PT Sans", sans-serif;
		    font-weight: 400;
		    font-size: 18px;
		}

		&__link:hover{
			background-color: #0584FE;

			.button__link-icon{
				filter: invert(100%) brightness(1000%);
			}
			.button__link-text{
				color: #fff;
			}
			.button__link-time{
				color: #d8d8d8;
			}
		}

		&__link-icon{
			margin-right: 6px;
		}

		&__link-text {
			color: #000;
			margin-right: 5px;
		}

		&__link-time{
			color: #1253A2;
		}
	}
	.privacy-policy{
		color: #8F8F8F;
		font-family: "PT Sans", sans-serif;
		font-weight: 400;
		font-size: 13px;
		line-height: 15.6px;
	}
}
</style>