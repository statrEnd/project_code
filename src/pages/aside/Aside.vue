<template>
  <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        unique-opened

      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon color="#409EFC"><document /></el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/family/index">
              <el-menu-item index="1-1">数据预览</el-menu-item>
            </router-link>
            <el-menu-item index="1-2">最新消息</el-menu-item>
            <el-menu-item index="1-3">欢迎页</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="其他功能页">
            <el-menu-item index="1-4">item three</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><icon-menu /></el-icon>
          <span>店铺管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/store/storelist">
              <el-menu-item index="2-1">店铺列表</el-menu-item>
            </router-link>
            <el-menu-item index="2-2">新增店铺</el-menu-item>
            <el-menu-item index="2-3">修改店铺</el-menu-item>
            <el-menu-item index="2-4">注销店铺</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><document /></el-icon>
          <span>订单管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/order/orderlist">
              <el-menu-item index="3-1">订单列表页</el-menu-item>
            </router-link>
            <el-menu-item index="3-2">查看订单详情页</el-menu-item>
            <el-menu-item index="3-3">取消订单页</el-menu-item>
            <el-menu-item index="3-4">订单发货页</el-menu-item>
            <el-menu-item index="3-5">订单售后管理页</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>
            <el-icon><document /></el-icon>
          <span>商品管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link  to="/home/goods/goodslist">
              <el-menu-item index="4-1">商品列表</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title>
            <el-icon><document /></el-icon>
          <span>用户管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/user/userlist">
              <el-menu-item index="5-1">用户列表页</el-menu-item>
            </router-link>
            <el-menu-item index="5-2">用户权限管理页</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>
            <el-icon><document /></el-icon>
          <span>营销管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/marketing/marketinglist">
              <el-menu-item index="6-1">活动管理页</el-menu-item>
            </router-link>
            <el-menu-item index="6-2">活动统计页</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>
            <el-icon><document /></el-icon>
          <span>报表与分析</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/analysis/analysislist">
              <el-menu-item index="7-1">销售统计页</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="8">
          <template #title>
            <el-icon><document /></el-icon>
          <span>权限管理</span>
          </template>
          <el-menu-item-group title="">
            <router-link to="/home/power/powerlist">
              <el-menu-item index="8-1">角色管理页</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
 width: 100%;
 height: 100%;
}
/* a.router-link-exact-active{
	background-color: orange;
	color: #fff;
} */

</style>
