<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title=""
      class="whiteBg"
    />
    <div class="box">
      <h3 class="title">详情</h3>
      <div class="control">
        入款方式
        <div class="conrtol_info">客服充值</div>
      </div>
      <div class="control">
        状态
        <div class="conrtol_info" :class="statusColor[status]">{{statusText[status]}}</div>
      </div>
      <div class="control">
        存款数量
        <div class="conrtol_info">100000 HKD</div>
      </div>
      <div class="control">
        订单的好
        <div 
          class="conrtol_info"
          v-clipboard:copy="orderNo"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          {{orderNo}}
          <img
            :src="copyIcon"
            class="copy"
          />
        </div>
      </div>
      <div class="control">
        时间
        <div class="conrtol_info">2023-11-27 12:37:21</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import copyIcon from '@assets/public_copy_blue.png';

const state = reactive({

});
const status = ref(0);
const statusColor = ref({
  0: 'blue',
  1: 'green',
  2: 'red'
})
const statusText = ref({
  0: '审核中',
  1: '成功',
  2: '失败'
})

const orderNo = ref('UR1701059841349')

const onCopy = (e) => {
  console.log('success', e.text);
}

const onError = () => {
  console.log('error');
}
</script>
<style lang="less" scoped>
@import url('./detail.less');
</style>