<template>
  <q-layout view="lhh Lpr lff">
    <q-header class="transparent-header q-pl-150 q-pr-150">
      <q-toolbar class="q-pl-none">
        <q-toolbar-title >
          <q-item class="q-pl-none" to="/" exact clickable v-ripple style="width: 240px;" >
          <img src='src/assets/котик.svg' alt="Logo" style="height: 40px;"/>
          Йошкин кот
          </q-item>
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm" class="absolute-top buttons">
          <q-btn outline rounded color="primary" class="border-2-red" to="/about" exact>
            <div class="dark text-capitalize">О нас</div>
          </q-btn>
          <q-btn outline rounded color="primary" to="/routes" exact class="q-mlr-40 border-2-red">
          <!-- <q-btn outline rounded color="primary" to="/routes" exact  @click="triggerInfo" class="q-mlr-40 border-2-red"> -->
            <div class="dark text-capitalize">Исторический</div>
          </q-btn>
          <q-btn outline rounded color="primary" class="border-2-red" to="/reviews" exact>
            <div class="dark text-capitalize">Современный</div>
          </q-btn>
        </q-tabs>
        
        <q-btn v-else
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      side="right"
    >
      <q-list>
        <q-item>
          <q-btn
            flat
            icon="close"
            @click="leftDrawerOpen = false" 
            aria-label="Close"
            class="q-ml-auto q-pr-none" 
          />
        </q-item>

        <q-item to="/" exact clickable v-ripple >
          <q-item-section avatar>Главная</q-item-section>
        </q-item>
        <q-item to="/about" exact clickable v-ripple >
          <q-item-section avatar>О нас</q-item-section>
        </q-item>
        <q-item to="/routes" exact clickable v-ripple >
          <q-item-section avatar>Исторический</q-item-section>
        </q-item>
        <q-item to="/reviews" exact clickable v-ripple >
          <q-item-section avatar>Современный</q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>
    
    <q-page-container class="no-padding q-pb-200">
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'; 
// бургер
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


import { useRouter } from 'vue-router';

// переход на главную
const router = useRouter();
const goToHome = () => {
  router.push('/');
};

// уведомление
// import { useQuasar } from 'quasar'
// const $q = useQuasar()
// const triggerInfo = () => {
//   $q.notify({
//     type: 'info',
//     message: 'Это уведомление типа "информация".'
//   })
// }

</script>

<style scoped>
.transparent-header {
  padding-top: 50px;
  background-color: transparent !important; /* Делаем фон прозрачным */
  color: #2F2F2F !important;
  z-index: 1000; /* Добавлено для обеспечения правильного наложения */
}
.dark {
  color: #2F2F2F !important;
  font-size: 17px;
  font-weight: 600;
  line-height: 16.8px;
  letter-spacing: -0.07px;
  text-align: center;
}
</style>