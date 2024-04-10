<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="提款记录"
      class="whiteBg"
    />
    <van-tabs
      background="#f5f6f7"
      v-model:active="active"
    >
      <van-tab
        v-for="item in tabList"
        :title="item.name"
        :key="item.id"
      >
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="box"
            v-for="json in list"
            :key="json.id"
            @click="showDetail(json.id)"
          >
            <div class="box_title">
              {{json.name}}
              <div class="box_title_status" :class="statusColor[json.status]">
                {{statusText[json.status]}}
                <img
                  :src="userIcon"
                  class="icon"
                />
              </div>
            </div>
            <div class="box_info">
              <div class="box_info_item">
                <div class="box_info_item_name">提币币种</div>
                <div class="box_info_item_value">{{json.coinType}}</div>
              </div>
              <div class="box_info_item">
                <div class="box_info_item_name">金额</div>
                <div class="box_info_item_value">{{json.value}}{{json.coinType}}</div>
              </div>
              <div class="box_info_item">
                <div class="box_info_item_name right">时间</div>
                <div class="box_info_item_value right">{{json.time}}</div>
              </div>
            </div>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import userIcon from '@assets/user_icon_enter.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const tabList = ref([
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '审核中'
  },
  {
    id: 2,
    name: '成功'
  },
  {
    id: 3,
    name: '失败'
  }
]);
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
const list = ref([
  {
    id: 0,
    name: '客服充值',
    coinType: 'HKD',
    value: '213',
    time: '04/07 21:12',
    status: 0,
  },
  {
    id: 1,
    name: '客服充值',
    coinType: 'HKD',
    value: '213',
    time: '04/07 21:12',
    status: 1,
  },
  {
    id: 1,
    name: '客服充值',
    coinType: 'HKD',
    value: '213',
    time: '04/07 21:12',
    status: 2,
  }
])
const active = ref(0);
const state = reactive({

})
const loading = ref(false);
const finished = ref(true);

const onLoad = () => {}

const showDetail = (id) => {
  router.push(`/withdrawhistory/${id}`);
}
</script>
<style>
.van-tabs {
  font-size: 28px;
  color: #646566;
}
.van-tab--active {
  color: rgb(255, 39, 66);
}
.van-tabs__line {
  background: rgb(255, 39, 66);
}
</style>
<style lang="less" scoped>
@import url('./index.less');
</style>