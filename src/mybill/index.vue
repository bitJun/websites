<template>
  <div class="container">
    <TopBar
      :showBack="true"
      title="资金明细"
      class="whiteBg"
    />
    <div class="header">
      <div class="tab">
        <div
          class="tab_item"
          :class="[active == 0 ? 'active' : '']"
          @click="onChangeTab(0)"
        >
          明细
        </div>
        <div
          class="tab_item"
          :class="[active == 1 ? 'active' : '']"
          @click="onChangeTab(1)"
        >
          入口记录
        </div>
        <div
          class="tab_item"
          :class="[active == 2 ? 'active' : '']"
          @click="onChangeTab(2)"
        >
          取款记录
        </div>
      </div>
    </div>
    <div v-if="active == 0">
      <van-list
        v-if="lists.length > 0"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="section"
          v-for="item in lists"
          :key="item.id"
        >
          <div class="section_head">
            <div class="section_head_periods">{{item.periods}}</div>
            <div
              class="section_head_num"
              :class="[item.status == 1 ? 'green' : 'red']"
            >
              {{item.status == 1 ? '+' : '-'}}{{item.num}} HKD
            </div>
          </div>
          <div class="section_name">{{item.name}}</div>
          <div class="section_time">{{item.time}}</div>
        </div>
      </van-list>
      <div class="emptyView" v-else>
        <img
          :src="emptyIcon"
          class="emptyViewIcon"
        />
        <p class="emptyViewText">暂无记录</p>
      </div>
    </div>
    <div v-if="active == 1">
      <van-list
        v-if="list.length > 0"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="box"
          v-for="json in list"
          :key="json.id"
          @click="showRecharge(json.id)"
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
              <div class="box_info_item_name">充值币种</div>
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
      <div class="emptyView" v-else>
        <img
          :src="emptyIcon"
          class="emptyViewIcon"
        />
        <p class="emptyViewText">暂无记录</p>
      </div>
    </div>
    <div v-if="active == 2">
      <van-list
        v-if="list2.length > 0"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="box"
          v-for="json in list"
          :key="json.id"
          @click="showWithdraw(json.id)"
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
      <div class="emptyView" v-else>
        <img
          :src="emptyIcon"
          class="emptyViewIcon"
        />
        <p class="emptyViewText">暂无记录</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import TopBar from '@components/TopBar/index.vue';
import userIcon from '@assets/user_icon_enter.png';
import emptyIcon from '@assets/deficiency_assets_record.png';
import { useRouter } from 'vue-router';

const router = useRouter();
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
const lists = ref([
  {
    id: 0,
    periods: 20240406417,
    num: 3.96,
    name: '派奖-单',
    time: '2024/04/06 20:51:01',
    status: 0,
  },
  {
    id: 1,
    periods: 20240406417,
    num: 3.96,
    name: '派奖-单',
    time: '2024/04/06 20:51:01',
    status: 1,
  },
])
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
const list2 = ref([
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
]);
const active = ref(0);
const loading = ref(false);
const finished = ref(true);

const onLoad = () => {}

const onChangeTab = (tab) => {
  active.value = tab;
}

const showRecharge = (id) => {
  router.push(`/rechargehistory/${id}`);
}

const showWithdraw = (id) => {
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