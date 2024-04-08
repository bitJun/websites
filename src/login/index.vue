<template>
  <div class="container">
    <TopBar 
      title=""
      :showBack="true"
      :showAction="true"
      class="whiteBg"
    />
    <div class="main">
      <div class="main_logo">
        <img
          src="@assets/logo.png"
          class="main_logo_img"
        />
      </div>
      <div class="main_section">
        <h2 class="main_section_title">用户登录</h2>
        <div class="main_section_form">
          <div class="main_section_form_item">
            <div class="main_section_form_item_icon">
              <i class="iconfont icon-yonghu"></i>
            </div>
            <input
              type="text"
              class="main_section_form_item_value"
              placeholder="用户名/邮箱"
            />
          </div>
          <div class="main_section_form_item">
            <div class="main_section_form_item_icon">
              <i class="iconfont icon-ziyuanxhdpi"></i>
            </div>
            <input
              :type="pwdType"
              class="main_section_form_item_value"
              placeholder="请输入密码"
            />
            <div class="main_section_form_item_action" @click="onShowPwd()">
              <i class="iconfont icon-bukejian" v-if="pwdType == 'password'"></i>
              <i class="iconfont icon-kejian" v-if="pwdType == 'text'"></i>
            </div>
          </div>
          <div class="main_section_form_submit">登录</div>
        </div>
        <div class="main_section_other">
          没有账号?<span @click="onRegister()">去注册</span>
        </div>
      </div>
      <div class="main_kefu"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const pwdType = ref('password')
const state = reactive({

});

const onShowPwd = () => {
  if (pwdType.value == 'password') {
    pwdType.value = 'text';
  } else {
    pwdType.value = 'password';
  }
}

const onRegister = () => {
  router.push('/register');
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>