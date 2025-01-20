<!-- 定义网站主布局 -->
<script setup lang="ts">
import Header from '../../components/Header/Header.vue';
</script>

<template>
  <Header />
  <div class="mx-auto max-w-[1000px] py-[16px] px-[8px]">
    <slot></slot>
  </div>
</template>