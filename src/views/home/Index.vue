<template>
  <div>
    <header class="foci-header">
        <span class="btn btn-left">测试</span>
        <h1 class="title">foci</h1>
        <span class="btn btn-right">筛选</span>
  </header>
  <foci-content class="content">
      <div v-for="(item,index) in 5" :key="index" class="item"></div>
  </foci-content>
  </div>
</template>

<script>



export default {
//   name: 'home',
  components: {
   
  }
}
</script>

<style scoped>
.foci-header{
    width:100%;
    height:0.44rem;
    position: absolute;
    top:0;
    left:0;
    border-bottom:1px #ccc solid
}
.btn{
    position: absolute;
    top:0;
    line-height: 0.34rem;
    font-size:0.13rem;
    padding:0.05rem 0.1rem
}
.btn-left{
    left:0.15rem
}
.btn-right{
    right:0.15rem;
}
.title{
    width:100%;
    line-height: 0.44rem;
    text-align: center;
    position: absolute;
    top:0;
    left:0;
    font-size: 0.18rem;
    color:#FA9696;
}

.content{
  background:#000;
}

.content .item{
  width:100px;
  height:100px;
  
}

.content:nth-child(1) .item{
  background:red
}


</style>
