<template>
  <q-page>
      <q-img src='src/assets/bg-yct.png'>
        <div class="absolute-full text-subtitle2 flex flex-left items-center q-pl-none fix">
          <div class="q-pl-150">
            <h1>Экскурсии с Йошкиным котом по Красному городу</h1>
            <q-img src='src/assets/заголовок.svg' class="dim"></q-img>
            <p class="text-body1"> История и современность: инклюзивное путешествие по Йошкар-Оле.</p>
          </div>
        </div>
      </q-img>
    <div class="marquee">
    <div class="marquee-content">
      <q-img src="src/assets/image1_btn.png" alt="Image 1" class="marquee-image">
        <div class="text-overlay">Интерактивность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 2" class="marquee-image">
        <div class="text-overlay">Доступность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 3" class="marquee-image">
        <div class="text-overlay">Инклюзивность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 4" class="marquee-image">
        <div class="text-overlay">Образованность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 1" class="marquee-image">
        <div class="text-overlay">Интерактивность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 2" class="marquee-image">
        <div class="text-overlay">Доступность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 3" class="marquee-image">
        <div class="text-overlay">Инклюзивность </div>
      </q-img>
      <q-img src="src/assets/image1_btn.png" alt="Image 4" class="marquee-image">
        <div class="text-overlay">Образованность </div>
      </q-img>
    </div>
  </div>
  </q-page>
</template>

<script setup>
//
</script>
<style scoped lang="scss">
h1 {
  width: 1172px;
  font-size: 70px;
  color: white;
  display: none;
}
.text-body1 {
  font-size: 32px;
  font-weight: 600;
  max-width:59vw ;
  width: 1022px;
  color: #101011;
  font-family: Montserrat Alternates;
  line-height: 42px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  padding-top: 20px;
}
.fix {
  background-color: transparent !important;
}   
.dim {
  width: 50vw;
  height: auto;
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%; /* Ширина области бегущей строки */
  padding-top: 22px;
}

.marquee-content {
  display: inline-block;
  animation: marquee 40s linear infinite;
}

.marquee-image {
  height: 79px;
  width: 527px;
  margin-right: 26px;
}
.text-overlay {
  position: absolute; /* Абсолютное позиционирование для текста */
  top: 50%; /* Центрируем по вертикали */
  left: 50%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%); /* Сдвигаем текст на половину его ширины и высоты */
  color: rgb(33, 31, 31);
  font-family: Montserrat Alternates;
  font-size: 32px;
  font-weight: 600;
  line-height: 65px;
  letter-spacing: -0.92px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
 
  text-align: center; /* Центрируем текст */
  background-color: transparent;
}
@keyframes marquee {
  0% {
    transform: translateX(0); /* Начальная позиция (слева) */
  }
  100% {
    transform: translateX(-50%); /* Конечная позиция  */
  }
}
</style>