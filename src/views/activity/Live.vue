<template>
  <div class="index">
    <div id="player"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  mounted: function() {
   var playerLive = polyvObject("#player").livePlayer({
     
      width: "800px",
      height: "533px",
      flashvars: {
        is_barrage: "on",
        VolumeM: "0"
      },
      uid: "e405i666d0",
      vid: "234028"
    });
  }
};
</script>
<style scoped>
[v-cloak] {
  display: none;
}

.index {
  margin-top: 1.2rem;
}
</style>
