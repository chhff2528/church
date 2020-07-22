<template>
  <div class="index">
    <div class="nav clearfix" v-if="loadList('1').length > 0">
      <router-link :to="item.wap_url ? item.wap_url : ''" class="item" target="_blank"
        v-for="(item, index) in loadList('1')" :key="index">
        <div class="pictrue "><img :src="item.pictureURL" />
          <div class="title">{{ item.name }}</div>
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
    getHomeData
  } from "@api/public";
  export default {
    name: "Richang",
    data: function () {
      return {
        menus: []
      };
    },
    computed: {
      loadList() {
        return (type) => {
          let filterData = [];
          this.menus.forEach(item => {
            if (item.dailyCategory == type) {
              filterData.push(item);
            }
          });
          return filterData;
        }
      }
    },
    mounted: function () {
      let that = this;
      getHomeData().then(res => {
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