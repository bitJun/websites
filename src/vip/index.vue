<template>
  <div class="container">
    <TopHeader
      :title="name"
      class="whiteBg"
      @showRule="showRuleInfo()"
    />
    <div class="main">
      <div class="main_banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              :src="banner"
              class="main_banner_img"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="main_list">
        <div
          class="main_list_item"
          v-for="item in list"
          :key="item.id"
        >
          <img
            :src="item.icon"
            class="main_list_item_img"
          />
          {{ item.name }}
          <div class="main_list_item_action">
            <div class="main_list_item_action_item" @click="showClip(item.id)">底注: {{item.antes}}</div>
            <div class="main_list_item_action_item" @click="showClip(item.id)">准入: {{item.access}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopHeader from '@components/TopHeader/index.vue';
import { useRoute, useRouter } from 'vue-router';
import banner from '@assets/banner_vip1.png';
import lv1 from '@assets/lv1.png';
import lv2 from '@assets/lv2.png';
import lv3 from '@assets/lv3.png';

const route = useRoute();
const router = useRouter();
const state = reactive({

});

const id = ref(null);
const name = ref('VIP1');

const list = ref([
  {
    id: 0,
    icon: lv1,
    name: '普通厅',
    antes: '2.00',
    access: '10000.00'
  },
  {
    id: 1,
    icon: lv2,
    name: '中级厅',
    antes: '200.00',
    access: '200000.00'
  },
  {
    id: 0,
    icon: lv3,
    name: '高级厅',
    antes: '1000.00',
    access: '300000.00'
  },
])

onMounted(()=>{
  id.value = route.params.id;
})

const showClip = (id) => {
  router.push(`/chip/${id}`)
}

const showRuleInfo = () => {
  router.push(`/rule?id=${1}`)
}
</script>
<style lang="less" scoped>
@import url('./index.less');
</style>