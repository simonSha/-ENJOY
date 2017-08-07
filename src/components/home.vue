<template>
  <div id="home">
    <header>
      <router-link to="/fenlei" tag="p">分类</router-link>
      <div class="center ">   
        <img src="./logo.png">
        <span>北京</span>
        <i class="iconfont icon-moreunfold"></i>      
      </div>

      <div class="right">
        <i class="iconfont icon-account"></i>
        <i class="iconfont icon-search" @click="searchShow"></i>
      </div>
      <div :class="isShow?'search':'hide'">
        <span></span>
        <input type="text" placeholder="搜索本地精选/快递到家">
        <input type="button" value="搜索">
      </div>
    </header><!-- /header -->
    <!-- 路由匹配到的组件将渲染在这里  是vue-router定义的全局组件-->
    <div class="main" >
      <ul class="main_ul" v-for="(data,index) in titleList" :key="data.group_section.desc">
        <h3>{{data.group_section.title}}</h3>
        <p>{{data.group_section.desc}}</p>
        
          <li v-for="(data,index) in titleList[index].tabs" :key="data.id">
            <img :src="data.url" >
            <h5>{{data.title}}</h5>
            <span>{{data.desc}}</span>
          </li>
        
      </ul>
    </div>
    
  </div>
  

</template>

<script>
import "../assets/iconfont/iconfont.css";
export default {
  name: 'app',
  data () {
    return {
      titleList:[],
      contentList:[],
      isShow:false
      
    }
  },
  methods:{
    searchShow(){
      this.isShow = !this.isShow
    }
  },
  mounted(){   
    axios.get("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
      console.log(this.contentList)
      this.titleList = res.data
      
    })
  }
}


</script>


<style lang="scss" >


#home{
  header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height:50px;
    background: #000;
    color:#fff;
    line-height: 50px;
    p{
      float:left;
      font-size: 18px;
      
      padding-left: 20px;
    }

    .center{
      float:left;
      font-size: 15px;
      text-align: center;
      padding-left: 50px;

      img{
        height: 30px;
        padding-top: 10px;
      }
      span{
        font-size: 12px;
        padding-left: -3px;
      }
      i{
       font-size: 10px;

      }
    }

    .right{
      float: right;
      text-align: right;
    }
    i{
      padding-right: 20px;
    }

    .search{
      width: 100%;
      height: 55px;
      position: fixed;
      top: 50px;
      left: 0;
      line-height: 55px;
      background-color: #fff;

      span{
        float: right;
        width: 0px;
        height: 0px;        
        border-bottom: 10px solid #fff;
        border-right: 10px solid #000;
        border-left: 10px solid #000;
        position: relative;
        top: -10px;
        right: 20px;
      }
      input:nth-of-type(1){
        float: left;
        margin-left: 5%;
        padding: 10px 15px;
        width: 260px;
        border: none;
        background-color: #f2f3f4;
        margin-top: 9px;
      }
      input:nth-of-type(2){
        float: right;
        margin-right: 5%;
        background-color: #fff;
        border: none;
        font-size: 15px;
        margin-top: 9px;
      }
    }
    .hide{
      display: none;
    }
  }

  .main{
    width: 90%;
    padding: 0 5%;
    .main_ul{
      width: 100%;
      padding-top: 30px;
      h3{
        font-size: 20px;
      }
      
      p{
        font-size: 12px;
        color: #ff3939;
      }
      li{
        border-bottom: 1px solid #ccc;
        padding: 15px 0;

        h5{
          font-size: 16px;
          font-weight: 100;
          color: #666;
        }
        span{
          font-size: 12px;
          color: #aaa;
        }
        img{
          width: 100%;
          padding-bottom: 10px;
          padding-top: 5px;
        }
      }
      
    }
  }
}
</style>
