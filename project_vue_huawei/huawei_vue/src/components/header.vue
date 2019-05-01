<template>
  <header id="hw-header">
    <!-- 左侧面包屑导航 -->
    <ul id="crumb_left">
      <li>
        <span><a href="javascript:;">首页</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">华为官网</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">荣耀官网</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">花粉俱乐部</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">V码(优惠码)</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">企业购</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">Select Region</a></span>
        <span>|</span>
      </li>
      <li class="nav_down_outer_li" @mouseenter="my_arrow_func_enter(0)" @mouseleave="my_arrow_func_leave(0)">
      <!-- <li> -->
        <!-- 更多精彩<i class="el-icon-arrow-down el-icon--right"></i> -->
        <span>
          <a href="javascript:;">更多精彩</a>
          <i  class="el-icon--right" :class="isUp[0]?'el-icon-arrow-up':'el-icon-arrow-down'"></i>
        </span>
        <!-- 下拉部分 -->
        <ul class="nav_down_ul nav_down_ul0">
          <li><a href="javascript:;">EMUI</a></li>
          <li><a href="javascript:;">应用市场</a></li>
          <li><a href="javascript:;">华为终端云空间</a></li>
          <li><a href="javascript:;">开发者联盟</a></li>
        </ul>

      </li>
    </ul>

    <!-- 右侧面包屑导航 -->
    <ul id="crumb_right">
      <li class="nav_down_outer_li">
        <span><a href="javascript:;">购物车(0)</a></span>
        <ul class="nav_down_ul nav_down_ul1">
          <!-- <li></li> -->
          <li class="empty_cart"><!-- 思路：若加载商品到购物车中，则让第一个li隐藏 -->
            <div>
              <img src="http://127.0.0.1:3001/img/header/header_cart.png" alt="">
              <p>您的购物车是空的，赶紧选购吧~</p>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav_down_outer_li" @mouseenter="my_arrow_func_enter(1)" @mouseleave="my_arrow_func_leave(1)">
        <!-- <span @mouseenter="span_switch_bg_white" :style="bgWhiteSwitch?bg_style_white:''"> -->
        <span>
          <a href="javascript:;">手机版</a>
          <i :class="isUp[1]?'el-icon-arrow-up':'el-icon-arrow-down'" class="el-icon--right"></i>
        </span>
        <span>|</span>
        <!-- <ul @mouseleave="ul_switch_bg_white" class="nav_down_ul"> -->
        <ul class="nav_down_ul nav_down_ul2">
          <li>
            <div><img class="ul_md_img" src="http://127.0.0.1:3001/img/header/ul_phone1.png" alt=""></div>
            <div>
              <p>华为商城APP</p>
              <p>新人专享好礼</p>
              <p>最高5000积分</p>
              <div>
                <img class="ul_sm_img" src="http://127.0.0.1:3001/img/header/icon_andriod.png" alt="">
                <img class="ul_sm_img" src="http://127.0.0.1:3001/img/header/icon_wechat.png" alt="">
              </div>
            </div>
          </li>
          <hr>

          <li>
            <div><img class="ul_md_img" src="http://127.0.0.1:3001/img/header/ul_phone2.jpg" alt=""></div>
            <div>
              <p>华为商城公众号</p>
              <p>微信扫一扫</p>
              <div>
                <img class="ul_sm_img" src="http://127.0.0.1:3001/img/header/icon_wechat.png" alt="">
              </div>
            </div>
          </li>
          <hr>

          <li>
            <div><img class="ul_md_img" src="http://127.0.0.1:3001/img/header/ul_phone3.jpg" alt=""></div>
            <div>
              <p>微信小程序</p>
              <div>
                <img class="ul_sm_img" src="http://127.0.0.1:3001/img/header/icon_wechat.png" alt="">
              </div>
            </div>
          </li>
        </ul>

      </li>
      <li class="nav_down_outer_li" @mouseenter="my_arrow_func_enter(2)" @mouseleave="my_arrow_func_leave(2)">
        <span>
          <a href="javascript:;">网站导航</a>
          <i :class="isUp[2]?'el-icon-arrow-up':'el-icon-arrow-down'" class="el-icon--right"></i>
        </span>
        <span>|</span>
        <ul class="nav_down_ul nav_down_ul3">
          <!-- 第一个大li -->
          <li> 
            <a href="javascript:;"><img src="http://127.0.0.1:3001/img/header/dropdown_navs_icon.png" alt=""></a>
            <p><a href="javascript:;">商城首页</a></p>
          </li>
          <!-- 第二个大li -->
          <li>
            <div>频道</div>
            <div>
              <ul><!-- <a href="javascript:;"></a> -->
                <li><a href="javascript:;">华为专区</a></li>
                <li><a href="javascript:;">企业购</a></li>
              </ul>
              <ul>
                <li><a href="javascript:;">荣耀专区</a></li>
              </ul>
            </div>
          </li>
          <!-- 第三个大li -->
          <li>
            <div>产品</div>
            <div>
              <ul>
                <li><a href="javascript:;">手机</a></li>
                <li><a href="javascript:;">平板&笔记本</a></li>
                <li><a href="javascript:;">智能穿戴</a></li>
              </ul>
              <ul>
                <li><a href="javascript:;">智能家居</a></li>
                <li><a href="javascript:;">通用配件</a></li>
                <li><a href="javascript:;">专属配件</a></li>
              </ul>
            </div>
          </li>
          <!-- 第四个大li -->
          <li>
            <div>增值服务</div>
            <div>
              <ul>
                <li><a href="javascript:;">以旧换新</a></li>
                <li><a href="javascript:;">补购保障</a></li>
              </ul>
              <ul>
                <li><a href="javascript:;">礼品包装</a></li>
                <li><a href="javascript:;">一口价换电</a>池</li>
              </ul>
            </div>
          </li>
          <!-- 第五个大li -->
          <li>
            <div>会员</div>
            <div>
              <ul>
                <li><a href="javascript:;">会员频道</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav_down_outer_li" @mouseenter="my_arrow_func_enter(3)" @mouseleave="my_arrow_func_leave(3)">
        <span>
          <a href="javascript:;">客户服务</a>
          <i :class="isUp[3]?'el-icon-arrow-up':'el-icon-arrow-down'" class="el-icon--right"></i>
        </span>
        <span>|</span>
        <ul class="nav_down_ul nav_down_ul4">
          <li><a href="javascript:;">服务中心</a></li>
          <li><a href="javascript:;">联系客服</a></li>
        </ul>

      </li>
      <li>
        <span><a href="javascript:;">我的订单</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">注册</a></span>
        <span>|</span>
      </li>
      <li>
        <span><a href="javascript:;">请登录</a></span>
      </li>
    </ul>

  </header>
</template>


<script>
  export default{
    data(){
      return{
        // isUp:false,
        // isUp1:false,
        // isUp2:false,
        // isUp3:false,
        isUp:[false,false,false,false],
        // i:0
        // bgWhiteSwitch:false,//控制背景是否是白色 开关
        // bg_style_white:{backgroundColor:"#fff"},
        
      }
    },
    methods:{
      my_arrow_func_enter(i){
        // this.i=i;
        // this.isUp[i]=true;
        // this.isUp[i]=true;
        this.$set(this.isUp,i,true); //文档规定，通过索引修改数组的值，不会触发视图更新，需要用set函数或splice函数
        console.log(i,this.isUp[i]);
        console.log(this.isUp);
        // this.i=0;
      },
      my_arrow_func_leave(i){
        // this.i=i;
        // this.isUp[i]=false;
        this.$set(this.isUp,i,false);
        console.log(i,this.isUp[i]);
        console.log(this.isUp);
        // this.i=0;
      },
      // span_switch_bg_white(){ //当鼠标进入span标签时，背景变白
      //   this.bgWhiteSwitch=true;
      // },
      // ul_switch_bg_white(){ //当鼠标移出下方ul时，背景恢复无色
      //   this.bgWhiteSwitch=false;
      // },
      
    }
  }
</script>


<style scoped>
  /* 面包屑导航 */
  /* 面包屑共同样式 */
  #hw-header{ 
    background-color:#F9F9F9;
    padding:0 1.5rem;
  }
  #hw-header i{
    font-weight:bold;
    font-size:0.8rem;
  }
  /* 面包屑--左侧 */
  #hw-header #crumb_left{
    display:inline;
  }
  #hw-header #crumb_left>li{
    float:left;
    font-size:0.85rem;
    /* color:#A4A4A4; */
    padding:0;
  }
  #hw-header #crumb_left>li>span>a{
    color:#A4A4A4;
  }
  #hw-header #crumb_left>li:hover>span{
    cursor:default;
  }
  #hw-header #crumb_left>li>span>a:hover{
    color:#CF0A2C;
  }

  #hw-header #crumb_left>li.nav_down_outer_li:hover>span:first-child,
  #hw-header #crumb_left>li.nav_down_outer_li:hover>ul{
    background-color:#fff;
  }
  #hw-header #crumb_left>li>span:nth-child(2){
    padding:0;
  }
  #hw-header #crumb_left>li:hover{
    /* color:#CF0A2C; */
    cursor:pointer;
  }
  #hw-header #crumb_left>li>span{
    display:inline-block;
    padding:0.8rem 0.5rem;
  }
  /* 下拉列表ul的显示与隐藏 */
  #hw-header #crumb_left>li:nth-child(8){
    position:relative;
  }
  #hw-header #crumb_left>li:nth-child(8)>ul{
    display:none;
    position:absolute;
    top:36px;
    left:-44px;
  }
  /* #hw-header #crumb_left>li:nth-child(8)>ul:hover{
    cursor:auto;
  } */
  #hw-header #crumb_left>li:nth-child(8):hover>ul{
    display:block;
  }

  #hw-header #crumb_left>li:last-child:hover>ul{
    display:block;
  }
  /* 调整鼠标样式 */
  #hw-header #crumb_left ul:hover{
    cursor:default;
  }
  #hw-header #crumb_left li:hover ul>li>a{
    color:#777777;
  }
  #hw-header #crumb_left li:hover ul>li>a:hover{
    color:#CF0A2C;
  }

  #hw-header #crumb_left ul.nav_down_ul0{
    width:119px;
    text-align:center;
    border-radius:12px 0 12px 12px;

    
  }
  #hw-header #crumb_left ul.nav_down_ul0>li{
    padding:10px 15px;
    color:#777777;
  }


  /* 面包屑--右侧 */
  #hw-header #crumb_right{
    display:inline;
  }
  #hw-header #crumb_right>li{
    float:right;
    font-size:0.85rem;
    color:#A4A4A4;
    padding:0;
  }

  #hw-header #crumb_right>li:first-child{
    position:relative;
  }
  #hw-header #crumb_right>li:first-child:hover{
    background-color:#fff;
  }
  #hw-header #crumb_right>li:first-child:hover>ul>li:first-child{
    background-color:#fff;
    display:flex;
  }
  #hw-header #crumb_right>li:first-child>ul>li:first-child{
    display:none;
    position:absolute;
    top:36px;
    left:-398px;

    width:460px;
    /*background-color:#fff; 一会删 */
    /*display:flex; 让li里面的div在y轴方向弹起来，这样在交叉轴x轴方向让项目居中 */
    flex-direction:column;
    align-items:center;

    border-radius:12px 0 12px 12px;
  }
  #hw-header #crumb_right>li:first-child>ul>li:first-child>div{
    padding:50px 0;
    display:flex;/* 让li内的div内的img和p标签在y轴方向弹起来，并且在y轴与x轴上都居中对齐 */
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  #hw-header #crumb_right>li:first-child>ul>li:first-child>div>img{
    width:95px;/* 170/2 */
    height:95px;
  }
  #hw-header #crumb_right>li:first-child>ul>li:first-child>div>p{
    padding-top:5px;
    font-size:14px;
  }



  #hw-header #crumb_right>li:nth-child(3){
    position:relative;
    /* width: */
  }
  #hw-header #crumb_right>li:nth-child(3)>ul{
    /* width:200vw;  */
    width:890px; 
    height:142px;
    border-radius:12px 0 12px 12px;
    /* 这个套了5个li的ul放在了父级li:nth-child(3)下，所以ul的宽度是li:nth-child(3)的宽度，若要让子级ul设置自己的宽度，就要在自己ul上设置单位为vw的宽度；vw：让子级超过父级的宽度，让子级的宽度自适应布局单位，为视窗窗口view width
    vw:让子级的宽度标准，从父级变为视窗窗口 */
    position:absolute;
    top:36px;
    left:-815px;
    display:flex;

    display:none;
  }
  #hw-header #crumb_right>li:nth-child(3):hover>ul{
    display:flex;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul::after{
    display:block;
    content:"";
    clear:both;
  }
  #hw-header #crumb_right>li:nth-child(3)>.nav_down_ul>li{ /* 把5个大li浮动 */
    /* float:left; */
    display:flex;
    flex-direction:column;

    /* padding:20px; */
    width:178px;
    padding:20px 10px 0 10px;

  }
  #hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul>li ul{
    padding:5px 0 0 10px;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul>li ul>li{
    padding-bottom:5px;
  }
  /* #hw-header #crumb_right>li:nth-child(3)>.nav_down_ul>li>div{
    padding:0;
  } */
  #hw-header #crumb_right>li:nth-child(3)>ul>li:first-child{
    padding:20px 0 0 50px;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul>li:first-child>p{
    padding:5px 0 0 15px;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul>li:first-child>a>img{
    width:80px;
    height:72px;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul>li>div:nth-child(1){
    font-size:16px;
    font-weight:700;
    color:#333;
  }
  #hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul>li>div:nth-child(2){ /* 把最里面的ul横起来 */
    display:flex;
  }






  /*#hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul li{
     border:1px solid red; 
  }*/
  /*#hw-header #crumb_right>li:nth-child(3)>ul.nav_down_ul div{
     border:1px solid blue; 
  }*/
  /* 调整鼠标样式 */
  #hw-header #crumb_right>li:hover>ul{
    cursor:auto;
  }
  #hw-header #crumb_right>li:hover>ul a{
    color:#A4A4A4;
  }
  
  #hw-header #crumb_right>li:hover>ul a:hover{
    cursor:pointer;
    color:#CF0A2C;
  }


  #hw-header #crumb_right>li>span>a{
    color:#A4A4A4;
  }
  #hw-header #crumb_right>li:hover>span{
    cursor:default;
  }
  #hw-header #crumb_right>li>span>a:hover{
    color:#CF0A2C;
  }

  #hw-header #crumb_right>li>span{
    display:inline-block;
    padding:0.8rem 0.5rem;
  }
  #hw-header #crumb_right>li>span:nth-child(2){
    padding:0;
  }
  #hw-header #crumb_right>li:hover{
    /* color:#CF0A2C; */
    cursor:pointer;
  }
  /* #hw-header #crumb_right>li.nav_down_outer_li:hover>span:first-child{ */
  #hw-header #crumb_right>li.nav_down_outer_li:hover>span:first-child,
  #hw-header #crumb_right>li.nav_down_outer_li:hover>ul{
    background-color:#fff;
  }
  #hw-header #crumb_right>li:last-child{
    padding-right:0.5rem;
  }
  
  /* 调整图片 */
  #hw-header #crumb_right ul .ul_md_img{
    width:90px;
    height:90px;
  }
  #hw-header #crumb_right ul .ul_sm_img{
    width:35px;
    height:35px;
  }

  #hw-header #crumb_right ul.nav_down_ul2{
    /* text-align:center; */
    width:244px;
    padding:20px;
    /* background-color:#fff; */
    border-radius:12px 0 12px 12px;
  }
  #hw-header #crumb_right ul.nav_down_ul4{
    width:74px;
    text-align:center;
    border-radius:0 0 12px 12px;
  }
  #hw-header #crumb_right ul.nav_down_ul4>li{
    /* width:81px; */
    /* height:40px; */
    padding:10px 10px;
    color:#777777;
    /* text-align:center; */
    /* margin:0px auto; */
  }


  #hw-header #crumb_right ul.nav_down_ul>li{ /*弹性加在容器上，而不是项目上*/
    display:flex;
    /* width:244px; */
  }
  #hw-header #crumb_right ul.nav_down_ul>li>div:nth-child(2){
    padding-left:10px;
  }

  #hw-header #crumb_right ul.nav_down_ul>li>div>p{
    margin:0 5px 0;
  }
  #hw-header #crumb_right ul.nav_down_ul>li>div>p:first-child{
    font-size:14px;
    font-weight:bold;
    margin-bottom:2px;
    color:#3a3a3a;
  }
  /* 下拉列表ul的显示与隐藏 */
  #hw-header #crumb_right>li{
    position:relative;
  }
  #hw-header #crumb_right>li:nth-child(4)>ul{
    display:none;
    position:absolute;
    /* width:77.8px; */
  }
  #hw-header #crumb_right>li:nth-child(4):hover>ul{
    display:block;
  }
  #hw-header #crumb_right>li:nth-child(2)>ul{
    display:none;
    position:absolute;
    top:36px;
    left:-181px;
  }
  #hw-header #crumb_right>li:nth-child(2):hover>ul{
    display:block;
  }
  #hw-header::after{
    display:block;
    content:"";
    clear:both;
  }


</style>
