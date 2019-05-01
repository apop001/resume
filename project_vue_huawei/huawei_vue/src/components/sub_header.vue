<template>
    <div id="hw_sub_header">
        <ul>
            <!-- 第一个大li -->
            <li><!-- <a href="javascript:;"></a> -->
                <a href="javascript:;"><img src="http://127.0.0.1:3001/img/sub_header/sub_title.png" alt=""></a>
            </li>
            <!-- 第二个大li -->
            <li>
                <ul>
                    <li><a href="javascript:;"><img src="http://127.0.0.1:3001/img/sub_header/line21.png" alt=""></a></li>
                    <li><a href="javascript:;"><img src="http://127.0.0.1:3001/img/sub_header/line22.png" alt=""></a></li>
                    <li><a href="javascript:;">华为P30</a></li>
                    <li><a href="javascript:;">荣耀20i</a></li>
                    <li><a href="javascript:;">华为五一购</a></li>
                    <li><a href="javascript:;">荣耀V20</a></li>
                </ul>
            </li>
            <!-- 第三个大li -->
            <li>
                <div>
                    <input @focus="my_search_focus" @blur="my_search_blur" type="text">
                    <a href="javascript:;"><img src="http://127.0.0.1:3001/img/sub_header/search_icon.png" alt=""> </a>
                    <span :class="{my_over_show:is_search_focus}"><a href="javascript:;">HUAWEI&nbsp;P30</a></span>
                    <span :class="{my_over_show:is_search_focus}"><a href="javascript:;">荣耀20i</a></span>
                                     <!-- 类名:变量名 -->
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                is_search_focus:true
            }
        },
        methods:{
            my_search_focus(){
                this.is_search_focus=false;
            },
            my_search_blur(){
                this.is_search_focus=true;
            }
        }
    }
</script>


<style>
    #hw_sub_header>ul{
        display:flex;/* 让三个大li x轴弹起来 */
        /* margin-left:15px; */
        padding:18px 0 12px;
    }
    /*#hw_sub_header>ul>li{
         border:1px solid red; 
    }*/

    #hw_sub_header>ul>li:first-child{ /* 第一个大li */
        width:20vw;
    }
    #hw_sub_header>ul>li:first-child>a>img{
        width:205px;
        height:36px;
    }

    #hw_sub_header>ul>li:nth-child(2){ /* 第二个大li */
        width:45vw;
        padding-top:8px;
    }
    #hw_sub_header>ul>li:nth-child(2)>ul{
        display:flex;/* 让中间的li弹起来 */
        justify-content:space-around;
        /* align-items:center; */
    }
    /*#hw_sub_header>ul>li:nth-child(2)>ul>li{
         border:1px solid red; 
    }*/
    #hw_sub_header>ul>li:nth-child(2)>ul>li:nth-child(3),
    #hw_sub_header>ul>li:nth-child(2)>ul>li:nth-child(4),
    #hw_sub_header>ul>li:nth-child(2)>ul>li:nth-child(5),
    #hw_sub_header>ul>li:nth-child(2)>ul>li:nth-child(6){
        margin-top:2px; /* 微调样式，让后四个小li与图片底边对齐 */
    }
    #hw_sub_header>ul>li:nth-child(2)>ul>li>a{
        font-size:15px;
        color:#333;
    }
    #hw_sub_header>ul>li:nth-child(2)>ul>li>a:hover{
        color:#CF0A2C;
    }
    #hw_sub_header>ul>li:nth-child(2)>ul>li>a:hover>img{
        opacity:0.8;
    }
    #hw_sub_header>ul>li:nth-child(2)>ul>li>a>img{
        width:74px;
        height:24px;
    }

    #hw_sub_header>ul>li:nth-child(3){ /* 第三个大li */
        width:28vw;
        margin-left:55px;
        /* margin-left:100px; */
        padding-top:6px;

        border:0px;
    }
    #hw_sub_header>ul>li:nth-child(3)>div{
        width:320px;
        height:30px;
        background-color:#F0F0F0;
        border-radius:15px;
        position:relative;
        left:36px;

        /* border:1px solid red; */

        /* position:relative; */
        /* z-index:-80;为了防止遮盖主导航栏的下拉列表 */
    }
    #hw_sub_header>ul>li:nth-child(3)>div>input{
        background-color:transparent;
        outline:none; /* 去除input框的默认样式 1/2 */
        border:0px;  /**//* 去除input框的默认样式 2/2 */
        /* border:1px solid red; */
        width:85%;
        height:30px;
        margin-left:4px;
        /* padding-top:8px; */

        /* position:relative; */
        /* z-index:-100; */
    }
    #hw_sub_header>ul>li:nth-child(3)>div>a>img{
        width:26px;
        height:22px;

        /* position:relative; */
        /* z-index:-100; */
    }
    #hw_sub_header>ul>li:nth-child(3)>div>span{
        /* border:1px solid red; */
        position:absolute;
        top:6px;
        /* left:0px; */
        display:none;
    }
    #hw_sub_header>ul>li:nth-child(3)>div>span.my_over_show{
        display:inline-block;
    }
    #hw_sub_header>ul>li:nth-child(3)>div>span>a{
        font-size:12px;
        color:#CF0A2C;
    }
    #hw_sub_header>ul>li:nth-child(3)>div>span:nth-child(3){
        left:148px;
    }
    #hw_sub_header>ul>li:nth-child(3)>div>span:nth-child(4){
        left:236px;
    }
</style>
