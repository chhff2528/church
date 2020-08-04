<template>
  <div id="header" class="header church-header">
    <div class="container clearfix">
      <h3 class="logo fl">
        <img src="@assets/images/logo.png" />
      </h3>
      <div class="nav fl">
        <router-link
          :to="item.url"
          class="item"
          :class="{ on: item.url === $route.path }"
          v-for="(item, index) in footerList"
          :key="index"
        >
          {{ item.name }}
        </router-link>
      </div>
      <!-- 搜索 -->
      <el-autocomplete
        class="fr"
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      >
        <template slot-scope="{ item }">
          <a :href="'/activity/' + item.ID + '/video'">
            <div class="name">{{ item.Name }}</div></a
          >
        </template>
      </el-autocomplete>
      <!-- 搜索end -->
    </div>
  </div>
</template>
<script>
import { getData } from "@api/public";
export default {
  name: "Header",
  props: {},
  data: function() {
    return {
      restaurants: [],
      state: "",
      footerList: [
        {
          name: "日常证道",
          icon1: "icon-yingyongchengxu-xianxing",
          icon2: "icon-yingyongchengxu",
          url: "/"
        },
        {
          name: "直播",
          icon1: "icon-shouye-xianxing",
          icon2: "icon-shouye",
          url: "/activity/live"
        },
        {
          name: "福音",
          icon1: "icon-caigou-xianxing",
          icon2: "icon-caigou",
          url: "/activity/fuyin"
        }
      ]
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.Name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted: function() {
    let that = this;
    let params = {
      jsonorder: {
        token: "3456dfklj3443ldsfd435",
        objectName: "video",
        functionName: "getdata"
      }
    };
    getData(params)
      .then(res => {
        console.log(res.status);
        that.$set(that, "restaurants", res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
/* 头部 */
.header {
    position: fixed;
    width: 100%;
    height: 0.6rem;
    top: 0;
    left: 0;
    background-color: #22222e;
    z-index: 22;
}
.pdt{
    padding-top: 0.8rem;
}
.header .container {
    width: 1080px;
    margin: 0 auto;
    position: relative;
    
}
.header .logo{
    display: inline-block;
    margin-top: 5px;
    width: 0.36rem;
    height: 0.51rem;
}

.header .nav{
    margin-left:0.2rem;
}
.header .item {
    position: relative;
    display: inline-block;
    font-size: 0.18rem;
    color: #fff;
    -webkit-transition: .2s color;
    transition: .2s color;
    padding: 0.03rem;
    margin: 0.16rem 0.3rem;
}

.header .item.on::before,
.header .item:hover::before{
    position: absolute;
    background: #8784c7;
    content: '';
    width: 0.3rem;
    height: 0.03rem;
    bottom: 0rem;
    left: 50%;
    border-radius: 0.03rem;
    transform: translateX(-50%);
}

.el-autocomplete {
  top: 0.1rem;
  right: 0.2rem;
}

.my-autocomplete li {
  line-height: normal;
  padding: 0.07rem;
}

.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
}

.my-autocomplete .addr {
  font-size: 0.16rem;
  color: #b4b4b4;
}

.church-header .church-search {
  cursor: pointer;
}
</style>
