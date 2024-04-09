<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="走势图"
      class="whiteBg"
    />
    <div class="header">
      <div class="header_item">期号</div>
      <div class="header_item">号码</div>
      <div class="header_item">值</div>
      <div class="header_item">大</div>
      <div class="header_item">小</div>
      <div class="header_item">单</div>
      <div class="header_item">双</div>
    </div>
    <div
      class="box"
      v-for="item in list"
      :key="item"
    >
      <div class="box_item">20240409255</div>
      <div class="box_item">8,4,3</div>
      <div class="box_item">15</div>
      <div class="box_item">
        <span class="bg">大</span>
      </div>
      <div class="box_item">-</div>
      <div class="box_item"><span class="blue">单</span></div>
      <div class="box_item">-</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
const list = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>