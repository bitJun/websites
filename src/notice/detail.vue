<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="详情"
      class="whiteBg"
    />
    <div class="box">
      <h3 class="title">尊敬的貴賓：</h3>
      <p class="time">2023/04/14 21:46</p>
      <div class="desc">歡迎光臨澳門巴黎人線上VIP賭廳！ 澳門巴黎人全體員工；祝您財源廣進，日進斗金！</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = reactive({

});
const id = ref(null)

onMounted(()=>{
  id.value = route.params.id;
})
</script>
<style lang="less" scoped>
@import url('./detail.less');
</style>