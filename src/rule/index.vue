<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="游戏玩法"
      class="whiteBg"
    />
    <div class="box">
      <p>         
      0-13为小,14-27为大<br>
      单双:<br>
      开出的号码为双数叫双,例:0,2,4,6,8,10<br>
      开出的号码为单数叫单,例:1,3,5,7,9,11<br>
      大单大双:<br>
      出的号码≥14为大且为双数,例;14(大双)15(大单)<br>
      小单小双:<br>
      开出的号码≤13为小且为单数,例:13(小单)12(小双)<br>
      小单小双:<br>
      开出的号码≤13为小且为单数,例:13(小单)12(小双)<br>
      游戏规则:<br>
      1.上分即本金的一倍流水,方可提现。<br>
      2.禁止同号或以其他方式进行大小单双对刷行为。<br>
      3.严禁恶意套取彩金。<br>
      4.晋级会员需完成相对应流水方可提现。<br>
      5.领取过夜彩金需完成两倍流水,24小时后即可提现。<br>
      6.预留会员名额后暂时关闭提现通道,需等待晋级成功后方可恢复提现。<br>
      【注:最终解释权归本平台所有~】<br>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = reactive({

});
const id = ref(null)

onMounted(()=>{
  id.value = route.params.id;
})
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>