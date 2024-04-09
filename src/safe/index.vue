<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="安全中心"
      class="whiteBg"
    />
    <div class="box">
      <div class="box_control" @click="goUrl('/changebuspwd')">
        交易密码
        <div class="box_control_action">
          <img
            :src="tips"
            class="box_control_action_img"
          />
          未设置
          <img
            :src="userIcon"
            class="box_control_action_arrow"
          />
        </div>
      </div>
      <div class="box_control" @click="goUrl('/changepwd')">
        登录密码
        <div class="box_control_action">
          <img
            :src="userIcon"
            class="box_control_action_arrow"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import tips from '@assets/user_icon_tips.png';
import userIcon from '@assets/user_icon_enter.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const state = reactive({

});

const goUrl = (url) => {
  router.push(url);
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>