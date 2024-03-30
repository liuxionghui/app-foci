<template>
  <div id="app">
    <!-- <foci-header></foci-header> -->
    <router-view/>
    <foci-nav></foci-nav>
  </div>
</template>

<script>
import FociNav from './common/FociNav.vue'
// import FociHeader from './common/FociHeader.vue'
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
