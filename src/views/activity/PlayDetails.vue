<template>
  <div class="preach-wrap" ref="container">
    <div class="main">
      <!-- 音频区域 -->
      <div id="myAudioPlayer" v-if="type == 'audio'"></div>
      <!-- 视频区域 -->
      <div id="player_container" class="preach-content" v-else></div>
      <!-- 切换按钮 -->
      <el-row class="btn-wrap">
        <a :href="'/activity/' + $route.params.id + '/video'" v-if="type == 'audio'">
          <el-button type="primary" round>切换视频</el-button>
        </a>
        <a :href="'/activity/' + $route.params.id + '/audio'" v-else>
          <el-button type="primary" round>切换MP3</el-button>
        </a>
      </el-row>
    </div>
    <el-aside class="recom-aside">
      <el-timeline>
        <el-timeline-item v-for="(item, index) in timeList" :key="index">
          <a :href="'/activity/' + item.ID + '/video'">
            <el-card class="card-box">
              <h4 class="title">{{ item.Name }}</h4>
              <el-image style="width: 100%; height: 100px" :src="item.PictureURL" :fit="fit"></el-image>
            </el-card>
          </a>
        </el-timeline-item>
      </el-timeline>
    </el-aside>
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
  .preach-wrap {
    position: fixed;
    width: 100vw;
    display: block;
    height: 100%;
  }

  .recom-aside {
    background: #ffffff;
    height: calc(100vh - 100px);
    position: absolute;
    right: 0;
    bottom: 1rem;
  }

  .card-box .title {
    margin-bottom: 0.1rem;
  }

  #myAudioPlayer {
    width: 576px;
    margin: 30px auto;
  }

  .main {
    width: calc(100vw - 350px);
    height: calc(100vh - 140px);
    text-align: center;
  }

  .btn-wrap {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .preach-content {
    display: inline-block;
  }

  @media screen and (min-width: 767px) {
    .preach-content {
      width: 800px;
      height: 533px;
    }
  }

  @media screen and (max-width: 640px) {
    .main {
      width: 100%;
      height: calc(100vh - 3rem);
      position: relative;
    }

    #myAudioPlayer {
      width: 100%;
      background: #fff;
      height: calc(100vh - 3.6rem);
      margin: 0 auto;
      padding: 1.3rem 0.2rem 0;
    }

    .preach-content {
      width: 100%;
      height: calc(100vh - 3.6rem);
    }

    .btn-wrap {
      position: absolute;
      bottom: 0;
      margin: 0.1rem;
    }

    .recom-aside {
      height: 3rem;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100vw !important;
    }
  }
</style>