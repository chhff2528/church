<template>
  <div class="index">
    <div class="nav clearfix" v-if="this.menus.length ">
      <router-link :to="item.wap_url ? item.wap_url : ''" class="item" target="_blank" v-for="(item, index) in menus"
        :key="index">
        <div class="pictrue "><img :src="item.pictureURL" />
          <div class="title">{{ item.Name }}</div>
        </div>
      </router-link>
    </div>
    <div class="nav" v-else>
      什么也没有发现～
    </div>
  </div>
</template>
<script>
  import {
    getData
  } from "@api/public";
  export default {
    name: "Richang",
    data: function () {
      return {
        menus: []
      };
    },
    mounted: function () {
      let that = this;
      let params = {
        "jsonorder": {"token":"3456dfklj3443ldsfd435","objectName":"video","functionName":"GetFuyinData"} 
      };
      getData(params).then(res => {
        console.log(res.status);
        that.$set(that, "menus", res.data);
      }).catch(function (error) {
        console.log(error);
      });;
    }
  };
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
</style>