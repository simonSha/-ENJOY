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
					<span>1</span>
					<span>/</span>
					<span>{{length}}</span>
				</div>
				
			</div>
			
			<swipe class="my-swipe" :show-indicators="false">
			  <swipe-item v-for="(data,index) in swipelist" :key="data.title">
			  	<img :src="data.url" />
			  	<div class="info">
			  		<span>{{data.tag}}</span>  <i>{{index+1}}</i>/<i>{{length}}</i>
			  		<h4>{{data.title}}</h4>
			  		<p>{{data.desc}}</p>
			  	</div>			  	
			  </swipe-item>			  
			</swipe>
		</div>
		
			<div class="swiper-container">
			    <div class="swiper-wrapper" v-for="(data,index) in swipelist" :key="data.title">
			        <div class="swiper-slide" >
			        	<img :src="data.url" >
			        </div>		        
			        		        
			    </div>
			    <!-- Add Pagination -->
			     <div class="swiper-scrollbar"></div>
			</div>
			
	</div>
</template>


<script>
import Vue from "vue";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

	export default{
		data(){
			return{
				swipelist:[],
				jxlist:[],
				h3:"",
				texttwo:"",
				length:""
			}
		},

		mounted(){
			//生命周期请求数据
			axios.get("/hub/home/v1/web/explore.json?city_id=140").then(res=>{
				console.log(res.data[1].data.tabs);
				this.swipelist = res.data[0].data.tabs
				this.jxlist = res.data[1].data.tabs
				this.length = res.data[0].data.tabs.length
				this.h3 = res.data[0].data.group_section.title
				this.texttwo =  res.data[0].data.group_section.desc
			})
			
		}
	}
	
</script>



<style scoped lang="scss">

#fenlei{
	.swiper-container {
	    width: 90%;
	    margin: 0 5%;
	    height: 300px;

	    .swiper-slide {
	    	width: 160px;
	    	height: 90px;
	        text-align: center;
	        font-size: 18px;
	        background: #000;
	        
	        /* Center slide text vertically */
	       display: -webkit-box;
	       display: -ms-flexbox;
	       display: -webkit-flex;
	       display: flex;
	       -webkit-box-pack: center;
	       -ms-flex-pack: center;
	       -webkit-justify-content: center;
	       justify-content: center;
	       -webkit-box-align: center;
	       -ms-flex-align: center;
	       -webkit-align-items: center;
	       align-items: center;
	       img{
	       	width: 100%;
	       	height: 100%;
	       	background-color: #0f0;
	       }
	    }
	}

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
		  width: 100%;
		  height: 300px;
		  padding-bottom: 20px;
		  border-bottom: 1px solid #ccc;
		  
		  img{
		  	width: 100%;
		  	height: 200px;
		  	padding-bottom: 20px;
		  }
		  .info{
		  	  padding: 0;
		  	  width:100%;
		  	  height: 100px;
		  	  span{
		  	  	font-size: 12px;
		  	  	color: #ff3939;
		  	  	padding-right: 50px;
		  	  }
		  	  i{
		  	  	color: #000;
		  	  }
		  	  h4{		  	  
		  	  
		  	  color: #000;
		  	  padding: 10px 0;
		  	  }
		  	  p{
		  	  	font-size: 12px;
		  	  	color: #9b9b9b;
		  	  }

		  }
		  
		}
		
	}
}	
</style>