<template>
  <div>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    :items="items"
    @click="handleClick"
  />
  222
  <img style="width: 100px;height: 100px;" :src="homeIcon"  alt="" srcset="">
</div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
const chineseText = "分类.png";
const encodedText = encodeURIComponent(chineseText);
import homeIcon from "../../assets/home/分类.png"

const selectedKeys = ref([]);
const openKeys = ref([]);
const items = ref([

  {
    key: '2',
    icon: () => h(CalendarOutlined),
    label: '类别',
    title: '类别',
  },
  {
    key: '3',
    icon: () => h(CalendarOutlined),
    label: '我的',
    title: '我的',
  },
  {
    key: '4',
    icon: () => h(CalendarOutlined),
    label: '待定',
    title: '待定',
  },
  {
    key: '5',
    icon: () => h(CalendarOutlined),
    label: '登录',
    title: '登录',
  },
  {
    key: '6',
    icon: () => h(CalendarOutlined),
    label: '注册',
    title: '注册',
  },

]);
const handleClick: MenuProps['onClick'] = menuInfo => {
  console.log('click ', menuInfo);
};
</script>

