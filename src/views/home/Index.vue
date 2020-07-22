<template>
  <div class="index">
    <object type="application/x-shockwave-flash" data="http://player.polyv.net/live/player.swf" id="234028" width="100%"
      height="200" class="polyvFlashObject">
      <param name="allowScriptAccess" value="always">
      <param name="allowFullScreen" value="true">
      <param name="quality" value="high">
      <param name="bgcolor" value="#ffffff">
      <param name="wmode" value="transparent">
      <param name="flashvars"
        value="is_barrage=on&amp;VolumeM=0&amp;vid=234028&amp;uid=e405i666d0&amp;useFastDns=off&amp;"></object>
    <!-- <iframe id="entry" src="polyv 提供的网址" frameborder="0" allowfullscreen="true"
      allow="microphone; camera">

    </iframe> -->
  </div>
</template>
<script>
  import {
    getHomeData
  } from "@api/public";

  export default {
    name: "Index",
    components: {

    },

    data: function () {
      return {
        menus: []
      };
    },
    // mounted: function() {
    //   let that = this;
    //   getHomeData().then(res => {
    //     that.$set(that, "menus", res.data);     
    //   }).catch(function(error){
    // 				console.log(error);
    // 			});;
    // }
  };
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
  .index{
    margin-top: 1.2rem;
  }
</style>