<template>
  <div class="outside animate__animated animate__fadeInDown">
    <div class="sou">

    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="shopNum" label="商品编号" width="180" />
      <el-table-column prop="name" label="商品名称" width="180" />
      <el-table-column prop="type" label="商品名称" width="180" />
      <el-table-column prop="price" label="单价" width="180" />
      <el-table-column prop="stock" label="库存" width="180"/>
      <el-table-column prop="status" label="状态" width="180"/>
      <el-table-column prop="saleNum" label="销售总量"  />

      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button 
          size="small" 
          type="success"
          plain
          @click="handleEdit(scope.$index, scope.row)"
          >修改
          </el-button>
          <el-button 
          size="small" 
          type="primary"
          plain
          @click="handleEdit(scope.$index, scope.row)"
          >添加
          </el-button>
          <el-button
            size="small"
            type="danger"
            plain
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <el-pagination style="margin: 20px 0;" hide-on-single-page small background layout="prev, pager, next" :total="100" />
  </div>

</template>

<script setup>
import { ref } from 'vue';
  let tableData = [
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        {
          shopNum: 1,
          name: '商品A',
          type: '衣物',
          price: 99.9,
          stock: 10,
          status: '销售中',
          saleNum: '45.2W',
        },
        // 其他商品数据...
      ]
</script>

<style scoped>
.outside {
  display: flex;
  width: 100%;
  /* height: 100%; */
  /* background: rgb(245, 245, 245); */
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.sou {
  width: 300px;
  height: 45px;
  margin-bottom: 10px;
  border-radius: 22.5px;
  box-shadow: 0px 1px 17px 4px #F0F2F5;
  /* border: 1px solid saddlebrown; */
}
</style>