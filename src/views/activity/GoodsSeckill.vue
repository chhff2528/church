<template>
  <div class="preach-wrap" ref="container">
    <el-container>
      <el-main>
        <!-- 视频区域 -->
        <div id="player_container" class="preach-content">
        </div>
        <!-- 音频 -->
        <div id="myAudioPlayer"></div>
      </el-main>
      <el-aside class="recom-aside">

        <el-timeline>
          <!-- <a class="recommend-item clearfix" v-for="(item, index) in timeList" :key="index"> -->
          <el-timeline-item>
            <el-card class="card-box">
              <h4 class="title">更新 Github 模板</h4>
              <el-image style="width: 100%; height: 100px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :fit="fit"></el-image>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-aside>
    </el-container>
  </div>
</template>
<script>

  import Loading from "@components/Loading";
  import {
    getHomeData
  } from "@api/public";
  export default {
    name: "GoodsSeckill",
    components: {
      Loading
    },
    props: {},
    data: function () {
      return {
        timeList: []
      };
    },
    methods: {
      video: function () {
        var that = this;
        var player = polyvPlayer({
          wrap: '#player_container',
          width: '800px',
          height: '533px',
          vid: '2d238d2ac2080819a03d361d2b7a7eb1_2'
        });
      },
      audio: function () {
        const plvAudioPlayer = new PlvAudioPlayer({
          vid: '2d238d2ac26edd53bb54c7f51ecef78c_2',
          wrap: '#myAudioPlayer',
          skin: 'white'
        });
      },
      all:function(){
        var mode = player.getCurrentMode();
        console.log(mode) // video/audio
      }
    },
    mounted: function () {
      // this.video();
      this.audio();
      let that = this;
      getHomeData()
        .then(res => {
          console.log(res);
          that.$set(that, "timeList", res.data);
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

  /* .polyvFlashObject {
    width: 10rem;
    height: 6.67rem;
  } */

  .recom-aside {
    background: #ffffff;
    width: 4rem !important;
    padding: 0.2rem;
  }

  /* .card-box {
    width: 3.2rem;
  } */

  .card-box .title {
    margin-bottom: 0.1rem;
  }

  #myAudioPlayer {
    width: 576px;
    margin: 30px auto;
  }

  .preach-content {
    width: 800px;
    margin: 0 auto;
  }
</style>