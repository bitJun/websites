<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="银行卡取款"
      class="whiteBg"
    />
    <div class="box">
      <div class="form">
        <div class="form_control" @click="goUrl('/bank/1')">
          <div class="form_control_label">银行卡</div>
          <div class="form_control_action">
            选择银行卡
            <i class="van-badge__wrapper van-icon van-icon-arrow van-cell__right-icon"><!----><!----><!----></i>
          </div>
        </div>
        <div class="form_title">提现金额(HK):</div>
        <van-cell value="内容">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <input
              type="text"
              class="content"
              v-model="num"
              placeholder="请输入提现金额"
            />
          </template>
          <template #value>
            <span @click="allTotal()">全部</span>
          </template>
        </van-cell>
        <div class="form_tip">实际到账(HK$): <span>{{fee}}</span></div>
        <div class="form_tip">可用(HK): <span>{{total}}</span></div>
        <div class="form_tip">手续费(HK): <span>{{rate}}</span></div>
      </div>
      <div class="action" @click="submit()">提交订单</div>
    </div>
  </div>
  <van-popup
    v-model:show="show"
    class="pwd_info"
  >
    <div class="pwd_info_title">支付密码</div>
    <i class="iconfont icon-shanchu2" @click="onClose()"></i>
    <van-password-input
      :value="pwd"
      :focused="true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="pwd"
      :show="true"
    />
  </van-popup>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import bank from '@assets/bank.png';
import userIcon from '@assets/user_icon_enter.png';
import { useRouter } from 'vue-router';

const router = useRouter();
const show = ref(false);
const pwd = ref('');
const num = ref('');
const fee = ref('0.00');
const total = ref(99988.96);
const rate = ref(0);

const goUrl = (url) => {
  router.push(url);
}

const allTotal = () => {
  num.value = total.value;
  fee.value = total.value;
}

const submit = () => {
  show.value = true;
}

const onClose = () => {
  show.value = false;
}
watch(
  () => pwd,
  () => {
    if (pwd.value.length == 6) {
      alert('此处校验支付密码')
    }
  },
  { deep: true, immediate: true }
)

</script>
<style>
  .van-cell__title {
    flex: 0.8;
    z-index: 20;
  }
  .van-cell__value {
    flex: 0.2;
    z-index: 10;
    color: #0685e6;
  }
</style>
<style lang="less" scoped>
@import url('./index.less');
</style>