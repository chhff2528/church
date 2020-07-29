<template>
  <div class="preach-wrap" ref="container">
    <el-container>
      <el-main>
        <!-- 音频区域 -->
        <div id="myAudioPlayer" v-if="type == 'audio'">
        </div>
        <!-- 视频区域 -->
        <div id="player_container" class="preach-content" v-else></div>
        <!-- 切换按钮 -->
        <el-row class="btn-wrap">
          
          <el-button type="primary" round v-if="type == 'audio'">切换视频<a :href="'/activity/' + $route.params.id + '/video'">vid</a></el-button>
          <el-button type="primary" round  v-else>切换MP3<a :href="'/activity/' + $route.params.id + '/audio'" >mp3vid</a></el-button>
        </el-row>
      </el-main>
      <el-aside class="recom-aside">
        <el-timeline>

          <el-timeline-item v-for="(item, index) in timeList" :key="index">
            <a :href="'/activity/' + item.ID + '/video'" target="_blank">
              <el-card class="card-box">
                <h4 class="title">{{ item.Name }}</h4>
                <el-image style="width: 100%; height: 100px" :src="item.pictureURL" :fit="fit"></el-image>
              </el-card>
            </a>
          </el-timeline-item>

        </el-timeline>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
  import Loading from "@components/Loading";
  import {
    getIPlayData
  } from "@api/public";
  export default {
    name: "tivity/PlayDetails.vu",
    components: {
      Loading
    },
    data: function () {
      return {
        timeList: [],
        currentVid: '',
        currentMP3: '',
        type:'video'
      };
    },
    mounted: function () {
      let that = this;
      let type = this.$route.params.type;
      let id = this.$route.params.id;
      that.type=type;
      getIPlayData({
          "jsonorder": id
        })
        .then(res => {
          that.$set(that, "timeList", res.dataall);
          that.$set(that, "currentVid", res.data[0].Vid);
          that.$set(that, "currentMP3", res.data[0].MP3Vid);
          if (type == 'audio') {
            const plvAudioPlayer = new PlvAudioPlayer({
              vid: that.currentMP3,
              wrap: '#myAudioPlayer',
              skin: 'white'
            });
          } else {
            var player = polyvPlayer({
              wrap: '#player_container',
              width: '800px',
              height: '533px',
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
    position: relative;
    top: 1rem;
  }

  .recom-aside {
    background: #ffffff;
    width: 4rem !important;
    padding: 0.2rem;
  }

  .card-box .title {
    margin-bottom: 0.1rem;
  }

  #myAudioPlayer {
    width: 576px;
    margin: 30px auto;
  }

  .preach-content,
  .btn-wrap {
    width: 800px;
    margin: 0 auto 20px;
  }
</style>