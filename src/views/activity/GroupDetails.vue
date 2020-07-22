<template>
  <div>
    预留一个空页面
  </div>
</template>

<script>
// import { getCombinationDetail } from "@api/activity";
const NAME = "GroupDetails";

export default {
  name: "GroupDetails",
  components: {
    ProductConSwiper,
    UserEvaluation,
    swiper,
    swiperSlide,
    StorePoster
  },
  props: {},
  data: function() {
    return {
      groupList: []
    };
  },
  methods: {
    //详情；
    mountedStart: function() {
      var that = this;
      let id = that.$route.params.id;
      // getCombinationDetail(id).then(res => {
      //   that.$set(that, "storeInfo", res.data.storeInfo);
      //   that.$set(that, "groupList", res.data.pink);
      
      // });
    },
    goReply: function() {
      var that = this;
      that.$router.push({
        path: "/evaluate_list/" + that.storeInfo.product_id
      });
    }
  }
};
</script>
<style scoped>

</style>
