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
        popper-class="my-autocomplete"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      >
        <i
          class="el-icon-search el-input__icon church-search"
          slot="suffix"
          @click="handleIconClick"
        >
        </i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.value }}</div>
        </template>
      </el-autocomplete>
      <!-- 搜索end -->
    </div>
  </div>
</template>
<script>
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
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        {
          value: "三全鲜食（北新泾店）"
        },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）"
        },
        {
          value: "新旺角茶餐厅"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style scoped>
.el-autocomplete {
  top: 0.2rem;
  left: 0.4rem;
}

.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}

.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}

.my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}

.church-header .church-search {
  cursor: pointer;
}
</style>
