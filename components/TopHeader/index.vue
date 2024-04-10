<template>
  <div class="topBar" :class="class">
    <div
      class="topBar_back"
      @click="onBack()"
    >
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    {{title}}
    <div
      class="topBar_action"
      @click="onRule()"
    >
      邀请玩法
    </div>
  </div>
</template>
<script setup>
import { reactive, defineProps, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
const emit = defineEmits(['showRule']);

const router = useRouter();
const props = defineProps({
  showBack: {
    type: Boolean,
    default: false
  },
  showAction: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
});

const onBack = () => {
  router.go(-1);
}

const onRule = () => {
  emit('showRule');
}

const onChangeLanguage = () => {
  router.push('/language')
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>