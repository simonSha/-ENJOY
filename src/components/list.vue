<template>
	<div id="list">
		<header>
		      <router-link to="/fenlei" tag="p">分类</router-link>
		      <div class="center ">   
		        <img src="./logo.png">
		        <span>北京</span>    
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
		<div class="paixu">
			<a>全部</a>
			<a @click="xuanShow">智能排序<i class="iconfont icon-moreunfold"></i></a>
		</div>
		<div :class="isPaixuShow?'xuan':'hide'">
			<ul>
				<router-link to="/list" tag="li"  activeClass="xuanPaixu">智能排序</router-link>
				<router-link to="/list" tag="li"  activeClass="xuanPaixu">离我最近</router-link>
				<router-link to="/list" tag="li"  activeClass="xuanPaixu">价格最低</router-link>
				<router-link to="/list" tag="li"  activeClass="xuanPaixu">价格最高</router-link>
				
			</ul>
		</div>
		<div class="main">
			
			<ul  v-infinite-scroll="loadMore" 
			infinite-scroll-disabled="loading"
			infinite-scroll-immediate-check="false" 
			infinite-scroll-distance="0">
				<li v-for="(data,index) in infoList" :key="data.merchant_id" @click="detailClick(data.product_id,data.sub_product_id_list[0])">
					<img :src="data.product_image">
					<span>{{data.short_name}}</span>
					<div class="youNR">
						<span>{{data.price/100}}</span>元/<span>{{data.show_entity_name}}</span>
						<span :class="data.original_price?'':'hide'">{{data.original_price/100}}</span></br>
						<i calss="iconfont icon-map"></i>
						<span>{{data.area}}</span>
					</div>
					
				</li>
			</ul>
			<p class="msg">{{msg}}</p>
		</div>
	</div>
</template>



<script>
import router from '../router';
import Vue from 'vue';
import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);
	export default{
		data(){
			return{
				isShow:false,
				isPaixuShow: false,
				infoList:[],
				loading:false,
				current:0,
				total:0,
				time:0,
				msg:""
			}
		},
		
		
		mounted(){	   
			axios.get(`/api/list`).then(res=>{
				//console.log(res.data);
				this.infoList = res.data
				
			})
			axios.get(`/api/list1`).then(res=>{
				
				this.total = res.data.sub_category_list[0].product_count
				this.time = Math.floor((this.total)/20)
			})
		},
		methods:{
		  searchShow(){
		    this.isShow = !this.isShow
		  },
		  xuanShow(){
		  	this.isPaixuShow = !this.isPaixuShow
		  },
		  detailClick(id,id2){
		  	router.push(`/detail/${id}/${id2}`)
		  	console.log(id)
		  },
		  loadMore(){
		  	console.log(123)
		  	this.current++ ;

		  	if(this.current>this.time){
		  		this.msg = "没有数据了~"
		  		return;
		  	}
		  	console.log(this.current)
		  	axios.get(`/api/list1`).then(res=>{
		  		//console.log(res.data);
		  		this.infoList = [...this.infoList,...res.data]
		  	})
		  }
		},
	}
	
</script>



<style scoped lang="scss">
#list{
	width: 100%;
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
	  
	}

	.paixu{
		width: 100%;
		height: 39px;
		border-bottom: 1px solid #e6e6e6;
		a{
			display: inline-block;
			width: 49%;
			color: #2c3038;
			margin-top: 10px;
			text-align: center;
		}
		a:nth-of-type(1){
			border-right: 1px solid #e6e6e6;
		}
	}

	.xuan{
		width: 100%;
		position: absolute;
		top: 90px;
		left: 0;
		ul{
			width: 100%;

			li{
				padding: 8px 0;
				color: #2c3038;
				text-align: center;
				font-size: 14px;
				border-top: 1px solid #e6e6e6;
				background-color: #fff;
			}
			.xuanPaixu{
				background-color: #fafafa;
				color: #ff3939;
			}

		}
	}

	.main{
		width: 100%;
		padding-bottom: 50px;

		ul{
			width: 100%;
			li{
				width: 90%;
				padding: 15px 5%;
				height: 115px;
				border-bottom: 1px solid #e6e6e6;
				img{
					width: 171px;
					height: 115px;
					float: left;
					margin-right: 10px;
				}
				
				span{
					width: 45%;
					display: inline-block;
					font-size: 15px;
					color: #2c3038;
					height: 60px;
					overflow: hidden;
				}

				.youNR{
					color: #ff3939;
					span{
						display: inline;
						color: #ff3939;
						font-size: 15px;
					}
					span:nth-of-type(3){
						color: #92969c;
						text-decoration: line-through;
						padding-left: 5px;
					}
					span:nth-of-type(4){
						color: #92969c;
						font-size: 12px;
					}
					i{
						width: 12px;
						height: 12px;
						font-size: 12px;
						color: #92969c;
					}
				}
				
			}
		}
	}
}
.hide{
  display: none;
}
.msg{
	text-align: center;
	color: #92969c;
}	

</style>