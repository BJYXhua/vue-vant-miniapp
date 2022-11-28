<template>
  <div class="swiper" @mouseover="clear" @mouseout="run">
    <div class="slide-img">
      <transition name="slide-trans">
        <img
          v-if="isshow"
          :src="imgs[nowIndex].src"
          :title="imgs[nowIndex].title"
        />
      </transition>
      <transition name="slide-trans-old">
        <img
          v-if="!isshow"
          :src="imgs[nowIndex].src"
          :title="imgs[nowIndex].title"
        />
      </transition>
    </div>
    <div class="swiperfooter">
      <ol>
        <li
          v-for="(item, index) in imgs.length"
          :key="index"
          :class="{ currentCircle: index === nowIndex }"
          @click="switchImg(index)"
        ></li>
      </ol>
    </div>

   </div>
</template>

<script> 
export default {
  name: 'Carousel',
  props: ['imgs', 'time'],
  data() {
    return {
      nowIndex: 0,
      isshow: true,
    }
  },
  methods: {
    goto(index) {
      this.isshow = false
      setTimeout(() => {
        this.isshow = true
        this.nowIndex = index
      }, 10)
    },
    run() {
      this.timer = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.time)
    },
    clear() {
      clearInterval(this.timer)
    },
    switchImg(index) {
      this.nowIndex = index
    },
  },
  computed: {
    nextIndex() {
      if (this.nowIndex === this.imgs.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    },
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.imgs.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
  },
  mounted() {
    this.run()
  },
}
</script>

<style scoped>
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.swiper {
  width: 100%;
  height: 40vw;
  position: relative;
  overflow: hidden;
  top:50px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  height: 100%;
  position: absolute;
}


.container {
  width: 100%;
  height: 100%;
}
.container ul {
  width: 1000%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  display: flex;
}
.container ul li {
  width: 600px;
  height: 100%;
}
.container ul li img {
  width: 100%;
  height: 100%;
}
.swiperfooter {
  width: 100%;
  height: 15px;
  position: absolute;
  top: 85%;
  display: flex;
  justify-content: center;
}
.swiperfooter ol {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 0 3px;
}
.swiperfooter ol li {
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0 5px;
  cursor: pointer;
}
.swiperfooter ol li:hover {
  background-color: #fff;
}
.swiperfooter .currentCircle {
  background-color: #fff;
}
.container .currentImg {
  display: block;
}

.slide-trans-enter-active {
  transition: all 1s ease;
}
.slide-trans-enter {
  transform: translateX(100%);
}

.slide-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-100%);
}
</style>
