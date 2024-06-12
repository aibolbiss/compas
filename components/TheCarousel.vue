<template>
  <div class="carousel">
    <div class="carousel-wrapper" :style="{ transform: `translateX(${-currentSlideIndex * 100}%)` }">
      <div v-for="(block, index) in blocks" :key="index" class="block">
        <div class="block-content">
			<h2 class="block-content__header">{{ block.header }}</h2>
			<p class="block-content__description">{{ block.desc }}</p>
		    <button class="block-content__btn" @click="navigateToDocuments(block)">Перейти</button>
        </div>
      </div>
    </div>

	  <!-- Точки для навигации -->
    <div class="dot-container">
      <div
        v-for="(dot, index) in 2"
        :key="index"
        @click="goToSlide(index)"
        :class="{ dot: true, active: index === currentIndex }"
      ></div>
    </div>

    <div class="switches prev" @click="prevSlide" :disabled="currentSlideIndex === 0"><img src="../assets/images/_left.svg" alt="Icon"></div>
    <div class="switches next" @click="nextSlide" :disabled="currentSlideIndex >= blocks.length / 3 - 1"><img src="../assets/images/_right.svg" alt="Icon"></div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const blocks = ref([
  { id: 1, header: 'Лицензионный договор', desc: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.' },
  { id: 1, header: 'Политика обработки персональных данных', desc: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.' },
  { id: 1, header: 'Информация об оплате', desc: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.' },
  { id: 1, header: 'Заголовок 1', desc: 'Описание 1' },
  { id: 1, header: 'Заголовок 2', desc: 'Описание 2' },
  { id: 1, header: 'Заголовок 3', desc: 'Описание 3' },
]);

const currentSlideIndex = ref(0);
const currentIndex = ref(0);

// Переход к указанному слайду
const goToSlide = (index) => {
  currentIndex.value = index;
};

const slideWidth = computed(() => 100 / 3);

const prevSlide = () => {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--;
  }
};

const nextSlide = () => {
  if (currentSlideIndex.value < blocks.value.length / 3 - 1) {
    currentSlideIndex.value++;
  }
};

const router = useRouter();

const navigateToDocuments = (block) => {
	router.push({
        path: '/documents',
        query: { id: block.id, header: block.header, desc: block.desc }
    });
	console.log(block.header)
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  padding: 20px 10px;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease;
}

.block {
  flex: 0 0 calc(100% / 3);
  max-width: calc(100% / 3);
  /* height: 450px; */
  padding: 0 10px;
  box-sizing: border-box;
}

.block-content {
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 1px solid #EEEFFF;
  padding: 25px;
  height: 450px;
  box-shadow: 0px 0px 20px 0px #0000001F;
  border-radius: 10px;

  &__header{
  font-family: "PT Sans", sans-serif;
  font-weight: 700;
  font-size: 31px;
  line-height: 37.2px;
  color: #1253A2;
  margin-bottom: 15px;
  }

  &__description{
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21.6px;
  }

  &__btn{
  height: 45px;
  border-radius: 8px;
  position: inherit;
  transform: inherit;
  background-color: #0584FE;
  border: none;
  color: #fff;
  width: 100%;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  }

  &__btn:hover{
  background-color: #0075e2;
  }
}

.switches {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
}

.prev {
  left: 0px;
}

.prev:hover{
	filter: invert(100%) brightness(1000%);
}

.next {
  right: -20px;
}

.next:hover{
	filter: invert(100%) brightness(1000%);
}

.dot-container {
  position: absolute;
  bottom: 10px; /* отступ от нижнего края */
  left: 50%; /* размещаем точки по центру */
  transform: translateX(-50%);
  display: flex;
  gap: 10px; /* расстояние между точками */
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc; /* цвет неактивной точки */
  cursor: pointer;
}

.dot.active {
  background-color: #007BFF; /* цвет активной точки */
}
</style>
