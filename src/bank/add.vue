<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="修改银行卡"
      class="whiteBg"
    />
    <div class="box">
      <h3 class="title">银行名称</h3>
      <div class="control">
        <input class="value" placeholder="请输入银行名称" />
      </div>
      <h3 class="title">银行卡号</h3>
      <div class="control">
        <input class="value" placeholder="请输入银行卡号" />
      </div>
      <h3 class="title">持卡人姓名</h3>
      <div class="control">
        <input class="value" placeholder="请输入持卡人姓名" />
      </div>
      <h3 class="title">支行名称(选填)</h3>
      <div class="control">
        <input class="value" placeholder="请输入支行名称" />
      </div>
      <h3 class="title">支行编号</h3>
      <div class="control">
        <input class="value" placeholder="请输入支行编号" />
      </div>
      <div class="action">提交</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import bank from '@assets/bank.png';
import userIcon from '@assets/user_icon_enter.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const goUrl = (url) => {
  router.push(url);
}

const onBack = () => {
  router.go(-1);
}

</script>
<style lang="less" scoped>
@import url('./add.less');
</style>