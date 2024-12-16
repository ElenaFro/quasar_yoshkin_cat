<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <img src='src/assets/котик.svg' alt="Logo" @click="goToHome"   style="height: 40px;"/>
          Йошкин кот
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm">
          <q-route-tab
            label="О нас"
            to="/about"
            exact
          />
          <q-route-tab
            label="Маршрут исторический"
            to="/routes"
            exact
          />
          <q-route-tab
            label="Отзывы"
            to="/reviews"
            exact
          />
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
          <q-item-section avatar>Маршрут исторический</q-item-section>
        </q-item>
        <q-item to="/reviews" exact clickable v-ripple >
          <q-item-section avatar>Отзывы</q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>
    
    <q-page-container>
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


