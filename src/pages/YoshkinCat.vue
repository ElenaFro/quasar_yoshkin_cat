<template>
  <q-page>
        <div class="absolute-top">
          <q-img class="" src='src/assets/image_cat_first.png'>
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
.absolute-top{
  top: 0px;
}
</style>