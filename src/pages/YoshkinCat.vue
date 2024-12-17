<template>
  <q-page>
        <div class="absolute-top">
          <q-img src='src/assets/bg-cat.png'>
            <div class="absolute-full text-subtitle2 flex flex-left items-center fix">
              <div>
                <h1>Экскурсии с Йошкиным котом по Красному городу</h1>
                <q-img src='src/assets/заголовок.svg' class="dim"></q-img>
                <p class="text-body1"> Текст — зафиксированная на каком-либо материальном носителе человеческая мысль</p>
              </div>
            </div>
          </q-img>
    </div>

  </q-page>
  <!-- <q-btn-group>
      <q-btn outline rounded class="q-mr-md" label="Интерактивность" color="primary" />
      <q-btn outline rounded class="q-mr-md" label="Интерактивность" color="primary" />
      <q-btn outline rounded class="q-mr-md" label="Инклюзивность" color="primary" />
      <q-btn outline rounded class="q-mr-md" label="Образованность" color="primary" />
    </q-btn-group> -->
    <div class="marquee">
    <div class="marquee-content">
      <img src="src/assets/image1_btn.png" alt="Image 1" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 2" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 3" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 4" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 1" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 2" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 3" class="marquee-image" />
      <img src="src/assets/image1_btn.png" alt="Image 4" class="marquee-image" />
    </div>
  </div>
</template>

<script setup>
//
</script>
<style lang="scss">
h1 {
  width: 1172px;
  font-size: 70px;
  color: white;
  display: none;
}
.text-body1 {
  font-size: 40px;
  font-weight: 600;
  max-width:55vw ;
  width: 900px;
  color: #091A39;
}
.fix {
  background-color: transparent !important;
}   
.dim {
  width: 59vw;
  height: auto;
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%; /* Ширина области бегущей строки */
}

.marquee-content {
  display: inline-block;
  animation: marquee 40s linear infinite; /* Анимация */
}
.marquee-inner {
  display: inline-block; /* Обертываем изображения в дополнительный div */
}
.marquee-image {
  height: 100px;
  margin-right: 16px;
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