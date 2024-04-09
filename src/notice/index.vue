<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="公告"
      class="whiteBg"
    />
    <div class="list">
      <div
        class="list_item"
        v-for="item in [1,2,3,4,5,6,7,8,9,10]"
        :key="item"
        @click="showDetail(item)"
      >
        <div class="list_item_name">尊敬的貴賓：</div>
        <div class="list_item_desc">歡迎光臨澳門巴黎人線上VIP賭廳！ 澳門巴黎人全體員工；祝您財源廣進，日進斗金！</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const state = reactive({

});

const showDetail = (id) => {
  router.push(`/notice/${id}`)
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>