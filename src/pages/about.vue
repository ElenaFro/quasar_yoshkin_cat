vue
<template>
  <q-page>
        <div class="">
          <q-img src='src/assets/bg-cat.png'>
            <div class="absolute-full text-subtitle2 text-dark flex flex-left q-mt-xl fix">
              <div>
                <h2>О нас</h2>
                <p class="text-body1"> Информация о проекте</p>
              </div>
            </div>
          </q-img>
    </div>
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