<template>
  <q-layout view="lhh Lpr lff">
    <q-header class="transparent-header q-pl-150 q-pr-150">
      <q-toolbar class="q-pl-none q-pr-none">
        <q-toolbar-title >
          <q-item class="q-pl-none q-pr-none" to="/" exact clickable v-ripple style="width: 240px;" >
          <img src='src/assets/котик.svg' alt="Logo" style="height: 40px;"/>
          Йошкин кот
          </q-item>
        </q-toolbar-title>

        <q-tabs v-if="$q.screen.gt.sm" class="absolute-top buttons">
          <q-btn outline rounded color="primary" size="19px" class="border-2-red" to="/about" exact>
            <div class="dark text-capitalize">О нас</div>
          </q-btn>
          <q-btn outline rounded color="primary" to="/routes" exact size="19px" class="q-mlr-40 border-2-red">
          <!-- <q-btn outline rounded color="primary" to="/routes" exact  @click="triggerInfo" class="q-mlr-40 border-2-red"> -->
            <div class="dark text-capitalize">Исторический</div>
          </q-btn>
          <q-btn outline rounded color="primary" size="19px" class="border-2-red" to="/reviews" exact>
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
    
    <q-page-container class="no-padding q-pb-540">
      <router-view />
    </q-page-container>

    <q-footer class="bg-secondary text-dark q-mb-40 q-pr-150 q-pl-150 q-pt-40" style="height: 461px;">
      <q-toolbar  class="q-pl-none q-pr-none">
        <q-toolbar-title>
          <q-avatar size="100px" class="q-pt-40">
            <q-item class="q-pl-none q-pt-xl" to="/" exact clickable v-ripple >
            <img src='src/assets/котик.svg' alt="Logo"  style="height: 80px;"/>
            </q-item>
          </q-avatar>
          <div>Йошкин кот</div>
            <q-list class="q-pl-none">
              <q-item href="/"  text-color="dark" class="q-mt-md q-mb-md q-pl-none">
                Пользовательское соглашение
              </q-item>
              <q-item href="/"  text-color="dark" class="q-mt-md q-mb-md q-pl-none">
                Политика о персональных данных
              </q-item>
            </q-list>
        </q-toolbar-title>
        <div class="q-mt-md q-pl-none">
        <q-list class="vertical q-pl-none">
          <q-item text-color="dark" class="items-center q-pl-none" >
            <q-btn text-color="dark" class="q-pl-none" flat  icon="mail"/>
            <p class="q-mb-none q-pl-none">Email@mail.ru</p>
          </q-item>
          <q-item text-color="dark" class="items-center q-pl-none">
            <q-btn text-color="dark" class="q-pl-none" flat icon="phone"/>
            <p class="q-mb-none">tel. +7(333)333 33 33</p>
          </q-item>
          <q-item text-color="dark" class="items-center q-pl-none">
            <q-btn text-color="dark" class="q-pl-none" flat icon="room"/>
            <p class="q-mb-none">Республика Марий Эл, г.Йошкар-Ола, с.Семеновка, ул.Советская д.6 Семеновская школа-интернат</p>
          </q-item>
        </q-list>
        <q-list>
          <q-btn flat text-color="dark"  class="q-pl-none">
            <a href="https://vk.com/club176111" text-color="dark" class="text-dark q-mt-md q-mb-md">
              <img src='src/assets/VK.svg' alt="Logovk"  style="height: 20px;"/>
            </a>
          </q-btn>
          <q-btn flat text-color="dark" >
            <a href="https://youtube "  text-color="dark" class="text-dark q-mt-md q-mb-md">
              <img src='src/assets/YouTube.svg' alt="Logoyoutube"  style="height: 20px;"/>
            </a>
          </q-btn>
         </q-list>
      </div>
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