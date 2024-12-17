<template>
  <q-layout view="lhh Lpr lFf">
    <q-header class="transparent-header ">
      <q-toolbar>
        <q-toolbar-title>
          <img src='src/assets/котик.svg' alt="Logo" @click="goToHome" style="height: 40px;"/>
          Йошкин кот
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm" class="absolute-top buttons">
          <q-btn outline rounded color="primary" to="/about" exact>
            <div class="dark">О нас</div>
          </q-btn>
          <q-btn outline rounded color="primary" to="/routes" exact class="q-ml-lg q-mr-lg">
            <div class="dark">Исторический</div>
          </q-btn>
          <q-btn outline rounded color="primary" to="/reviews" exact>
            <div class="dark">Современный</div>
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
    
    <q-page-container class="no-padding">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'; 

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  router.push('/');
};

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
}
</style>