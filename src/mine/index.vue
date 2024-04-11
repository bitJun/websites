<template>
  <div class="container">
    <div class="header" @click="goUrl('safe')">
      <img
        :src="logo"
        class="header_logo"
      />
      <div class="header_info">
        <div class="header_info_name"> Hi,Wendy0105</div>
        <div class="header_info_id">
          ID:19868342
          <img
            :src="copy"
            class="header_info_copy"
            v-clipboard:copy="userId"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          />
        </div>
        <div class="header_info_arrow">
          <i class="iconfont icon-you"></i>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box_card">
        <div class="box_card_section">
          <div class="box_card_section_value">HK$ 99988.96</div>
          <div class="box_card_section_tip">余额</div>
        </div>
      </div>
      <div class="box_control">
        <div class="box_control_item" @click="goUrl('recharge')">
          <img
            :src="recharge"
            class="box_control_item_img"
          />
          充值
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('cashoutselect')">
          <img
            :src="withdraw"
            class="box_control_item_img"
          />
          提现
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('mybill')">
          <img
            :src="Trade"
            class="box_control_item_img"
          />
          投注明细
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('rechargehistory')">
          <img
            :src="Trade"
            class="box_control_item_img"
          />
          充值记录
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('withdrawhistory')">
          <img
            :src="Trade"
            class="box_control_item_img"
          />
          提现明细
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('safe')">
          <img
            :src="safe"
            class="box_control_item_img"
          />
          安全中心
          <div class="box_control_item_arrow">
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        <div class="box_control_item" @click="goUrl('language')">
          <img
            :src="language"
            class="box_control_item_img"
          />
          语言设置
          <div class="box_control_item_arrow">
            简体中文
            <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="box_logOut" @click="logOut()">
        <div class="box_logOut_action">退出登录</div>
      </div>
    </div>
    <TabBar :active="3"/>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TabBar from '@components/TabBar/index.vue';
import logo from '@assets/logo.png';
import copy from '@assets/copy.png';
import recharge from '@assets/recharge.png';
import withdraw from '@assets/withdraw.png';
import Trade from '@assets/Trade.png';
import safe from '@assets/mycenter-pop-safe.png';
import language from '@assets/mycenter-pop-language.png';
import { showConfirmDialog } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter();

const userId = ref('19868342')
const state = reactive({

})

const goUrl = (url) => {
  router.push(url)
}

const onCopy = (e) => {
  console.log('success', e.text);
}

const onError = () => {
  console.log('error');
}

const logOut = () => {
  showConfirmDialog({
    title: '',
    message:'确定退出登录?',
    confirmButtonColor: '#FF2742'
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
}
</script>
<style>

.van-dialog {
  width: 640px !important;
}
</style>
<style lang="less" scoped>
@import url('./index.less');
</style>