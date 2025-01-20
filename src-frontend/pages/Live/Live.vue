<script setup lang="ts">
import { inject } from 'vue';
import { List, FloatButton } from 'ant-design-vue';
import { listRenderItem } from './listRenderItem';
import Main from '../../components/Main/Main.vue';
import type { LiveInitialState } from '../../components/InitialState/InitialStateTypes';

const {
  weibo_list: weiboSpiderList,
  address_val: addressVal
}: LiveInitialState = inject<LiveInitialState>('initialState', {
  weibo_list: [],
  address_val: '各大城市'
});
</script>

<template>
  <Main>
    <h1 class="mb-[8px] text-center">{{ addressVal }}地下偶像主办活动汇总</h1>
    <List :dataSource="weiboSpiderList" :renderItem="listRenderItem" rowKey="bid" bordered itemLayout="vertical" />
  </Main>
  <FloatButton.BackTop :visibilityHeight="30" />
</template>