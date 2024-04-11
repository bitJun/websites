<template>
  <div id="container" class="wrapper">
    <div class="animation">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
let transitionName = ref();
let router = useRouter();
router.beforeEach((to, from) => {
  // 根据路由标记判断触发哪个动画
  if (to.meta.index > from.meta.index) {
    // 从右往左动画
    transitionName.value = 'slide-right';
  } else if (to.meta.index < from.meta.index) {
    // 从左往右动画
    transitionName.value = 'slide-left';
  } else {
    transitionName.value = '';
  }
});
</script>
<style>

</style>
