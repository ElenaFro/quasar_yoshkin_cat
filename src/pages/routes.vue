<template>
  <q-page>
    <h1>Маршрут исторический</h1>
    <p>Информация о маршруте</p>
    <p>Выберите интересное место на карте</p>
    <canvas ref="mapCanvas" width="1200" height="900"></canvas>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const canvas = ref(null);
const ctx = ref(null);

// Начальные координаты кота
let catX = 50;
let catY = 100;

// Создаем объект изображения для котика
import catImageSrc from 'src/assets/котик.svg'; // Импортируем изображение
const catImage = new Image();
catImage.src = catImageSrc; // Устанавливаем путь к изображению

// Функция для рисования кота
function drawCat() {
  ctx.value.drawImage(catImage, catX - 35, catY - 60, 60, 60);
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
  background-image: url('src/assets/freepik__expand__3287.png'); /* Убедитесь, что путь к изображению правильный */
  background-size: cover;
  background-position: center; 
}
</style>