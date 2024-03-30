<template>
  <div id="app test test1 test2 test3">
    <router-view/>
    <foci-nav></foci-nav>
  </div>
</template>

<script>
import FociNav from './common/FociNav.vue'
export default {
    components:{
        FociNav
    }
}
</script>


<style lang="scss"> 


body{
  font-size: 0.12rem
}
</style>
