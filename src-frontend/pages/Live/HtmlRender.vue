<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue';
import { handlingEscapeCharacters, formatLink } from './function/formatRawText';

interface HtmlProps {
  readonly html?: string | undefined;
}

const { html = '' }: HtmlProps = defineProps({
  html: String
});
const divRef: Ref<HTMLElement | null> = ref(null);

onMounted(function(): void {
  // 处理地址不正确的link href和image src
  if (divRef.value) formatLink(divRef.value);
});

</script>

<template>
  <div ref="divRef" class="w-full" v-html="handlingEscapeCharacters(html)"></div>
</template>