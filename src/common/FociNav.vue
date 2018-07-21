<template>
    <div id="foci-nav">
        <nav class="nav" ref="tagNav">
            <li class="nav-item" v-for="(item,index) in navList" :key="index" @click="btnClick(index,item.path)">
                <img :src="item.imgs[0]" ref="img"/> 
            </li>
        </nav>
   </div>
</template>

<script>
export default {
    data(){
        return {
            navList:[
                {
                    title:'首页',
                    path:'/home',
                    imgs:[
                        '/images/foci.png',
                        '/images/foci_hover.png'
                        ] 
                },
                {
                    title:'广场',
                    path:'/plaza',
                    imgs:[
                        '/images/plaza.png',
                        '/images/plaza_hover.png'
                        ]  
                },
                {
                    title:'添加',
                    path:'/add',
                    imgs:[
                        '/images/add.png',
                        '/images/add.png'
                        ]  
                },
                {
                    title:'聊天',
                    path:'/chat',
                    imgs:[
                        '/images/chat.png',
                        '/images/chat_hover.png'
                        ] 
                },
                 {
                    title:'我的',
                    path:'/mine',
                    imgs:[
                        '/images/mine.png',
                        '/images/mine_hover.png'
                        ] 
                },
            ],
            active:0
        }
    },
    mounted(){
        this.$refs.img[0].src=this.navList[0].imgs[1];
    },
    methods:{
        btnClick(index,path){
            this.$router.push(path)
            for(var i=0;i<this.$refs.img.length;i++){
                this.$refs.img[i].src=this.navList[i].imgs[0];
            }
            this.$refs.img[index].src=this.navList[index].imgs[1]; 
        }
    }
}
</script>

<style>
.nav{
  border-top:1px #ccc solid;
  width:100%;
  height:0.49rem;
  display: flex;
  position:absolute;
  left: 0;
  bottom:0;
}
.nav-item {
  flex:1;
  text-align: center;
  line-height: 0.49rem;
  
  color:#000
}
.nav-item img{
    vertical-align: middle;
    width:0.22rem
}
.nav-item:nth-child(3) img{
    width:0.46rem
}
</style>
