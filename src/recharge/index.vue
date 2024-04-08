<template>
  <div class="container">
    <div class="header">
      <div class="header_title">余额</div>
      <div class="header_value">9999888.66</div>
      <div class="header_id">ID: 19868342</div>
    </div>
    <div class="main">
      <div class="main_card">
        <h4 class="main_card_title">尊敬的會員：</h4>
        <p class="main_card_desc">&nbsp;&nbsp;&nbsp;&nbsp;我們的網銀充值收款賬戶會不定期更換。每次充值前請諮詢在線客服，確定最新的收款賬戶。非常感謝您的支持！</p>
        <p class="main_card_tip">&nbsp;&nbsp;【澳门巴黎人】 全體員工祝您財源廣進！</p>
      </div>
      <div class="main_info">
        <div class="main_info_charge">
          <input
            class="main_info_charge_input"
            type="text"
            placeholder="請輸入充值金額"
          />
        </div>
        <div class="main_info_action">
          <div class="main_info_action_submit">提交充值</div>
        </div>
      </div>
      <div class="main_tip">
        <i class="van-badge__wrapper van-icon van-icon-warning-o"></i>
        提交充值前請確認支付成功。
      </div>
    </div>
    <TabBar :active="1"/>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TabBar from '@components/TabBar/index.vue';
import TopBar from '@components/TopBar/index.vue';
const state = reactive({

})
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>