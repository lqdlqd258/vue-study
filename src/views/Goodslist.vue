<!--  -->
<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
        <span slot="bread">goods</span>
        <span slot="B">2B</span>
    </nav-bread>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
        <dl class="filter-price">
          <dt>Price:</dt>
          <dd @click="priceChecked='all'"><a href="javascript:void(0)" :class="{'cur':priceChecked=='all'}" >All</a></dd>
          <dd v-for="(item,index) in priceList" >
            <a href="javascript:void(0)" :class="{'cur':priceChecked==index}" @click="priceChecked=index">{{item.startPrice}} - {{item.endPrice}}</a>
          </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="(item,index) in goodsList">
              <div class="pic">
                <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
                <!-- <a href="#"><img v-bind:src="'/static/'+item.productImg" alt=""></a> -->
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.productPrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import './../assets/css/base.css'
import './../assets/css/product.css'
import NavHeader from "@/components/NavHeader.vue"
import NavFooter from "@/components/NavFooter.vue"
import NavBread from "@/components/NavBread.vue"
import axios from "axios"
export default {
  data () {
    return {
      goodsList:[],
      priceList:[
        {
          startPrice:'0.00',
          endPrice:'500.00'
        },
        {
          startPrice:'501.00',
          endPrice:'1000.00'
        },
        {
          startPrice:'1001.00',
          endPrice:'2000.00'
        }
      ],
      priceChecked:'all',
      filterBy:false,
      overLayFlag:false
    }
  },
  components:{
    NavHeader,
    NavFooter,
    NavBread
  },
  mounted:function(){
    this.getGoodsList();
  },
  methods:{
    getGoodsList(){
      axios.get("/goods").then((result)=>{
        var res = result.data;
        this.goodsList = res.result.list;
      });
    },
    showFilterPop(){
        this.filterBy = true;
        this.overLayFlag = true;
    }
  }
}
</script>
