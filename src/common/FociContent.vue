<template>
    <div class="content" ref="content">
        <div>
            <slot></slot>
        </div>
    </div>  
</template>

<script>
export default {
    mounted(){
        let scroll = new IScroll(this.$refs.content,{

        })
    }

}
</script>

<style scoped>

.content{
    width: 100%;
    position: absolute;
    top: 0.45rem;
    left: 0;
    bottom: 0.5rem;
    overflow: hidden;
    background: #fff;
    font-size:0.12rem
}
</style>
