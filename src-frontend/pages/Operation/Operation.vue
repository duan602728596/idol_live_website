<script setup lang="ts">
import { inject } from 'vue';
import { List } from 'ant-design-vue';
import Main from '../../components/Main/Main.vue';
import { listRenderItem } from './listRenderItem';
import type { OperationInitialState } from '../../components/InitialState/InitialStateTypes';

const { log }: OperationInitialState = inject<OperationInitialState>('initialState', {
  log: []
});
</script>

<template>
  <Main>
    <List size="small" :dataSource="log" :renderItem="listRenderItem" />
  </Main>
</template>