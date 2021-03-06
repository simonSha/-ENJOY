import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home.vue";
import List from "./components/list.vue";
import Detail from "./components/detail.vue";
import Fenlei from "./components/fenlei.vue";
import JingXuan from "./components/jingxuan.vue";
import ShopCar from "./components/shopcar.vue";
import Gift from "./components/gift.vue";
import User from "./components/user.vue";
import Regist from "./components/regist.vue";
import Login from "./components/login.vue";

Vue.use(VueRouter);//安装路由功能

//配置路由如下
const routes = [
	{path: '/', redirect: '/home' },
	
	{path: '/home', component: Home},
	{path: '/fenlei', component: Fenlei},
	{path: '/jingxuan', component: JingXuan},
	{path: '/shopcar', component: ShopCar},
	{path: '/gift', component: Gift},
	{path: '/user', component: User},
	{path: '/regist', component: Regist},
	{path: '/login', component: Login},
	{path: '/list/:listID', component: List},
	{path: '/detail/:detailID/:urlID', component: Detail},


]

const router = new VueRouter({
	routes// （缩写）相当于 routes: routes
})

export default router;