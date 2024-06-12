<script lang="ts">
import { defineComponent } from 'vue';
import Icon1 from '@/assets/images/icon1.svg';
import Icon2 from '@/assets/images/icon2.svg';
import Icon3 from '@/assets/images/icon3.svg';
import Icon4 from '@/assets/images/icon4.svg';
import Icon5 from '@/assets/images/icon5.svg';
import Icon6 from '@/assets/images/icon6.svg';

export default defineComponent({
  name: 'theAdvantages',
  setup(){
	return {
		headerText: 'Плюсы использования сервиса «Компас» для анализа штрафов',
		lists: [
			{icon: Icon1, header: 'Неограниченый автопарк', desc: 'Можно добавить неограниченное кол-во машин и водителей'},
			{icon: Icon2, header: 'Сокращение затрат до 50%', desc: 'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'},
			{icon: Icon3, header: 'Безопасность', desc: 'Данные передаются в зашифрованном виде, они доступны только получателю'},
			{icon: Icon4, header: 'Уведомление о погашении', desc: 'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'},
			{icon: Icon5, header: 'Квитанция об оплате', desc: 'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'},
			{icon: Icon6, header: 'Все история сохраняется по каждой машине', desc: 'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'},
		]
	}
  }
});
</script>

<template>
	<section class="advantages">
		<h3 class="advantages__header">{{ headerText }}</h3>

		<div class="advantages__list">
            <div class="advantages__list-item" v-for="(list, idx) of lists" :key="idx">
				<img :src="list.icon" alt="Icon">
				<div class="advantages__content">
					<h4 class="advantages__content-header">{{ list.header }}</h4>
					<p class="advantages__content-description">{{ list.desc }}</p>
				</div>
			</div>
         </div>
	</section>
</template>

<style lang="scss" scoped>
.advantages{
	width: 1156px;
	margin: 98px auto 85px auto;

	&__header{
		font-family: "PT Sans", sans-serif;
		font-weight: 700;
		font-size: 34px;
		line-height: 40.8px;
		text-align: center;
		margin-bottom: 33px;
	}

	&__list{
		display: grid;
        grid-template-columns: repeat(3, 362px);
        grid-template-rows: auto;
        gap: 30px; /* Пространство между элементами */

		&-item{
            height: 151px;
			border: 1px solid #EEEFFF;
			border-radius: 10px;
			padding: 20px; /* Внутренний отступ для grid-item */
            display: flex;
            align-items: center; /* Выравнивание содержимого по вертикали */
		}
	}

	&__content{
		margin-left: 20px;

		&-header{
			font-family: "PT Sans", sans-serif;
		    font-weight: 700;
		    font-size: 18px;
			line-height: 21.6px;
			margin-bottom: 10px;
			color: #1253A2;
		}
		&-description{
			font-family: "PT Sans", sans-serif;
		    font-weight: 400;
		    font-size: 15px;
			line-height: 18px;
		}
	}
}
</style>