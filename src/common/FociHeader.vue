<template>
    <header class="foci-header">
        <span class="btn btn-left">左按钮</span>
        <h1 class="title">标题</h1>
        <span class="btn btn-right">右按钮</span>
    </header>
</template>

<script>
export default {

}
</script>

<style specod>

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
    line-height: 0.44rem;
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
    font-size: 0.24rem;
}
</style>
