<template>
  <div class="container">
    <TopBar 
      title="客服"
      class="whiteBg"
    />
    <div class="box">
      <img
        :src="kefuBanner"
        class="box_img"
      />
      <div class="box_list">
        <div class="box_list_item" @click="concatOnLine()">
          <img
            :src="kefupeople"
            class="box_list_item_img"
          />
          在线客服
          <div class="box_list_item_action">在线咨询</div>
        </div>
        <div class="box_list_item" @click="concatWhatsApp()">
          <img
            :src="kefupeople"
            class="box_list_item_img"
          />
          WhatsApp
          <div class="box_list_item_action">在线咨询</div>
        </div>
      </div>
    </div>
    <TabBar :active="2"/>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TabBar from '@components/TabBar/index.vue';
import TopBar from '@components/TopBar/index.vue';
import kefuBanner from '@assets/kefuimg.png';
import kefupeople from '@assets/kefupeople.png';

const state = reactive({

})

const concatOnLine = () => {
  window.location.href = 'https://www.meelinechat.com/service.html?entId=54720&clientId=19868342&metadata=%7B%22name%22%3A%22%5Cu7528%5Cu6237id%3A19868342%22%2C%220%22%3A256%7D';
}

const concatWhatsApp = () => {
  window.location.href = 'https://api.whatsapp.com/send/?phone=%2B85252011242&text&type=phone_number&app_absent=0';
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>