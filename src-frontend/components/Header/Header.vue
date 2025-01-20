<script setup lang="ts">
import iconGithubAvif from './images/github.avif';
import iconGithubWebp from './images/github.webp';
import iconGithubPng from './images/github.png';
</script>

<template>
  <header class="sticky z-10 top-0 bg-slate-950">
    <div class="flex mx-auto max-w-[1000px] h-[64px]">
      <nav class="flex grow shrank-0 text-[16px] nav">
        <div class="mx-[8px] h-full content-center">
          <a href="/index">首页</a>
        </div>
        <div class="mx-[8px] h-full content-center">
          <a href="/operation">运行情况</a>
        </div>
      </nav>
      <div class="shrank-0 mr-[8px] content-center">
        <a class="block w-[30px] h-[30px]" href="https://github.com/duan602728596" target="_blank">
          <picture>
            <source :srcset="iconGithubAvif" type="image/avif">
            <source :srcset="iconGithubWebp" type="image/webp">
            <img class="block w-full h-full" :src="iconGithubPng" alt="github">
          </picture>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav a {
  color: rgba(255, 255, 255, .8);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
}
</style>