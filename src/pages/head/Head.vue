<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" >壹心shop</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">个人中心</el-menu-item>
    <el-sub-menu index="2">
      <template #title>{{ name}}</template>
      <el-menu-item index="2-1" ><span @click="$router.push('/')" style="width: 100%;height: 100%;">退出</span></el-menu-item>      
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { onMounted, ref,reactive } from 'vue'

    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log((key=='2-1'))
      if(key=='2-1')
      console.log(key, )
      console.log(keyPath )
    }
    let name = sessionStorage.getItem('quanxian')
    // sessionStorage.removeItem('quanxian')
    console.log(sessionStorage.getItem('quanxian'));
    onMounted (()=> {
    
    
 
    })

</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

</style>
