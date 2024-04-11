<template>
  <div class="pc_content">
    <iframe :src="url" class="pc_iframe"></iframe>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
const url = ref('http://192.168.31.193:3010/')
</script>
<style scoped>
.pc_content {
  width: 475PX;
  margin: 0 auto;
}
.pc_iframe {
  width: 100%;
  height: 100vh;
  border-top: none;
  border-bottom: none;
  border-left: 1PX solid rgb(238 234 234);
  border-right: 1PX solid rgb(238 234 234);
}
</style>