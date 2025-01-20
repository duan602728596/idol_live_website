<script setup lang="ts">
import { inject } from 'vue';
import { Row, Col, Button } from 'ant-design-vue';
import Main from '../../components/Main/Main.vue';
import type { IndexInitialState } from '../../components/InitialState/InitialStateTypes';

const { address_list: addressList }: IndexInitialState = inject<IndexInitialState>('initialState', {
  address_list: []
});
</script>

<template>
  <Main>
    <h1 class="mb-[8px] text-center">各大城市地下偶像主办活动汇总</h1>
    <Row wrap :gutter="[10, 12]">
      <template v-for="address in addressList" :key="address.id">
        <Col :xs="12" :sm="8" :md="6" :lg="4">
          <Button type="primary" :href="'/live/' + address.id" ghost block>{{ address.name }}</Button>
        </Col>
      </template>
    </Row>
  </Main>
</template>