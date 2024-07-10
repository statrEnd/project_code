<template>
  <div class="outside animate__animated animate__fadeInDown">
    <div class="sou">

    </div>
    <el-table :data="tableData" 
    stripe
    table-layout="auto"
    :default-sort="{ prop: 'name', order: 'descending' }"
    style="width: 100%;height: 100%;">
      <el-table-column prop="date" label="订购日期" width="150" />  
      <el-table-column prop="shopName" label="商品名称" width="150" />
      <el-table-column prop="orderNum" label="订单编号" width="150" />
      <el-table-column prop="shopNum" label="商品数量" width="150" />
      <el-table-column prop="price" label="商品价格" width="150" />
      <el-table-column prop="sumPrice" label="订单总额" width="150" />
      <el-table-column prop="payment" label="支付方式" width="150" />
      <el-table-column prop="address" label="送货地址" width="150" />
      <el-table-column prop="remarks" label="备注" width="150"/>

      <el-table-column fixed="right" label="操作" width="135">
        <template #default="scope">
          <el-button 
          size="small"  
          @click="revise(scope.$index, scope.row)"
          >修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="Delete(scope.$index, scope.row)"
            >删除
            </el-button>
        </template>
      </el-table-column>
      
    </el-table>
    <el-pagination style="margin: 20px 0;" hide-on-single-page small background layout="prev, pager, next" :total="100" />
  </div>
 <!-- 弹出对话框 -->

  <el-dialog v-model="centerDialogVisible" title="修改商品" width="50%" center>
    <span>
       <!-- 弹出对话框内容表单 -->

    </span>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>


</template>

<script setup>
import { ref,reactive ,defineComponent,getCurrentInstance} from 'vue'

let tableData = [  
 
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

let data2 = reactive({
  tableData,
  formData: {},
})



let centerDialogVisible = ref(false)
// 修改函数
function revise(num) {
  console.log(num);
  centerDialogVisible.value = true
}

// 删除函数
function Delete(num) {
  console.log(num);
  // console.log("删除");
  data2.tableData.splice(num,1)
  // console.log(tableData);
}

 

</script>

<style scoped>
.outside {
  display: flex;
  width: 100%;
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
}
</style>