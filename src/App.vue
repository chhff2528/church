<template>
  <div class="app-wrap">
    <Header  v-if="$route.meta.header != false"></Header>
    <div class="pdt " v-if="$route.meta.header != false"></div>
    <div class="app-container" :class="($route.meta.header == false ? 'app-notop' : '11')" v-cloak>
      <keep-alive :include="include">
        <router-view ref="router"></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
function isKeepAlive($route) {
  return $route.meta.keepAlive === undefined || $route.meta.keepAlive;
}
import Header from "@components/Header";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      transitionName: "fold-right",
      include: isKeepAlive(this.$route) ? [this.$route.name] : []
    };
  },
  provide() {
    return {
      app: this
    };
  },
  // computed: mapGetters(["footer"]),
  components: {
    Header
  }
}
</script>
<style lang="scss">
[v-cloak] {
  display: none !important;
}

.router {
  position: absolute;
  width: 100%;
}

.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.5s;
}

.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.5s;
}

@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  10% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.5s;
}

.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.5s;
}

@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  10% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
</style>
