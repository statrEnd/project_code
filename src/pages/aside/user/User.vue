<template>
    <div class="outside animate__animated animate__fadeInDown">
      <div class="sou"></div>

      <el-table :data="tableData" 
      stripe
      table-layout="auto"
      :default-sort="{ prop: 'name', order: 'descending' }"
      style="width: 100%;height: 100%;">
        <el-table-column prop="date" label="头像" width="100" />  
        <el-table-column prop="date" label="账户" width="200" />  
        <el-table-column prop="shopName" label="账户昵称" width="200" />
        <el-table-column prop="orderNum" label="注册时间" width="200" />
        <el-table-column prop="shopNum" label="账号状态" width="150" />
        <el-table-column prop="sumPrice" label="密码" width="170" />
        <el-table-column prop="sumPrice" label="账户类型" width="100" />

        <el-table-column fixed="right" label="操作" width="250">
          <template #default="scope">
            <el-button 
            size="small" 
            @click="handleEdit(scope.$index, scope.row)"
            >添加账户
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除账户
              </el-button>
          </template>
        </el-table-column>
        
      </el-table>

    <el-pagination style="margin: 20px 0;" hide-on-single-page small background layout="prev, pager, next" :total="100" />

    </div>
</template>

<script setup>
  const tableData = [  
  
  {  
    shopName: "MacBook Pro",  
    shopNum: 1,  
    orderNum: '23fdv121d3df2',
    price: 1199,  
    sumPrice: 1199,  
    payment: "银行转账",  
    address: "456 Maple Ave, Phoenix, AZ 85003",  
    date: "2023-04-18",  
    remarks: "请使用泡沫包装，感谢"  
  },  
  {  
    shopName: "Nike Air Max",  
    shopNum: 3,  
    orderNum: '23fdv121d3df2',
    price: 149,  
    sumPrice: 447,  
    payment: "借记卡",  
    address: "8798 State St, Houston, TX 77058",  
    date: "2023-04-17",  
    remarks: "请使用快递，谢谢！"  
  },  
  {  
    shopName: "Xbox Series X",  
    shopNum: 2,  
    orderNum: '23fdv121d3df2',
    price: 399,  
    sumPrice: 798,  
    payment: "PayPal",  
    address: "4567 Jackson Blvd, San Francisco, CA 94158",  
    date: "2023-04-16",  
    remarks: ""  
  },  
  {  
    shopName: "Dell XPS 13",  
    shopNum: 1,  
    orderNum: '23fdv121d3df2',
    price: 999,  
    sumPrice: 999,  
    payment: "信用卡",  
    address: "789 Maple St, Oakland, CA 94612",  
    date: "2023-04-15",  
    remarks: ""  
  },  
  {  
    shopName: "T-shirt",  
    shopNum: 5,  
    orderNum: '23fdv121d3df2',
    price: 29,  
    sumPrice: 145,  
    payment: "PayPal",  
    address: "678 Main St, Los Angeles, CA 90014",  
    date: "2023-04-14",  
    remarks: ""  
  },  
  {  
    shopName: "Headphones",  
    shopNum: 3,  
    orderNum: '23fdv121d3df2',
    price: 59,  
    sumPrice: 177,  
    payment: "借记卡",  
    address: "345 Elm St, Minneapolis, MN 55401",  
    date: "2023-04-13",  
    remarks: ""  
  },  
  {  
    shopName: "USB C Hub",  
    shopNum: 4,  
    orderNum: '23fdv121d3df2',
    price: 69,  
    sumPrice: 276,  
    payment: "PayPal",
    address: "345 Elm St, Minneapolis, MN 55401",  
    date: "2023-04-13",  
    remarks: ""  
  },
  {  
    shopName: "MacBook Pro",  
    shopNum: 1,  
    orderNum: '23fdv121d3df2',
    price: 1199,  
    sumPrice: 1199,  
    payment: "银行转账",  
    address: "456 Maple Ave, Phoenix, AZ 85003",  
    date: "2023-04-18",  
    remarks: "请使用泡沫包装，感谢"  
  },  
  {  
    shopName: "Nike Air Max",  
    shopNum: 3,  
    orderNum: '23fdv121d3df2',
    price: 149,  
    sumPrice: 447,  
    payment: "借记卡",  
    address: "8798 State St, Houston, TX 77058",  
    date: "2023-04-17",  
    remarks: "请使用快递，谢谢！"  
  },  
  {  
    shopName: "Nike Air Max",  
    shopNum: 3,  
    orderNum: '23fdv121d3df2',
    price: 149,  
    sumPrice: 447,  
    payment: "借记卡",  
    address: "8798 State St, Houston, TX 77058",  
    date: "2023-04-17",  
    remarks: "请使用快递，谢谢！"  
  },  

  ]
</script>

<style>

</style>