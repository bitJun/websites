<template>
  <div class="container">
    <TabBar :active="3"/>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TabBar from '@components/TabBar/index.vue';
import TopBar from '@components/TopBar/index.vue';
const state = reactive({

})
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>