<template>
  <q-page>
    <div class="padding-top-sto q-pl-150">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Главная"  to="/"/>
        <q-breadcrumbs-el label="Маршрут исторический" />
      </q-breadcrumbs>
    </div>
    <div class='q-mt-lg q-pl-150 '>
      <h3>Маршрут исторический</h3>
      <p>Информация о маршруте</p>
      <p>Выберите интересное место на карте</p>
    </div>  
    <canvas class='q-ma-lg' ref="mapCanvas" width="1920" height="867"></canvas>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);
const ctx = ref(null);

// Начальные координаты кота
let catX = 390;
let catY = 260;

// Создаем объект изображения для котика
import catImageSrc from 'src/assets/котик.png'; // Импортируем изображение
const catImage = new Image();
catImage.src = catImageSrc; // Устанавливаем путь к изображению

// Функция для рисования кота
function drawCat() {
  ctx.value.drawImage(catImage, catX - 35, catY - 60, 100, 100);
}

// Функция для обновления карты
function updateMap() {
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height); // Очистка канваса
  drawCat(); // Рисуем кота
}

// Обработчик клика на канвасе
function handleClick(event) {
  const rect = canvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Обновляем координаты кота
  catX = x;
  catY = y;

  updateMap(); // Обновляем карту
}

// Инициализация карты
onMounted(() => {
  canvas.value = document.querySelector('canvas');
  ctx.value = canvas.value.getContext('2d');

  // Обработчик клика на канвасе
  canvas.value.addEventListener('click', handleClick);

  // Обновляем карту только после загрузки изображения
  catImage.onload = () => {
    updateMap();
  };
});
</script>

<style scoped>
canvas {
  background-image: url('src/assets/Маршрут1.png'); 
  background-size: cover;
  background-position: center; 
}
.padding-top-sto {
  padding-top: 150px;
}
</style>