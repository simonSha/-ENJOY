<template>
	<div id="fenlei">
		<header>
		  <router-link to="/fenlei" tag="p">分类</router-link>
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

		<div class="slide">
			<div class="rightt">
				<h3>{{h3}}</h3>
				<p>{{texttwo}}</p>
				<div class="xiaoNub">
					<span>7</span>
					<span>/</span>
					<span>8</span>
				</div>
				
			</div>
			
			<swipe class="my-swipe">
			  <swipe-item v-for="(data,index) in swipelist" :key="data.title">
			  	<img :src="data.url" />
			  	<h4>{{data.title}}</h4>
			  </swipe-item>			  
			</swipe>
		</div>		
	</div>
</template>



<script>
import Vue from "vue";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from 'vue-swipe';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

	export default{
		data(){
			return{
				swipelist:[],
				h3:"",
				texttwo:""
			}
		},

		mounted(){
			//生命周期请求数据
			axios.get("/hub/home/v1/web/explore.json?city_id=140").then(res=>{
				console.log(res.data[0].data);
				this.swipelist = res.data[0].data.tabs
				this.h3 = res.data[0].data.group_section.title
				this.texttwo =  res.data[0].data.group_section.desc
			})
			
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
	  color: #fff;
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

	.slide{
		padding-top: 0;
		width : 90%;
		margin: 0 auto;

		.rightt{
			padding-top: 40px;
			padding-bottom: 20px;
			float: left;
			h3{
				float: left;
			}
			p{
				float: left;
			}
			span{
				float: left;
			}
			.xiaoNub{
				float: right;
			}
		}		

		.my-swipe {
		  clear: both;
		  height: 200px;
		  
		  font-size: 30px;
		  text-align: center;

		  img{
		  	width: 100%;
		  	padding-bottom: 20px;
		  }
		  h4{
		  	width:100%;
		  	height: 50px;
		  	background-color: #000;
		  	color: #000;

		  }
		}

		
	}
}	
</style>