<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="修改登录密码"
      class="whiteBg"
    />
    <div class="form">
      <h3 class="form_title">旧密码</h3>
      <div class="form_control">
        <input
          :type="oldPwdType"
          class="form_control_value"
          placeholder="请输入旧登录密码"
          v-mode="state.oldPwd"
        />
        <div class="form_control_action" @click="onShowPwd('oldPwdType')">
          <i class="iconfont icon-bukejian" v-if="oldPwdType == 'password'"></i>
          <i class="iconfont icon-kejian" v-else></i>
        </div>
      </div>
      <h3 class="form_title">新密码</h3>
      <div class="form_control">
        <input
          :type="newPwdType"
          class="form_control_value"
          placeholder="请输入新登录密码"
          v-model="state.newPwd"
        />
        <div class="form_control_action" @click="onShowPwd('newPwdType')">
          <i class="iconfont icon-bukejian" v-if="newPwdType == 'password'"></i>
          <i class="iconfont icon-kejian" v-else></i>
        </div>
      </div>
      <h3 class="form_title">确认新密码</h3>
      <div class="form_control">
        <input
          :type="reNewPwdType"
          class="form_control_value"
          placeholder="请再次输入新密码"
          v-mode="state.reNewPwd"
        />
        <div class="form_control_action" @click="onShowPwd('reNewPwdType')">
          <i class="iconfont icon-bukejian" v-if="reNewPwdType == 'password'"></i>
          <i class="iconfont icon-kejian" v-else></i>
        </div>
      </div>
    </div>
    <div class="action">提交</div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import tips from '@assets/user_icon_tips.png';
import userIcon from '@assets/user_icon_enter.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const oldPwdType = ref('password');
const newPwdType = ref('password');
const reNewPwdType = ref('password');
const state = reactive({
  oldPwd: '',
  newPwd: '',
  reNewPwd: ''
});

const goUrl = (url) => {
  router.push(url);
}

const onShowPwd = (type) => {
  if (type == 'newPwdType') {
    newPwdType.value == 'password' ? newPwdType.value = 'text' : newPwdType.value = 'password'
  }
  if (type == 'reNewPwdType') {
    reNewPwdType.value == 'password' ? reNewPwdType.value = 'text' : reNewPwdType.value = 'password'
  }
  if (type == 'oldPwdType') {
    oldPwdType.value == 'password' ? oldPwdType.value = 'text' : oldPwdType.value = 'password'
  }
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>