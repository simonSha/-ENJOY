<template>
  <div id="app">
    <!-- 路由匹配到的组件将渲染在这里  是vue-router定义的全局组件-->
    <router-view></router-view>
    <footer>
      <ul>
      <router-link to="/home" tag="li"  class="iconfont icon-store" activeClass="active"></router-link>
      <router-link to="/jingxuan" tag="li"  class="iconfont icon-compass" activeClass="active"></router-link>
      <router-link to="/shopcar" tag="li"  class="iconfont icon-cart" activeClass="active"></router-link>
      <router-link to="/gift" tag="li"  class="iconfont icon-gifts" activeClass="active"></router-link>
      <router-link to="/user" tag="li"  class="iconfont icon-gerenzhongxin" activeClass="active"></router-link>
      </ul>
    </footer>
  </div>
  

</template>

<script>
import "./assets/iconfont/iconfont.css";
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}


</script>


<style lang="scss" >
body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,dl,dt,dd,input,form,table{
    padding:0;
    margin:0;
}
html,body{
    width: 100%;
    height: 100%;
    
}
ul,ol,dl,li,dd,dt{
    list-style: none;
}
a{
  text-decoration: none;
}
input{
  outline:none;
}

#app{
  
  footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    line-height: 50px;
    background-color: #fff;

    ul{
      display: flex;
      justify-content: space-around;
      
      li{
        font-size: 25px;
        color:#999;
      }
      .active{
        color:#000;
        font-weight: bold;
      }
    }
  }
}
</style>
