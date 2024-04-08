<template>
  <div class="topBar">
    {{title}}
  </div>
</template>
<script setup>
import { reactive, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  showBack: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
});

const onBack = () => {
  router.go(-1);
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>