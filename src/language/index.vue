<template>
  <div class="container">
    <TopBar 
      title="语言设置"
      :showBack="true"
      class="whiteBg"
    />
    <div class="container_list">
      <div
        class="container_list_item"
        v-for="item in languages"
        :key="item.id"
        @click="onChoose(item.id)"
        :class="[item.id == currentLanguage ? 'active' : '']"
      >
        <img
          :src="item.icon"
          class="container_list_item_icon"
          alt=""
        />
        {{item.name}}
        <img
          :src="choice"
          class="container_list_item_choose"
          alt=""
          v-if="item.id == currentLanguage"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import znCh from '@assets/zh-CN.png';
import znTw from '@assets/zh-TW.png';
import en from '@assets/en.png';
import ja from '@assets/ja.png';
import ko from '@assets/ko.png';
import choice from '@assets/user_public_choice.png';

const currentLanguage = ref('');

const languages = ref([
  {
    id: 0,
    name: '简体中文',
    icon: znCh
  },
  {
    id: 1,
    name: '繁體中文',
    icon: znTw
  },
  {
    id: 2,
    name: 'English',
    icon: en
  },
  {
    id: 3,
    name: '日本語',
    icon: ja
  },
  {
    id: 4,
    name: '한국어',
    icon: ko
  },
])

const onChoose = (id) => {
  currentLanguage.value = id;
}

</script>
<style lang="less" scoped>
@import url('./index.less');
</style>