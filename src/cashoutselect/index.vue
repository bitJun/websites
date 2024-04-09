<template>
  <div class="container">
    <div class="topBar">
      <div
        class="topBar_back"
        @click="onBack()"
      >
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      取款方式
      <div
        class="topBar_action"
        @click="goUrl('/withdrawhistory')"
      >
        <i class="iconfont icon-datijilu"></i>
      </div>
    </div>
    <div class="box">
      <div class="box_control">
        <img
          :src="bank"
          class="box_control_img"
        />
        銀行匯款
        <div class="box_control_action">
          <img
            :src="userIcon"
            class="box_control_action_img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
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
@import url('./index.less');
</style>