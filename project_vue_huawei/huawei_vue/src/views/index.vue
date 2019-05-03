<template>
    <div id="hw_index">
        <my-header></my-header>
        <my-subHeader></my-subHeader>
        <!-- 轮播图 -->
        <el-carousel :interval="5000" arrow="always"><!--  <a href="javascript:;"></a>  -->
            <el-carousel-item v-for="(item,i) of carousel_imgs" :key="i">
                <div><a href="javascript:;"><img :src="item.img_url" alt=""></a></div>
            </el-carousel-item>
        </el-carousel>

        <!-- 定位在轮播图上方的大导航 -->
        <ul id="big_nav">
            <!-- 第一个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave"  :class="{big_nav_li1_enter_class:is_big_nav_li_enter}">
                <div>
                    <span><a href="javascript:;">手机</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">荣耀</a></span>
                    <span><a href="javascript:;">HUAWEI P系列</a></span>
                </div>
                <!-- 第一个大li 右边大方块 -->
                <ul id="big_nav_ul1" class="nav_left_box">
                    <!-- line11x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list11x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line12x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list12x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line13x -->
                    <li>
                        <!-- button  -->
                        <div class="big_nav_button">
                            <a href="javascript:;">
                                <div>
                                    <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                    <span>查看全部</span>
                                </div>
                            </a>
                        </div>
                        
                    </li>
                </ul>

            </li>
            <!-- 第二个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave">
                <div>
                    <span><a href="javascript:;">笔记本&nbsp;&&nbsp;平板</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">平板电脑</a></span>
                    <span><a href="javascript:;">笔记本电脑</a></span>
                </div>
                <!-- 第二个大li 右边大方块 -->
                <ul id="big_nav_ul2" class="nav_left_box">
                    <!-- line21x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list21x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                            <!-- button  -->
                            <li>
                                <div class="big_nav_button">
                                    <a href="javascript:;">
                                        <div>
                                            <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                            <span>查看全部</span>
                                        </div>
                                    </a>
                                </div>
                            </li>

                        </ul>
                    </li>
                   
                </ul>

            </li>
            <!-- 第三个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave">
                <div>
                    <span><a href="javascript:;">智能穿戴</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">手环</a></span>
                    <span><a href="javascript:;">手表</a></span>
                    <span><a href="javascript:;">VR</a></span>
                </div>
                <!-- 第一三个大li 右边大方块 -->
                <ul id="big_nav_ul3" class="nav_left_box">
                    <!-- line31x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list31x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                            <!-- button  -->
                            <li>
                                <div class="big_nav_button">
                                    <a href="javascript:;">
                                        <div>
                                            <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                            <span>查看全部</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                </ul>

            </li>
            <!-- 第四个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave">
                <div>
                    <span><a href="javascript:;">智能家居</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">路由器</a></span>
                    <span><a href="javascript:;">电视盒子</a></span>
                    <span><a href="javascript:;">照明</a></span>
                </div>
                <!-- 第四个大li 右边大方块 -->
                <ul id="big_nav_ul4" class="nav_left_box">
                    <!-- line41x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list41x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line42x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list42x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line43x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list43x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line44x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list44x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                            <!-- button  -->
                            <li id="big_nav_li444">
                                <div id="big_nav_button444" class="big_nav_button">
                                    <a href="javascript:;">
                                        <div>
                                            <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                            <span>查看全部</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </li>
            <!-- 第五个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave">
                <div>
                    <span><a href="javascript:;">热销配件</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">保护壳</a></span>
                    <span><a href="javascript:;">移动电源</a></span>
                    <span><a href="javascript:;">耳机</a></span>
                </div>
                <!-- 第五个大li 右边大方块 -->
                <ul id="big_nav_ul5" class="nav_left_box">
                    <!-- line51x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list51x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line52x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list52x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line53x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list53x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- line54x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list54x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                            <!-- button  -->
                            <li id="big_nav_li544">
                                <div id="big_nav_button544" class="big_nav_button">
                                    <a href="javascript:;">
                                        <div>
                                            <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                            <span>查看全部</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </li>
            <!-- 第六个大li -->
            <li @mouseenter="big_nav_li_enter" @mouseleave="big_nav_li_leave"  :class="{big_nav_li6_enter_class:is_big_nav_li_enter}">
                <div>
                    <span><a href="javascript:;">增值服务&其他</a></span>
                </div>
                <div>
                    <span><a href="javascript:;">智能计算</a></span>
                    <span><a href="javascript:;">增值卡</a></span>
                </div>
                <!-- 第六个大li 右边大方块 -->
                <ul id="big_nav_ul6" class="nav_left_box">
                    <!-- line61x -->
                    <li>
                        <ul class="nav_left_box_item_ul">
                            <li v-for="(item,i) of big_nav_list61x" :key="i">
                                <a href="javascript:;">
                                    <img :src="item.img_url" alt="">
                                    <span v-text="item.lname"></span>
                                </a>
                            </li>
                            <!-- button  -->
                            <li>
                                <div class="big_nav_button">
                                    <a href="javascript:;">
                                        <div>
                                            <div><img src="http://127.0.0.1:3001/img/index/big_nav_button_icon.png" alt=""></div>
                                            <span>查看全部</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                   
                </ul>

            </li>
        </ul>





        <my-footer></my-footer>
    </div>
</template>

<script>
    import myHeader from '@/components/header'
    import mySubHeader from '@/components/sub_header'
    import myFooter from '@/components/footer'
    export default{
        data(){
            return{
                carousel_imgs:[
                                {cid:1,img_url:"http://127.0.0.1:3001/img/index/carousel1.jpg"},
                                {cid:2,img_url:"http://127.0.0.1:3001/img/index/carousel2.jpg"},
                                {cid:3,img_url:"http://127.0.0.1:3001/img/index/carousel3.jpg"},
                                {cid:4,img_url:"http://127.0.0.1:3001/img/index/carousel4.jpg"},
                                {cid:5,img_url:"http://127.0.0.1:3001/img/index/carousel5.jpg"},
                                {cid:6,img_url:"http://127.0.0.1:3001/img/index/carousel6.jpg"},
                                {cid:7,img_url:"http://127.0.0.1:3001/img/index/carousel7.jpg"},
                                {cid:8,img_url:"http://127.0.0.1:3001/img/index/carousel8.jpg"}
                              ],
                big_nav_list11x:[
                                 {lid:111,lname:"荣耀",img_url:"http://127.0.0.1:3001/img/index/big_nav_line111.png"},
                                 {lid:112,lname:"HUAWEI P系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line112.png"},
                                 {lid:113,lname:"HUAWEI Mate系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line113.png"},
                                 {lid:114,lname:"荣耀畅玩系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line114.png"}
                               ],
                big_nav_list12x:[
                                 {lid:121,lname:"HUAWEI nova系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line121.png"},
                                 {lid:122,lname:"华为畅享系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line122.png"},
                                 {lid:123,lname:"HUAWEI 麦芒系列",img_url:"http://127.0.0.1:3001/img/index/big_nav_line123.png"},
                                 {lid:124,lname:"移动4G+专区",img_url:"http://127.0.0.1:3001/img/index/big_nav_line124.png"}
                               ],
                big_nav_list21x:[
                                 {lid:211,lname:"平板电脑",img_url:"http://127.0.0.1:3001/img/index/big_nav_line211.png"},
                                 {lid:212,lname:"笔记本电脑",img_url:"http://127.0.0.1:3001/img/index/big_nav_line212.png"},
                                 {lid:213,lname:"笔记本配件",img_url:"http://127.0.0.1:3001/img/index/big_nav_line213.png"}
                               ],
                big_nav_list31x:[
                                 {lid:311,lname:"手环",img_url:"http://127.0.0.1:3001/img/index/big_nav_line311.png"},
                                 {lid:312,lname:"手表",img_url:"http://127.0.0.1:3001/img/index/big_nav_line312.png"},
                                 {lid:313,lname:"VR",img_url:"http://127.0.0.1:3001/img/index/big_nav_line313.png"}
                               ],
                big_nav_list41x:[
                                 {lid:411,lname:"路由器",img_url:"http://127.0.0.1:3001/img/index/big_nav_line411.png"},
                                 {lid:412,lname:"电视盒子",img_url:"http://127.0.0.1:3001/img/index/big_nav_line412.png"},
                                 {lid:413,lname:"照明",img_url:"http://127.0.0.1:3001/img/index/big_nav_line413.png"},
                                 {lid:414,lname:"清洁",img_url:"http://127.0.0.1:3001/img/index/big_nav_line414.png"}
                               ],
                big_nav_list42x:[
                                 {lid:421,lname:"子母/分布式路由",img_url:"http://127.0.0.1:3001/img/index/big_nav_line421.png"},
                                 {lid:422,lname:"电力猫/wifi放大器",img_url:"http://127.0.0.1:3001/img/index/big_nav_line422.png"},
                                 {lid:423,lname:"随行wifi",img_url:"http://127.0.0.1:3001/img/index/big_nav_line423.png"},
                                 {lid:424,lname:"节能",img_url:"http://127.0.0.1:3001/img/index/big_nav_line424.png"}
                               ],
                big_nav_list43x:[
                                 {lid:431,lname:"环境",img_url:"http://127.0.0.1:3001/img/index/big_nav_line431.png"},
                                 {lid:432,lname:"安防",img_url:"http://127.0.0.1:3001/img/index/big_nav_line432.png"},
                                 {lid:433,lname:"健康",img_url:"http://127.0.0.1:3001/img/index/big_nav_line433.png"},
                                 {lid:434,lname:"厨电",img_url:"http://127.0.0.1:3001/img/index/big_nav_line434.png"}
                               ],
                big_nav_list44x:[
                                 {lid:441,lname:"影音",img_url:"http://127.0.0.1:3001/img/index/big_nav_line441.png"},
                                 {lid:442,lname:"卫浴",img_url:"http://127.0.0.1:3001/img/index/big_nav_line442.png"},
                                 {lid:443,lname:"其他",img_url:"http://127.0.0.1:3001/img/index/big_nav_line443.png"}
                               ],
                big_nav_list51x:[
                                 {lid:511,lname:"保护壳",img_url:"http://127.0.0.1:3001/img/index/big_nav_line511.png"},
                                 {lid:512,lname:"移动电源",img_url:"http://127.0.0.1:3001/img/index/big_nav_line512.png"},
                                 {lid:513,lname:"耳机",img_url:"http://127.0.0.1:3001/img/index/big_nav_line513.png"},
                                 {lid:514,lname:"保护套",img_url:"http://127.0.0.1:3001/img/index/big_nav_line514.png"}
                               ],
                big_nav_list52x:[
                                 {lid:521,lname:"贴膜",img_url:"http://127.0.0.1:3001/img/index/big_nav_line521.png"},
                                 {lid:522,lname:"音箱",img_url:"http://127.0.0.1:3001/img/index/big_nav_line522.png"},
                                 {lid:523,lname:"自拍杆/支架",img_url:"http://127.0.0.1:3001/img/index/big_nav_line523.png"},
                                 {lid:524,lname:"充电器/线材",img_url:"http://127.0.0.1:3001/img/index/big_nav_line524.png"}
                               ],
                big_nav_list53x:[
                                 {lid:531,lname:"U盘/存储卡",img_url:"http://127.0.0.1:3001/img/index/big_nav_line531.png"},
                                 {lid:532,lname:"摄像机/镜头",img_url:"http://127.0.0.1:3001/img/index/big_nav_line532.png"},
                                 {lid:533,lname:"智能硬件",img_url:"http://127.0.0.1:3001/img/index/big_nav_line533.png"},
                                 {lid:534,lname:"表带",img_url:"http://127.0.0.1:3001/img/index/big_nav_line534.png"}
                               ],
                big_nav_list54x:[
                                 {lid:541,lname:"生活周边",img_url:"http://127.0.0.1:3001/img/index/big_nav_line541.png"},
                                 {lid:542,lname:"盒子专属配件",img_url:"http://127.0.0.1:3001/img/index/big_nav_line542.png"},
                                 {lid:543,lname:"触控笔/取卡针",img_url:"http://127.0.0.1:3001/img/index/big_nav_line543.png"}
                               ],
                big_nav_list61x:[
                                 {lid:611,lname:"智能计算",img_url:"http://127.0.0.1:3001/img/index/big_nav_line611.png"},
                                 {lid:612,lname:"增值卡",img_url:"http://127.0.0.1:3001/img/index/big_nav_line612.png"}
                               ],
                is_big_nav_li_enter:false /* 开关，根据mouseenter与mouseleave，修改第一个与第六个li的border-radius */
            }
        },
        methods:{
            big_nav_li_enter(){ /* 根据mouseenter与mouseleave，修改第一个与第六个li的border-radius */
                this.is_big_nav_li_enter=true;
            },
            big_nav_li_leave(){
                this.is_big_nav_li_enter=false;
            }
        },
        components:{myHeader,myFooter,mySubHeader}
    }
</script>

<style>
    /* 轮播图 */
    #hw_index>div.el-carousel>div.el-carousel__container{
        height:510px;
    }
    #hw_index>div.el-carousel>div.el-carousel__container>div.el-carousel__item{
        /* height:550px; */
    }
    #hw_index>div.el-carousel>div.el-carousel__container>button.el-carousel__arrow{ /* 左右箭头 圆 */
        width:55px;
        height:55px;
    }
    #hw_index>div.el-carousel>div.el-carousel__container>button.el-carousel__arrow:focus{ /* 取消button点击后的默认蓝色边框的样式 */
        /* border:1px solid red; */
        outline:none;
    }
    #hw_index>div.el-carousel>div.el-carousel__container>button.el-carousel__arrow.el-carousel__arrow--left{ /* 左箭头 圆 */
        position:relative;
        left:-335px;
    }
    #hw_index>div.el-carousel>div.el-carousel__container>button.el-carousel__arrow>i.el-icon-arrow-left::before{ /* 左箭头小图标 */
        /* width:140%; */
        /* height:140%; */
        /* width:40px; */
        /* height:40px; */
        font-size:20px;
        opacity:0.8;
    }
    #hw_index>div.el-carousel>div.el-carousel__container>button.el-carousel__arrow>i.el-icon-arrow-right::before{ /* 右箭头小图标 */
        font-size:20px;
        opacity:0.8;

        /* position:relative;
        left:0px; */
    }
    #hw_index>div.el-carousel>div.el-carousel__container>div.el-carousel__item>div>a>img{
        /* width:100%; */
        /* width:80%; */
        height:510px;
        /* height:98%; */
        position:relative;
        /* top:10%; */
        left:-20%;
    }
    /* #hw_index>el-carousel>div.el-carousel-item{
        height:550px;
    } */
    /* 轮播图的下方指示器 */
    #hw_index>div.el-carousel{
        /* position:relative; */
    }
    #hw_index>div.el-carousel>ul.el-carousel__indicators{
        /* position:relative; */
        /* top:0px;
        left:0px;
        z-index:100; */
    }
    #hw_index>div.el-carousel>ul.el-carousel__indicators>li.el-carousel__indicator{ /* 调整指示器整体的位置到右下方 */
        position:relative;
        top:-42px;
        left:520px;
        /* z-index:100; */
    }
    #hw_index>div.el-carousel>ul.el-carousel__indicators>li.el-carousel__indicator>button.el-carousel__button{
        width:12px;
        height:12px;
        border-radius:50%;
        border:1px solid #fff;
        background-color:transparent;
        opacity:1;
    }
    #hw_index>div.el-carousel>ul.el-carousel__indicators>li.el-carousel__indicator.is-active>button.el-carousel__button{
        background-color:#fff;
    }


    /* 定位在轮播图上方的大导航 */
    #hw_index>ul#big_nav{
        position:absolute;
        top:145px;
        left:40px;
        z-index:10;
        /* background-color:#fff; */
    }
    #hw_index>ul#big_nav>li{
        /* border:1px solid red; */
        width:16vw;  /*待改or加padding */
        padding:12px 20px 0px 20px;
        background-color:#FAFAFB;
        opacity:0.95;
    }
    #hw_index>ul#big_nav>li:first-child{
        border-radius:12px 12px 0 0 ;
    }
    #hw_index>ul#big_nav>li:first-child:hover{
        /* border-radius:12px 0 0 0; */
    }
    #hw_index>ul#big_nav>li:first-child.big_nav_li1_enter_class{ /* 根据mouseenter与mouseleave，修改第一个与第六个li的border-radius */
        border-radius:12px 0 0 0;
    }
    #hw_index>ul#big_nav>li:last-child.big_nav_li6_enter_class{
        border-radius:0 0 0px 12px;
    }
    #hw_index>ul#big_nav>li:last-child{
        border-radius:0 0 12px 12px;
    }
    #hw_index>ul#big_nav>li>div{
        /* border:1px solid red; */
    }
    #hw_index>ul#big_nav>li>div{
        padding:0 4px;
        display:flex;
        /* flex-direction:row; */

        justify-content:space-between;
        /* justify-content:center; */
    }
    #hw_index>ul#big_nav>li>div:first-child{
        padding-bottom:2px;
    }
    #hw_index>ul#big_nav>li>div:nth-child(2){
        padding-bottom:12px;
    }
    #hw_index>ul#big_nav>li:not(:last-child)>div:nth-child(2){ /* 分割线，因为左右留白，所以不加在li上，思路：用padding-bottom挤出距离，再加到div的下边框下上 */
        border-bottom:1px solid #E9EBEF;
    }
    
    #hw_index>ul#big_nav>li>div:first-child>span>a{
        color:#848484;
        font-size:16px;
    }
    #hw_index>ul#big_nav>li>div:nth-child(2)>span>a{
        color:#A6A6A6;
        font-size:14px;
    }
    #hw_index>ul#big_nav>li:hover{
        background-color:#fff;
        opacity:1;
        /* border-bottom:none; */
    }
    #hw_index>ul#big_nav>li:hover>div:nth-child(2){
        border-bottom:1px solid transparent;
    }
    #hw_index>ul#big_nav>li:hover>div>span>a{ /* 当li hover时，li里所有的字体颜色都变深了 */
        color:#333;
    }
    #hw_index>ul#big_nav>li:hover>div>span>a:hover{ /* 当li:hover且a:hover的时候，a的字体变红 */
        color:#D3454B;
    }
    #hw_index>ul#big_nav>li>div>span{
        /* border:1px solid red; */
    }


    /* big_nav右边box */
    #hw_index>ul#big_nav>li:first-child:hover>ul.nav_left_box{
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(2):hover>ul.nav_left_box{
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(3):hover>ul.nav_left_box{
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(4):hover>ul.nav_left_box{
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(5):hover>ul.nav_left_box{
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(6):hover>ul.nav_left_box{
        display:flex;
    }


    #hw_index>ul#big_nav>li:first-child>ul.nav_left_box{
        display:none;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box{
        display:none;
    }
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box{
        display:none;
    }
    #hw_index>ul#big_nav>li:nth-child(4)>ul.nav_left_box{
        display:none;
    }
    #hw_index>ul#big_nav>li:nth-child(5)>ul.nav_left_box{
        display:none;
    }
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box{
        display:none;
    }



    #hw_index>ul#big_nav>li>ul.nav_left_box{
        /* width:25vw; */
        /* border:1px solid red; */
        background-color:#fff;
        border-radius:0 12px 12px 0;

        position:absolute;
        top:0px;
        left:200px;
        z-index:10; /* 让左边和右边box在同一层级 */
    }
    #hw_index>ul#big_nav>li:first-child>ul.nav_left_box{
        /* width:25vw; */
        height:430px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box{ /* 让里面每个列列li弹起来 */
        display:flex;
        padding-left:25px;
        padding-top:10px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul{
        /* border:1px solid purple; */
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul{ /* 让ul里的li在y轴方向弹起来，主轴y轴上均匀分布 */
        /* display:flex;
        flex-direction:column;
        justify-content:center; */
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul>li{
        /* border:1px solid red; */
        border-radius:12px;
        background-color:transparent;
        width:190px;
        padding:8px 5px;
        /* margin:25px 30px; */
        margin:25px 25px 25px 0;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul>li:hover{
        background-color:#F6F6F6;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>a{ /* 让a里面的图片和文字水平弹起来 */
        display:flex;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>a>img{
        width:54px;
        height:54px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>a>span{
        font-size:13px;
        color:#777;
        padding:20px 0 0 3px;
    }
    #hw_index>ul#big_nav #big_nav_ul1,
    #hw_index>ul#big_nav #big_nav_ul2,
    #hw_index>ul#big_nav #big_nav_ul3,
    #hw_index>ul#big_nav #big_nav_ul4,
    #hw_index>ul#big_nav #big_nav_ul5{
        /* border:1px solid red; */
        /* padding-top:8px; */
        height:429px;
    }
    #hw_index>ul#big_nav #big_nav_ul6{
        height:430px;
    }
    




    /* 查看全部 跑道按钮样式 */
    /* 第一个大li的button */
    #hw_index>ul#big_nav>li:first-child>ul.nav_left_box{
        /* padding-bottom:18px; */
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>div.big_nav_button{
        width:136px;
        height:44px;
        border:1px solid #F2F2F2;
        border-radius:22px;
        position:relative;
        top:40px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>div.big_nav_button>a>div{
        display:flex;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>div.big_nav_button>a>div>div{ /* 左边小圆圈 */
        width:44px;
        height:44px;
        border:1px solid #F2F2F2;
        border-radius:22px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>div.big_nav_button>a>div>div>img{
        width:25px;
        height:25px;
        /* padding-top:10px; */
        position:relative;
        top:8px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li:nth-child(3){
        /* padding-right:25px; */
        width:180px;
    }
    #hw_index>ul#big_nav>li>ul.nav_left_box>li>div.big_nav_button>a>div>span{
        font-size:13px;
        color:#A7A7A7;
        line-height:44px;
        padding-left:10px;
    }
    /* 第二、三、六个大li的button */
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box{
        padding-bottom:22px;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li:nth-child(4):hover,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li:nth-child(4):hover,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li:nth-child(3):hover{
        background-color:transparent;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button{
        width:136px;
        height:44px;
        border:1px solid #F2F2F2;
        border-radius:22px;
        position:relative;
        /* top:1px; */
        /* top:40px; */
    }
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button{
        position:relative;
        top:1px;
    }
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box{
        padding-bottom:120px;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div{ /* 让小圆圈与字弹起来 */
        display:flex;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div{ /* 左边小圆圈 */
        width:44px;
        height:44px;
        border:1px solid #F2F2F2;
        border-radius:22px;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div>img,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div>img,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>div>img{
        width:25px;
        height:25px;
        /* padding-top:10px; */
        position:relative;
        top:8px;
    }
    #hw_index>ul#big_nav>li:nth-child(2)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>span,
    #hw_index>ul#big_nav>li:nth-child(3)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>span,
    #hw_index>ul#big_nav>li:nth-child(6)>ul.nav_left_box>li>ul.nav_left_box_item_ul>li>div.big_nav_button>a>div>span{
        font-size:13px;
        color:#A7A7A7;
        line-height:44px;
        padding-left:10px;
    }



    /* 第四、五个大li的button */
    #hw_index>ul#big_nav li#big_nav_li444:hover,
    #hw_index>ul#big_nav li#big_nav_li544:hover{
        background-color:transparent;
    }
    #hw_index>ul#big_nav div#big_nav_button444,
    #hw_index>ul#big_nav div#big_nav_button544{
        /* border:1px solid red; */
        position:relative;
        left:10px;
    }
    #hw_index>ul#big_nav div#big_nav_button444>a>div,
    #hw_index>ul#big_nav div#big_nav_button544>a>div{
        border:1px solid #F2F2F2;
        width:136px;
        height:45px;
        display:flex;/* 图片与文字弹起来 */
        border-radius:22px;

    }
    #hw_index>ul#big_nav div#big_nav_button444>a>div>span,
    #hw_index>ul#big_nav div#big_nav_button544>a>div>span{
        font-size:13px;
        color:#A7A7A7;
        line-height:44px;
        padding-left:10px;
    }
    #hw_index>ul#big_nav div#big_nav_button444>a>div>div,
    #hw_index>ul#big_nav div#big_nav_button544>a>div>div{ /* 小圆圈 */
        width:44px;
        height:44px;
        border-radius:22px;
        border:1px solid #F2F2F2;
        position:relative;
        left:-1px;
    }
    #hw_index>ul#big_nav div#big_nav_button444>a>div>div>img,
    #hw_index>ul#big_nav div#big_nav_button544>a>div>div>img{
        width:25px;
        height:25px;
        position:relative;
        top:8px;
    }
    

    

</style>



