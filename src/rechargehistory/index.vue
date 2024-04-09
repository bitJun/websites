<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="充值记录"
      class="whiteBg"
    />
    <van-tabs v-model:active="active">
      <van-tab
        v-for="item in tabList"
        :title="item.name"
        :key="item.id"
      >
        内容 {{item.id}}
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';


const tabList = ref([
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '审核中'
  },
  {
    id: 2,
    name: '成功'
  },
  {
    id: 3,
    name: '失败'
  }
])
const active = ref(0);
const state = reactive({

})
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>