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
          <a  v-for="(item, index) in timeList" :key="index" :href="'/activity/' + item.ID + '/video'" class="aside-item" >
          <img :src="item.PictureURL" class="image">
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
  .preach-wrap {
    position: fixed;
    width: 100vw;
    display: block;
    height: 100%;
  }

  .recom-aside {
    width: 300px;
    background: #ffffff;
    height: calc(100vh - 100px);
    position: absolute;
    right: 0;
    bottom: 1rem;
    overflow-y: auto;
  }
  .recom-aside  .aside-item{
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
    max-width: 260px;
    /* height: 185px; */
    background: #22222e;
    margin: 18px;
  }
  .recom-aside  .aside-item .title {
    display: inline-block; 
    line-height: 186px;
    text-align: center;
    position: absolute;
    z-index: 20;
    width: 100%;
    top: 0;
    left: 0;
  }

  #myAudioPlayer {
    width: 576px;
    margin: 30px auto;
  }

  .main {
    width: calc(100vw - 470px);
    height: calc(100vh - 180px);
    text-align: center;
  }

  .btn-wrap {
    display: inline-block;
    width: calc(100vw - 470px);
    margin: 20px 120px;
  }

  .preach-content {
    display: inline-block;
  }

  @media screen and (min-width: 769px) {
    .preach-content {
      width:100%;
      height: 100%;
      margin-left: 120px;
    }
  }

  @media screen and (max-width: 768px) {
    .main {
      width: 100%;
      /* height: calc(100% - 4rem); */
      height: 1.8rem;
      position: relative;
      z-index: 100;
    }

    #myAudioPlayer {
      width: 100%;
      background: #fff;
      height: 100%;
      margin: 0 auto;
      padding: 0.5rem 0.2rem 0;
    }

    .preach-content {
      width: 100%;
      height: 100%;
    }

    .btn-wrap {
      display: block;
      position: absolute;
      top: 1.8rem;
      z-index: 999;
      margin: 0.1rem;
    }

    .recom-aside {
      background: pink;
      height:calc(100% - 2.4rem);
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100% !important;
      padding: 0.2rem 0.4rem 0.2rem 0.2rem;
      overflow-y: auto;
    }
  }
</style>