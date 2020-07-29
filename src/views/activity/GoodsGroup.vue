<template>
  <div class="index">
    <div class="nav clearfix" v-if="this.menus.length">
      <!-- to="/activity/video" -->
      <a  href="javascript" class="item"  v-for="(item, index) in menus" @click="$router.push({ path: '/activity/video' })"
        :key="index">
        <div class="pictrue "><img :src="item.pictureURL" />
          <div class="title">{{ item.Name }}</div>
        </div>
      </a>
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
        "jsonorder": {
          "token": "3456dfklj3443ldsfd435",
          "objectName": "video",
          "functionName": "getdata"
        }
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