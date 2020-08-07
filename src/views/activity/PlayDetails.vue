<template>
  <div class="preach-wrap" ref="container">
    <div class="main">
      <!-- 音频区域 -->
      <div id="myAudioPlayer" v-if="type == 'audio'"></div>
      <!-- 视频区域 -->
      <div id="player_container" class="preach-content" v-else></div>
    </div>
    <!-- 切换按钮 -->
    <el-row class="btn-wrap mobile">
      <a :href="'/activity/' + $route.params.id + '/video'" v-if="type == 'audio'">
        <el-button type="primary" round>切换视频</el-button>
      </a>
      <a :href="'/activity/' + $route.params.id + '/audio'" v-else>
        <el-button type="primary" round>切换MP3</el-button>
      </a>
    </el-row>
    <div class="recom-aside">
      <a v-for="(item, index) in timeList" :key="index" :href="'/activity/' + item.ID + '/video'" class="aside-item">
        <img :src="'http://18.183.203.248/'+item.PictureURL" class="image">
        <span class="title">{{ item.Name }}</span>
        
      </a>
    </div>
  </div>
</template>
<script>
  import Loading from "@components/Loading";
  import {
    getIPlayData
  } from "@api/public";
  export default {
    name: "PlayDetails",
    components: {
      Loading
    },
    data: function () {
      return {
        timeList: [],
        currentVid: "",
        currentMP3: "",
        type: ""
      };
    },
    mounted: function () {
      let that = this;
      let type = this.$route.params.type;
      let id = this.$route.params.id;
      that.type = type;
      getIPlayData({
          jsonorder: id
        })
        .then(res => {
          that.$set(that, "timeList", res.dataall);
          that.$set(that, "currentVid", res.data[0].Vid);
          that.$set(that, "currentMP3", res.data[0].MP3Vid);
          if (type == "audio") {
            const plvAudioPlayer = new PlvAudioPlayer({
              vid: that.currentMP3,
              wrap: "#myAudioPlayer",
              skin: "white"
            });
          } else {
            var playerVideo = polyvPlayer({
              wrap: "#player_container",
              width: "100%",
              height: "100%",
              vid: that.currentVid
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
</script>
<style scoped>
  
</style>