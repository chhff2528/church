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
.el-autocomplete {
  top: 10px;
  right: 20px;
}

.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}

.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
  color: black;
}

.my-autocomplete .addr {
  font-size: 14px;
  color: #b4b4b4;
}

.church-header .church-search {
  cursor: pointer;
}
</style>
