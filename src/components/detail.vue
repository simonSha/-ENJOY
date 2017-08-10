<template>
	<div id="detail">
		<header>
	      <router-link to="/home" tag="p">首页</router-link>
	      <div class="center ">   
	        <img src="./logo.png">
	        <span>北京</span>    
	      </div>

	      <div class="right">
	        <i class="iconfont icon-account"></i>
	        <i class="iconfont icon-search"></i>
	      </div>
	    </header><!-- /header -->

	    <div class="detail_weiper">
	    	<mt-swipe :auto="4000">
	    	  <mt-swipe-item v-for="(data,index) in detailList.product_images" :key="data.sub_product_id"><img :src="data.img_url" ></mt-swipe-item>
	    	  
	    	</mt-swipe>    		
	    </div>

	    <div class="main">
	    	
	    	<div class="content_one">
	    		<ul>
	    			<li>
		    			<span>{{detailList.name}}-{{detailList.spec}}</span>
		    			<i class="iconfont icon-favoritesfilling"></i>
	    			</li>
	    			<li>{{detailList.description}}</li>
	    			<li>
		    			<span>{{detailList.price/100}}</span>
		    			<span>/{{detailList.show_entity_name}}</span>
		    			<span>￥{{detailList.origin_price/100}}</span>
		    			<span> | 随时退</span>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_two">
	    		<h3>商户信息</h3>
	    		<h4></h4>
	    		<ul>
    				<li>
    					{{content_twoList.restaurant_name}}
    				</li>
    				<li>
	    				<i class="iconfont icon-map"></i>
	    				{{content_twoList.restaurant_address}}
    				<i class="iconfont icon-more"></i>
    				</li>
    				<li>
	    				<i class="iconfont icon-phone"></i>
	    				{{content_twoList.restaurant_phone_numbers[0]}}
	    				<i class="iconfont icon-more"></i>
    				</li>
    			</ul>	
	    	</div>	
	    	<div class="fill"></div>
	    	<div class="content_three">
	    		<h3>MENU</h3>
	    		<h4></h4>
	    		<ul>
	    			<li v-for="(data,index) in content_threeList" :key="data.sub_title">
	    				<p>-{{data.sub_title}}-</p>
	    				<span>{{data.text[0]}}</span>
	    			</li>
	    			
	    		</ul>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_four" >
	    		<h3>亮点</h3>
	    		<h4></h4>
	    		<ul>
	    			<li v-for="(data,index) in content_fourList" :Key="data.title">
	    				<img :src="data.img_url" >
	    				<p>{{data.title}}</h2>
	    				<p>{{data.content}}</p>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_five">
	    		<h3>使用提示</h3>
	    		<h4></h4>
	    		<ul>
	    			<li v-for="(data,index) in content_fiveList.slice(0,2)">
	    			<span></span>{{data.text}}
	    			</li>
	    		</ul>
	    		<p @click="nameClicl" :class="isUlShow?'hide':''">
		    		更多补充说明
		    		<i class="iconfont icon-moreunfold"></i>
	    		</p>
	    		<ul :class="isUlShow?'':'hide'">
	    			<li v-for="(data,index) in content_fiveList.slice(2)">
	    			<span></span>{{data.text}}
	    			</li>
	    		</ul>
	    		<div class="kefu">
	    			<i class="iconfont icon-phone"></i>
	    			联系客服
	    		</div>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_six">
	    		<h3>猜你喜欢</h3>
	    		<h4></h4>
	    		
	    			<ul v-for="(data,index) in content_sixList" :Key="data.product_id" @click="hendleClick(data.product_id)">
	    			<li><img :src="data.product_image_url"></li>
	    			<li>{{data.product_name}}</li>
	    			<li><span>{{data.price/100}}</span>元/<span>{{data.show_entity_name}}</span></li>
	    		</ul>
	    		
	    		
	    	</div>
	    </div>
	    <footer>
	    	
	    </footer>
	</div>
</template>



<script>
import Vue from "vue";
import router from "../router";
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

	export default{
		data(){
			return{
				isUlShow:false,
				detailList:[],
				content_twoList:[],
				content_threeList:[],
				content_fourList:[],
				content_fiveList:[],
				content_sixList:[],
				change:"1042511",
				url:`/product/info/product_detail.json?product_id=1042511&sub_product_id=${this.$route.params.detailID}`,
				
			}
		},
		mounted(){
			axios.get(`/api/detail`).then(res=>{
				console.log(res.data.modules[4].data.recommend)
				this.detailList = res.data.basic
				this.content_twoList = res.data.modules[0].data.restaurants[0]
				this.content_threeList = res.data.modules[1].data.contents
				this.content_fourList = res.data.modules[2].data.lights
				this.content_fiveList = res.data.modules[3].data.contents
				this.content_sixList = res.data.modules[4].data.recommend
				console.log(this.url)

			})
		},
		methods:{
			nameClicl(){
				this.isUlShow = true;
				console.log(666)
			},
			hendleClick(id){
			 this.url = `/product/info/product_detail.json?product_id=`+ id
				 router.push(`/detail/${id}`)
			    console.log(this.url)
			}
		}
	}
	
</script>



<style scoped lang="scss">
#detail{
	display: flex;
	flex-direction: column;

	footer{
		z-index: 5;
		height: 80px;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #000;
	}

	header{
	  flex: 1;
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
	  }

	  .right{
	    float: right;
	    text-align: right;
	  }
	  i{
	    padding-right: 20px;
	  }
	}

	.detail_weiper{
		flex: 1;
		width: 100%;
		height: 250px;
		background-color: #000;
		img{
			width: 100%;
		}
	}

	.main{
		flex:1;
		width: 100%;
		padding-bottom: 100px;
		.fill{
			width: 100%;
			height: 8px;
			background-color: #fafafa;
			border-bottom: 1px solid #e6e6e6;
			border-top: 1px solid #e6e6e6;
		}

		.content_one{
			width: 90%;
			margin: 0 5%;
			padding-top: 20px;
			

			ul{				
				width: 100%;
				padding-bottom: 20px;
				li{
					
					width: 100%;
				}
				li:nth-of-type(1){
					color: #2c3038;
					padding-bottom: 12px;
					span{
						
						font-size: 25px;
					}
					i{
						position: absolute;
						right: 0;
						margin-right: 10px;
						margin-top: 8px;
						color: #fc3838;
					}
				}
				li:nth-of-type(2){
					clear: both;
					font-size: 20px;
					color: #92969c;
					
				}
				li:nth-of-type(3){
					margin-top: 21px;

					span:nth-of-type(1){
						font-size: 20px;
						color: #fc3838;
					}
					span:nth-of-type(2){
						font-size: 16px;
						color: #fc3838;
					}
					span:nth-of-type(3){
						padding: 0 5px;
						font-size: 16px;
						color: #92969c;
						text-decoration: line-through;
					}
					span:nth-of-type(4){
						font-size: 16px;
						color: #92969c;
					}
				}
			}
		}

		.content_two{
			width: 90%;
			margin: 0 5%;
			
			padding-top: 20px;

			h3{
				font-size: 20px;
				text-align: center;
				padding-bottom: 5px;
			}
			h4{
				width: 30px;
				margin: 0 auto;
				border-bottom: 3px solid #e0e0e0;
			}
			ul{
				margin-top: 30px;
				margin-bottom: 30px;

				li{
					font-size: 15px;
					padding: 15px 0;
					border-bottom: 1px solid #e0e0e0;
					color: #63666b;

					i:nth-of-type(1){
						padding-right: 15px;
						color: #000;
					}
					i:nth-of-type(2){
						float: right;
						color: #000;
					}
				}
				li:nth-of-type(1){
					font-size: 20px;
					color: #2c3038;
				}

			}
		}

		.content_three{
			width: 90%;
			margin: 0 5%;
			
			padding-top: 20px;

			h3{
				font-size: 20px;
				text-align: center;
				padding-bottom: 5px;
			}
			h4{
				width: 30px;
				margin: 0 auto;
				border-bottom: 3px solid #e0e0e0;
			}
			ul{
				width: 100%;
				text-align: center;
				margin-bottom: 30px;
				li{
					padding-top: 20px;
					p{
						font-size: 22px;
						color: #21242a;
						padding-bottom: 5px;
					}
					span{
						font-size: 25px;
						color: #76797e;
					}
				}
			}
		}

		.content_four{
			width: 90%;
			margin: 0 5%;			
			padding: 20px 0;

			h3{
				font-size: 20px;
				text-align: center;
				padding-bottom: 5px;
			}
			h4{
				width: 30px;
				margin: 0 auto;
				border-bottom: 3px solid #e0e0e0;
			}
			ul{
				width: 100%;
				
				li{
					width: 100%;
					padding-top: 20px;
					img{
						width: 100%;
						height: 224px;
					}
					p:nth-of-type(1){
						font-size: 18px;
						color: #21242a;
						margin-top: 20px;
					}
					p:nth-of-type(2){
						font-size: 16px;
						color: #63666b;
						margin-top: 15px;
					}
				}
			}
		}

		.content_five{
			width: 90%;
			margin: 0 5%;
			
			padding-top: 20px;

			h3{
				font-size: 20px;
				text-align: center;
				padding-bottom: 5px;
			}
			h4{
				width: 30px;
				margin: 0 auto;
				padding-bottom: 20px;
				border-top: 3px solid #e0e0e0;
			}
			ul{
				width: 100%;

				li{
					width: 100%;
					font-size: 18px;
					color: #63666b;
					position: relative;
					padding-left: 20px;

					span{
						position: absolute;
						width: 10px;
						height: 10px;
						border-radius: 40%;
						background-color: #63666b;
						top: 6px;
						left: 0;

					}
				}
				
			}
			p{
				text-align: center;
				font-size: 18px;
				color: #63666b;
				padding: 20px 0;
			}
			.kefu{
				width: 132px;
				height: 27px;
				border: 1px solid #63666b;
				margin:  15px auto 20px; 
				text-align: center;
				padding-top: 5px;
			}
		}

		.content_six{
			width: 90%;
			margin: 0 5%;
			padding-bottom: 20px;
			padding-top: 20px;

			h3{
				font-size: 20px;
				text-align: center;
				padding-bottom: 5px;
			}
			h4{
				width: 30px;
				margin: 0 auto;
				border-top: 3px solid #e0e0e0;
				padding-bottom: 20px;
			}
			ul{
				width: 100%;
				height: 100px;
				li{
					width: 100%;
					position: relative;

					img{
						position: absolute;
						top: 0;
						left: 0;
						width: 120px;
						height: 80px;

					}
				}
				li:nth-of-type(2){
					padding-left: 140px;
					font-size: 14px;
					color: #2c3038;
					padding-top: 5px;
				}
				li:nth-of-type(3){
					padding-left: 140px;
					font-size: 14px;
					color: #ff3939;
					padding-top: 15px;
				}
				
			}

		}
	}
	.hide{
      display: none;
    }
}
</style>