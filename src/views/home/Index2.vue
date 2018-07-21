<template>
    <div>
      <header class="foci-header">
        <span class="btn btn-left">测试</span>
        <h1 class="title">foci</h1>
        <span class="btn btn-right">筛选</span>
      </header>
      <div id="home" class="content">
        <div class="circle-01">
          <!-- <div class="circle pink right"></div>
          <div class="circle pink deg55" ref="deg"></div>
          <div class="circle pink deg124" ref="deg"></div> -->
          <div v-for="(item,index) in 6" :key="index" ref = "deg" class="circle right circle1" :class="colorList[index]">
            <span :class="span1List[index]">萨达{{index}}</span>
          </div>
        </div>
        
        <div class="circle-02">
            
            <div v-for="(item,index) in 6" :key="index" ref = "deg" class="circle right  circle2" :class="colorList[index]">
              <span :class="span2List[index]">123</span>
            </div>
        </div>
        <div class="circle-03" >
            
            <div v-for="(item,index) in 6" :key="index" ref = "deg" class="circle  right  circle3" :class="colorList[index]">
              <span :class="span1List[index]">123</span>
            </div>
        </div>
        <div class="circle-04">
           
            <div v-for="(item,index) in 6" :key="index" ref = "deg" class="circle  right  circle4" :class="colorList[index]">
              <span :class="span2List[index]">123</span>
            </div>
        </div>
        <div class="foci">foci</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      colorList:[
        "red","pink","white","gray",'pink','pink'
      ],
      span1List:['span1-1','span1-2','span1-3','span1-4','span1-5','span1-6'],
      span2List:['span2-1','span2-2','span2-3','span2-4','span2-5','span2-6']

    }
  },
  name: "home",
  components: {},
  mounted() {
    
    this.$refs.deg.map((item,index)=>{
      //圆圈的宽度
      var parentWidth = item.parentNode.offsetWidth
      //小球的宽度和高度
      var width = item.offsetWidth
      var height = item.offsetHeight
      //求基点坐标
      var disx = (-parentWidth/2+width/2)+"px";
      var disy = width/2+"px"
      //小球角度
      var deg = index*60 
      //设置基点
      item.style.transformOrigin = disx+" "+disy;
      //旋转角度
      item.style.transform="rotate("+deg+"deg)";
      
      item.style.marginTop = -height/2+"px"
      item.style.marginRight = -width/2+"px"

      item.children[0].style.transform="rotate("+(-deg)+"deg)";
      // item.children[0].style.transformOrigin = disx+" "+disy;

    })
      
  }
};
</script>

<style scoped lang="scss">
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
    width: 100%;
    position: absolute;
    top: 0.45rem;
    left: 0;
    bottom: 0.5rem;
    overflow: hidden;
    
    font-size:0.12rem
}
.circle-01,
.circle-02,
.circle-03,
.circle-04,
.foci {
  position: absolute;
  border-radius: 50%;
  // left: 50%;
  // top:50%;
  // transform: translate(-50%, -50%);
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin: auto
}
.circle-01 {
  width: 2.9rem;
  height: 2.9rem;
  border: 1px solid #383838;
  animation: ObeyWhirl linear 20s infinite ;  
}
.circle-02 {
  width: 2.42rem;
  height: 2.42rem;
  border: 2px solid #3c3c3c;
  animation: BackWhirl linear 20s infinite ;
 
}
.circle-03 {
  width: 1.94rem;
  height: 1.94rem;
  border: 2px solid #707070;
   animation: ObeyWhirl linear 20s infinite ;
  
}
.circle-04 {
  width: 1.36rem;
  height: 1.36rem;
  border: 2px solid #fff;
  animation: BackWhirl linear 20s infinite ;
 
}

.circle {
  width: 0.16rem;
  height: 0.16rem;
  position: absolute;
  border-radius: 50%;
  
}
.circle1{
   animation: Twinkle linear 2s infinite 4s;
}
.circle2{
   animation: Twinkle linear 3s infinite 3s;
}

.circle3{
   animation: Twinkle linear 4s infinite 2s;
}

.circle4{
   animation: Twinkle linear 5s infinite 1s;
}

.pink {
  background: #d898a0;
  
}
.white {
  background: #d8d8d8;
}
.gray {
  background: #b8b4b4;
}
.red{
  background: #FA9696
}


.right{
  right:0;
  top:50%;
  font-size:.08rem;
  color:rgb(229, 226, 226)
  // transform: translate(50%, -50%);
  
  
}
.deg55{
  right:0;
  top:50%;
  transform: translate(50%, -50%);
  transform:rotate(55deg);
}

.deg124{
    right:0;
  top:50%;
  transform: translate(50%, -50%);
  transform:rotate(124deg);
}
.right span{
  display: block;
  position: absolute;
  top:.26rem;
  left:0;
  width:.4rem;
  
  transform-origin:0.07rem -0.18rem
  
}
.span1{
  animation: span1 linear 20s infinite ;
}
.span2{
  animation: span2 linear 22s infinite ;
}
.span3{
  animation: span1 linear 24s infinite ;
}
.span4{
  animation: span2 linear 26s infinite ;
}
.span1-1{
  animation: span1-1 linear 20s infinite ;
}
.span1-2{
  animation: span1-2 linear 20s infinite ;
}
.span1-3{
  animation: span1-3 linear 20s infinite ;
}
.span1-4{
  animation: span1-4 linear 20s infinite ;
}
.span1-5{
  animation: span1-5 linear 20s infinite ;
}

.span1-6{
  animation: span1-6 linear 20s infinite ;
}
.span2-1{
  animation: span2-1 linear 20s infinite ;
}
.span2-2{
  animation: span2-2 linear 20s infinite ;
}
.span2-3{
  animation: span2-3 linear 20s infinite ;
}
.span2-4{
  animation: span2-4 linear 20s infinite ;
}
.span2-5{
  animation: span2-5 linear 20s infinite ;
}

.span2-6{
  animation: span2-6 linear 20s infinite ;
}
.foci{
  color:#FA9696;
  width:1rem;
  height:1rem;
  text-align: center;
  line-height: 1rem;
  font-size: .3rem
}
// .circleSmall01 {
 
@keyframes span1-1{
			0%{
				transform:rotate(0deg)
			}
			
			100%{
				transform:rotate(-360deg)
			}
}
@keyframes span1-2{
			0%{
				transform:rotate(-60deg)
			}
			
			100%{
				transform:rotate(-420deg)
			}
}
@keyframes span1-3{
			0%{
				transform:rotate(-120deg)
			}
			
			100%{
				transform:rotate(-480deg)
			}
}
@keyframes span1-4{
			0%{
				transform:rotate(-180deg)
			}
			
			100%{
				transform:rotate(-540deg)
			}
}
@keyframes span1-5{
			0%{
				transform:rotate(-240deg)
			}
			
			100%{
				transform:rotate(-600deg)
			}
}
@keyframes span1-6{
			0%{
				transform:rotate(-300deg)
			}
			
			100%{
				transform:rotate(-660deg)
			}
}


@keyframes span2-1{
			0%{
				transform:rotate(0deg)
			}
			
			100%{
				transform:rotate(360deg)
			}
}
@keyframes span2-2{
			0%{
				transform:rotate(-60deg)
			}
			
			100%{
				transform:rotate(300deg)
			}
}
@keyframes span2-3{
			0%{
				transform:rotate(-120deg)
			}
			
			100%{
				transform:rotate(240deg)
			}
}
@keyframes span2-4{
			0%{
				transform:rotate(-180deg)
			}
			
			100%{
				transform:rotate(180deg)
			}
}
@keyframes span2-5{
			0%{
				transform:rotate(-240deg)
			}
			
			100%{
				transform:rotate(120deg)
			}
}
@keyframes span2-6{
			0%{
				transform:rotate(-300deg)
			}
			
			100%{
				transform:rotate(60deg)
			}
}
@keyframes span2{
			0%{
				transform:rotate(0deg)
			}
			
			100%{
				transform:rotate(360deg)
			}
}


@keyframes ObeyWhirl{
			0%{
				transform:rotate(0deg)
			}
			
			100%{
				transform:rotate(360deg)
			}
}
@keyframes BackWhirl{
			0%{
				transform:rotate(0deg)
			}
			
			100%{
				transform:rotate(-360deg)
			}
}


@keyframes Twinkle{
			0%{
				opacity:1;
       
			}
			50%{
				opacity:0.2;

			}
			100%{
				opacity:1;
        
			}
}


</style>

