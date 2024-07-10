<template>
  <div class="outside animate__animated animate__fadeInDown">
    <div class="sou" style=""></div>

    <div class="storelist">
      <el-card class="box-card" v-for="(item,index) in states.datalist" :key="index" >
        <template #header>
          <div class="card-header">
            <span>店铺名称：{{ item.store_name }}</span>
            <el-button class="button" text @click="console.log(o)">Operation button</el-button>
          </div>
        </template>
        <div class="text item">邮箱：{{ item.store_email }}</div>
        <div class="text item">地址：{{ item.Introduction }}</div>
        <div class="text item">联系电话：{{ item.Tel }}</div>
        <div class="text item">经营种类{{ item.created_at }}</div>
      </el-card>
    </div>

    <el-pagination hide-on-single-page small background layout="prev, pager, next" :total="100" />
  </div>
  
</template>

<script setup>
import { onMounted, ref ,reactive} from 'vue'
import axios from 'axios'; 

let datalist = {}
let value1 = ref(true)
let listnum = ref(0)
let listnum2 = [1,2,3,5]
let text = '经营中';
let states = reactive({
  text,value1,listnum,datalist
})


onMounted(async () => {
  await axios.get('http://127.0.0.1:5000/api/store/list').then(res => {
    states.datalist = res.data
    console.log(states.datalist)
  })
})


</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: .875rem;
}

.item {
  margin-bottom: 1.125rem;
}

.box-card {
  width: 37.5rem;
  margin-top: 1.25rem;
}
.storelist {
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}



.outside {
  display: flex;
  width: 100%;
  /* height: 100%; */
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

</style>