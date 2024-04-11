<template>
  <div class="container">
    <div class="header">
      <div class="topBar">
        <div
          class="topBar_back"
          @click="onBack()"
        >
          <i class="iconfont icon-zuojiantou"></i>
        </div>
        VIP2普通厅
        <div
          class="topBar_action"
        >
          <div class="topBar_action_item" @click="onRefresh()">
            <img
              :src="refresh"
              alt=""
            />
          </div>
          <div class="topBar_action_item" @click="visableMenu()">
            <img
              :src="menu"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info_base">
          <div class="info_base_name">距离20240409221期封盘</div>
          <div class="info_base_value">
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
        <div class="info_price">
          <div class="info_price_name">余额</div>
          <div class="info_price_value">99988.96</div>
        </div>
      </div>
      <div class="tips" @click="show()">
        <div class="tips_left">
          第<span>20240409256</span>期
        </div>
        <div class="tips_right">
          <span>8</span>&nbsp;+&nbsp;<span>7</span>&nbsp;+&nbsp;<span>7</span>&nbsp;=&nbsp;<span class="blue">22</span>&nbsp;(大双)
        </div>
        <div class="tips_list" v-if="visable">
          <div class="tips_list_header">
            <div class="tips_list_header_total">期数</div>
            <div class="tips_list_header_sum">总合</div>
            <div class="tips_list_header_result">结果</div>
          </div>
          <div
            class="tips_list_main"
            v-for="item in [1,2,3,4,5]"
            :key="item"
          >
            <div class="tips_list_main_second">
              第<span>20240409259</span>期
            </div>
            <div class="tips_list_main_total">
              <span>8</span>+<span>7</span>+<span>7</span>=<span class="blue">22</span>
            </div>
            <div class="tips_list_main_result">
              (大双)
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <div
        class="list_item"
        v-for="item in list"
        :key="item"
        :id="item"
        ref="listRef"
      >
        <div class="list_item_time">21:52:02</div>
        <div class="list_item_order">
          <div class="list_item_order_img">
            <img
              :src="kefu"
              alt=""
            />
          </div>
          <div class="list_item_order_info">
            <div class="list_item_order_info_username">42***s</div>
            <div class="list_item_order_info_detail">
              <div class="list_item_order_info_detail_name">20240409266期</div>
              <div class="list_item_order_info_detail_type">
                <span>交易类型</span>
                <span>交易金额</span>
              </div>
              <div class="list_item_order_info_detail_price">
                <span>26</span>
                <span>6018金额</span>
              </div>
              <div class="list_item_order_info_detail_tip">共1注,9131金额</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list_box">
      <div class="list_box_main">
        <div class="list_box_main_title"> 【NO.20240410219】 </div>
        <div class="list_box_main_content">
          <span>单笔交易2.00起，总交易金额999999封顶</span>
        </div><!---->
      </div>
    </div>
    <div class="down_action" @click="onDown()">
      <img
        :src="down"
        alt=""
      />
    </div>
    <div class="footer">
      <div class="footer_item" @click="trade()">快速交易</div>
      <div class="footer_item">交易取消</div>
    </div>
  </div>
  <div class="mask" @click="onClose()" v-if="showMenu">
    <div class="menu">
      <div class="menu_main">
        <div class="menu_box" @click="goUrl('/trade')">市场走势</div>
        <div class="menu_box" @click="goUrl('/mybill')">交易记录</div>
        <div class="menu_box" @click="goUrl('/kefu')">在线客服</div>
        <div class="menu_box" @click="showRule()">交易说明</div>
      </div>
    </div>
  </div>
  <van-popup
    v-model:show="showBottom"
    position="bottom"
    class="popup_info"
  >
    <div class="popup_info_box">
      <van-tabs
        background="#f5f6f7"
        v-model:active="active"
      >
        <van-tab
          title="大小单双"
        >
          <div class="popup_info_box_list">
            <div
              class="popup_info_box_list_item"
              v-for="item in [1,2,3,4,5,6]"
              :key="item"
              @click="quickTrade()"
            >
              <div class="popup_info_box_list_item_detail">
                <span>大</span>
                <span>1.98</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab
          title="数字"
        >
          <div class="popup_info_box_list">
            <div
              class="popup_info_box_list_item"
              v-for="item in [1,2,3,4,5,6]"
              :key="item"
              @click="quickTrade()"
            >
              <div class="popup_info_box_list_item_detail">
                <span>大</span>
                <span>1.98</span>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab
          title="特别投掷"
        >
          <div class="popup_info_box_list">
            <div
              class="popup_info_box_list_item"
              v-for="item in [1,2,3,4,5,6]"
              :key="item"
              @click="quickTrade()"
            >
              <div class="popup_info_box_list_item_detail">
                <span>大</span>
                <span>1.98</span>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="popup_info_footer">
      <div class="popup_info_footer_item">重新交易</div>
      <div class="popup_info_footer_item">确认交易</div>
    </div>
  </van-popup>
  <van-popup
    v-model:show="showTrade"
    position="bottom"
    class="trade_info"
  >
    <div class="trade_info_header">
      <div class="trade_info_header_value">{{price || '请输入交易金额'}}</div>
      <div class="trade_info_header_action">
        <div class="trade_info_header_action_item" @click="onSure()">确定</div>
        <div class="trade_info_header_action_item" @click="onCloseTrade()">取消</div>
      </div>
      <van-number-keyboard
        :show="true"
        @input="onInput"
        @delete="onDelete"
        extra-key="."
      />
    </div>
  </van-popup>
  <van-popup
    v-model:show="visable1"
    class="rule_info"
  >
    <div class="rule_info_title">说明</div>
    <div class="rule_info_content">
      <p>1.大小单双赔率1.98倍<br></p>
      <p>2.组合(小单|小双|大单|大双)组合3.8倍</p>
      <p>3.极大极小11倍</p>
      <p>4.对子3倍</p>
      <p>5.顺子9倍</p>
      <p>6.豹子30倍</p>
    </div>
    <div class="rule_info_action" @click="onCloseVisable()">确认</div>
  </van-popup>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import kefuBanner from '@assets/kefuimg.png';
import kefu from '@assets/kefu.jpg';
import down from '@assets/down.png';
import menu from '@assets/menu.png';
import refresh from '@assets/refresh2.png';
import { useRouter } from 'vue-router';

const time = ref(3000000)
const router = useRouter();
const list = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
const showBottom = ref(false);
const showTrade = ref(false);
const visable = ref(false);
const showMenu = ref(false);
const visable1 = ref(false);
const active = ref(0);
const loading = ref(false);
const finished = ref(false);
const price = ref('');

const onLoad = () => {}

const goUrl = (url) => {
  showMenu.value = false;
  router.push(url);
}

const onBack = () => {
  router.go(-1);
}

const state = reactive({

})

const show = () => {
  visable.value = !visable.value;
}

const visableMenu = () => {
  showMenu.value = true;
}

const showRule = () => {
  visable1.value = true;
}


const trade = () => {
  showBottom.value = true;
}

const onClose = () => {
  showMenu.value = false;
}

const onCloseTrade = () => {
  showTrade.value = false;
}

const onCloseVisable = () => {
  visable1.value = false;
}

const onRefresh = () => {
  window.location.reload();
}

let listRef = ref()
const onDown = () => {
  listRef.value[list.value.length - 1].scrollIntoView({ block: 'start', behavior: 'smooth' });
}

const quickTrade = () => {
  showTrade.value = true;
}

const onSure = () => {
  showTrade.value = false;
}

const onInput = (value) => {
  price.value = `${price.value}${value}`
}

const onDelete = () => {
  price.value = price.value.slice(0, -1);
}

</script>
<style>
.van-tabs {
  height: 70px;
  line-height: 70px;
  font-size: 32px;
  font-weight: 600;
  color: #333;
}
.van-tab--active {
  color: #333;
}
.van-tabs__line {
  height: 8px;
  background: #333;
  border-radius: 4px;
  width: 33.33%;
}
</style>
<style lang="less" scoped>
@import url('./index.less');
</style>