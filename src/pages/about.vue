vue
<template>
  <q-page>
    <q-img src='src/assets/bg-yct.png'>
      <div class="absolute-full text-subtitle2 text-dark flex flex-left q-mt-xl q-pl-none fix">
        <div class="q-pl-150">

          <h2>О нас</h2>
          <p class="text-body1"> Информация о проекте</p>
          <q-img src='src/assets/котик.png'></q-img>
        </div>
      </div>
    </q-img>
  </q-page>
</template>

<script>
 export default {
  name: 'About'
}
</script>
<style lang="scss">
.fix {
  background-color: transparent !important;
}  
</style>