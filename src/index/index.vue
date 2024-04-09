<template>
  <div class="container">
    <TopBar 
      title="首页"
    />
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            :src="banner1"
            class="banner_item"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            :src="banner2"
            class="banner_item"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <div class="notice_icon">
        <img
          :src="noticeIcon"
        />
      </div>
      
      <div class="notice_bar">
        <van-notice-bar
          scrollable
          text="米袋虽空——樱花开哉！"
          color="#000000"
          background="#ffffff"
        />
      </div>
      <div class="notice_more" @click="notice()">更多></div>
    </div>
    <h1 class="title">交易大厅</h1>
    <div class="vipList">
      <div
        v-for="item in state.vips"
        class="vipList_item"
        :key="item.id"
      >
        <img
          :src="item.img"
          @click="showDetail(item.id)"
          alt=""
        />
      </div>
    </div>
    <TabBar :active="0"/>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TabBar from '@components/TabBar/index.vue';
import TopBar from '@components/TopBar/index.vue';
import { useRouter } from 'vue-router';
import banner1 from '@assets/banner1.jpeg';
import banner2 from '@assets/banner2.jpeg';
import noticeIcon from '@assets/notice.png';
import vip1 from '@assets/vip1.png';
import vip2 from '@assets/vip2.png';
import vip3 from '@assets/vip3.png';

const router = useRouter();
const state = reactive({
  vips: [
    {
      id: 0,
      img: vip1,
      name: 'VIP1'
    },
    {
      id: 1,
      img: vip2,
      name: 'VIP2'
    },
    {
      id: 2,
      img: vip3,
      name: 'VIP3'
    }
  ]
})

onMounted(()=>{
})

const showDetail = (id) => {
  router.push(`/vip/${id}`)
}

const notice = () => {
  router.push(`/notice`)
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>