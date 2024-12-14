<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <img src='src/assets/котик.svg' alt="Logo" @click="goToHome"   style="height: 40px;"/>
          Йошкин кот
        </q-toolbar-title>

        <q-btn flat label="О нас" @click="goToAbout" />
        <q-btn flat label="Маршрут исторический" @click="goToRoutes" />
        <q-btn flat label="Отзывы" @click="goToReviews" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Меню
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Карта',
    // caption: 'quasar.dev',
    icon: 'school',
    link: ''
  },
  {
    title: 'Маршруты',
    // caption: 'github.com/quasarframework',
    icon: 'code',
    link: ''
  },
  {
    title: 'Достопримечательности',
    // caption: 'chat.quasar.dev',
    icon: 'chat',
    link: ''
  },
  {
    title: 'Тесты',
    // caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: ''
  },
  {
    title: 'О нас',
    // caption: '@quasarframework',
    icon: 'rss_feed',
    link: ''
  },
  {
    title: 'Контакты',
    // caption: '@QuasarFramework',
    icon: 'public',
    link: ''
  },
  {
    title: 'Отзывы',
    // caption: 'Community Quasar projects',
    icon: 'favorite',
    link: ''
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}


import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = () => {
  router.push('/');
};

const goToAbout = () => {
  router.push('/about');
};

const goToRoutes = () => {
  router.push('/routes');
};

const goToReviews = () => {
  router.push('/reviews');
};
</script>
