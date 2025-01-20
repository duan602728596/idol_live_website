<!-- 在入口统一定义initialState -->
<script setup lang="ts">
import { provide } from 'vue';
import type { InitialState } from './InitialStateTypes';

const initialState: InitialState = globalThis.__INITIAL__STATE__;

provide('initialState', initialState);
delete globalThis.__INITIAL__STATE__;
</script>

<template>
  <slot></slot>
</template>