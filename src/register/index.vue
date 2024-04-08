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
        <h2 class="main_section_title">用户注册</h2>
        <div class="main_section_form">
          <div class="main_section_form_item">
            <div class="main_section_form_item_icon">
              <i class="iconfont icon-yonghu"></i>
            </div>
            <input
              type="text"
              class="main_section_form_item_value"
              placeholder="请输入用户名"
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
          <div class="main_section_form_item">
            <div class="main_section_form_item_icon">
              <i class="iconfont icon-ziyuanxhdpi"></i>
            </div>
            <input
              :type="pwdType"
              class="main_section_form_item_value"
              placeholder="再次输入密码"
            />
            <div class="main_section_form_item_action" @click="onShowPwd()">
              <i class="iconfont icon-bukejian" v-if="pwdType == 'password'"></i>
              <i class="iconfont icon-kejian" v-if="pwdType == 'text'"></i>
            </div>
          </div>
          <div class="main_section_form_item">
            <div class="main_section_form_item_icon">
              <i class="iconfont icon-yaoqing"></i>
            </div>
            <input
              type="text"
              class="main_section_form_item_value"
              placeholder="邀请码(必填)"
            />
          </div>
          <div class="main_section_form_submit">注册</div>
        </div>
        <div class="main_section_other">
          已有账号?<span @click="onLogin()">去登录</span>
        </div>
      </div>
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

const onLogin = () => {
  router.push('/login');
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>