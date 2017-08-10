<template>
	<div id="fenlei">
		<header>

		      <router-link to="/home" tag="p">首页</router-link>
		      <div class="center ">   
		        <img src="./logo.png">
		        <span>北京</span>
		        <i class="iconfont icon-moreunfold"></i>      
		      </div>

		      <div class="right">
		        <i class="iconfont icon-account"></i>
		        <i class="iconfont icon-search"></i>
		      </div>
		</header><!-- /header -->
    <div class="main">
      <div v-for="(data,index) in classList" :key="data.id">
          <p>{{data.name}}</p>
        <ul>
          <li v-for="(data,index) in classList[index].sub_category_list" :key="data.name" @click="handleclick(data.id)">
            {{data.name}}
          </li>
        </ul>
      </div>
      
    </div>
	</div>
</template>



<script>
import router from '../router';//router 路由控制器
	export default{
		data(){
      return{
        classList:[]
      }
    },
    mounted(){
      axios.get("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9NGEwY2RiMTc3NjEyN2ZhZjBiZmZlMjZiYzgyYjUxYzMmMjAxNzA4MDUxNDAw.json").then(res=>{
        //console.log(this.classList)
        this.classList = res.data
      })
    },
    methods:{
      handleclick(id){
        console.log(id);
        // 通过js的方式进行（单页面）页面跳转
         router.push(`/list/${id}`);
      }
    }
	}
	
</script>



<style scoped lang="scss">
#fenlei{
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
  }

  .main{
    width:100%;
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;

    p{
      width: 100%;
      font-size: 15px;
      margin: 9px 20px;
      color: #1b1b20;
    }

    ul{
      width:100%;
      display: flex;
      display-direction: row;
      flex-wrap: wrap;
      border-left: 1px solid #e5e6e8;
      border-top: 1px solid #e5e6e8;
      background-color: #fff;
      
      li{
        height: 36px;
        font-size: 14px;
        text-align: center;
        font-weight: 500;
        color: #2c3038;
        padding-top: 15px; 
        background-color: #fff;
        width:calc(33.33% - 1px);
        border-right: 1px solid #e5e6e8;
        border-bottom: 1px solid #e5e6e8;
      }
    }
  }
}
</style>