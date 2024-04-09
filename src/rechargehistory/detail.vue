<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title=""
      class="whiteBg"
    />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
const state = reactive({

})
</script>
<style lang="less" scoped>
@import url('./detail.less');
</style>