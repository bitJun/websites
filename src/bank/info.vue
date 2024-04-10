<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title=""
    />
    <div class="box">
      <div class="title">
        选择银行卡
        <img
          :src="addIcon"
          @click="goUrl('/bank/add')"
        />
      </div>
      <div class="tip">为了您的资金安全，取款前请绑定银行卡信息，绑定前务必核对银行卡信息，更多问题请联系客服人员。</div>
    </div>
    <div
      class="item"
      v-for="item in list"
      :key="item"
    >
      <div class="main">
        <p>123</p>
        <p>123</p>
        <p>123</p>
        <div class="edit" @click="edit(item)">
          <img
            :src="modify"
          />
        </div>
      </div>
    </div>
    <div class="emptyView" v-if="list.length == 0">
      <img
        :src="emptyIcon"
        class="emptyViewIcon"
      />
      <p class="emptyViewText">暂无记录</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import addIcon from '@assets/public_increase_black.png';
import emptyIcon from '@assets/deficiency_bank_record.png';
import modify from '@assets/extract_bank_modify.png';

import { useRouter } from 'vue-router';

const router = useRouter();

const list = ref([1]);

const goUrl = (url) => {
  router.push(url);
}

const onBack = () => {
  router.go(-1);
}

const edit = (id) => {
  router.push(`/bank/add?id=${id}`)
}

</script>
<style lang="less" scoped>
@import url('./info.less');
</style>