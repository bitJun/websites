<template>
  <div class="tabBar">
    <div
      v-for="item in tabList"
      class="tabBar_item"
      :class="[active == item.id ? 'active' : '']"
      :key="item.id"
      @click="redictUrl(item.path)"
    >
      <div class="tabBar_item_icon">
        <img
          :src="active == item.id ? item.iconActive : item.icon"
        />
      </div>
      <p
        class="tabBar_item_text"
        :class="[active == item.id ? 'active' : '']"
      >
        {{item.name}}
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import tab1 from '@assets/tab1.png';
import tab1Active from '@assets/tab1_active.png';
import tab2 from '@assets/tab2.png';
import tab2Active from '@assets/tab2_active.png';
import tab3 from '@assets/tab3.png';
import tab3Active from '@assets/tab3_active.png';
import tab4 from '@assets/tab4.png';
import tab4Active from '@assets/tab4_active.png';

const router = useRouter();

const tabList = ref([
  {
    id: 0,
    icon: tab1,
    iconActive: tab1Active,
    name: '首页',
    path: '/'
  },
  {
    id: 1,
    icon: tab2,
    iconActive: tab2Active,
    name: '充值',
    path: '/recharge'
  },
  {
    id: 2,
    icon: tab3,
    iconActive: tab3Active,
    name: '客服',
    path: '/kefu'
  },
  {
    id: 3,
    icon: tab4,
    iconActive: tab4Active,
    name: '我的',
    path: '/mine'
  }
])
const props = defineProps({
  active: {
    type: Number,
    default: 0
  }
});

const redictUrl = (url) => {
  router.push(url);
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>