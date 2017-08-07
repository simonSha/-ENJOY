<template>
	<div id="detail">
		<header>
	      <router-link to="/fenlei" tag="p">分类</router-link>
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
	    	  <mt-swipe-item>1</mt-swipe-item>
	    	  <mt-swipe-item>2</mt-swipe-item>
	    	  <mt-swipe-item>3</mt-swipe-item>
	    	</mt-swipe>    		
	    </div>

	    <div class="main">
	    	
	    	<div class="content_one">
	    		<ul>
	    			<li>
		    			<span>旬鲜本铺双人餐</span>
		    			<i class="iconfont icon-favoritesfilling"></i>
	    			</li>
	    			<li>五年日铺</li>
	    			<li>
		    			<span>319元</span>
		    			<span>/2位</span>
		    			<span>￥410</span>
		    			<span> | 随时退</span>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_two">
	    		<h3>商户信息</h3>
	    		<h4></h4>
	    		<ul>
    				<li>旬鲜本铺</li>
    				<li><i class="iconfont icon-map"></i>朝阳区三元里街<i class="iconfont icon-more"></i></li>
    				<li><i class="iconfont icon-phone"></i>010-84481288<i class="iconfont icon-more"></i></li>
    			</ul>	
	    	</div>	
	    	<div class="fill"></div>
	    	<div class="content_three">
	    		<h3>MENU</h3>
	    		<h4></h4>
	    		<ul>
	    			<li>
	    				<p>-前菜-</p>
	    				<span>前菜2品</span>
	    			</li>
	    			<li>
	    				<p>-醋物-</p>
	    				<span>海葡萄</span>
	    			</li>
	    			<li>
	    				<p>-沙拉-</p>
	    				<span>北海道拉面沙拉</span>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="fill"></div>
	    	<div class="content_four">
	    		<h3>亮点</h3>
	    		<h4></h4>
	    		<ul>
	    			<li>
	    				
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	</div>
</template>



<script>
import Vue from "vue";
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

	export default{
		
	}
	
</script>



<style scoped lang="scss">
#detail{
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
		width: 100%;
		height: 250px;
		background-color: #000;
	}

	.main{
		
		width: 100%;
		height:100%;

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
		}
	}
}
</style>