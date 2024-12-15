<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>
      <img src='src/assets/котик.svg' alt="Logo" @click="goToHome"   style="height: 80px;"/>
      <div class="text-h2" style="opacity:.4">
        Упс. Здесь ничего нет...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Вернуться на главную"
        no-caps
      />
    </div>
  </div>
</template>

<script setup>
//
</script>
