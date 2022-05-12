<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="请输入学号">
            <el-input v-model="formInline.user" placeholder="学号" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formInline.user)">查询</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="学号" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="hoppy" label="爱好" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default>
              <el-button type="text" size="small" @click="handleClick">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
const formInline = reactive({
  user: "",
});
const tableData = ref();

axios.get("http://localhost:8080/student/getById")
  .then((response) => {
    tableData.value = response.data;
    console.log(response.data);
    console.log(tableData);
    ElMessage({
      message: "Congrats, this is a success message.",
      type: "success",
    });
  })
  .catch(function (error) {
    ElMessage.error("获取数据失败");
  });
const onSubmit = (parm) => {
  console.log("submit!");
  console.log(parm);
  axios.get("http://localhost:8080/student/findById/"+parm).then((response)=>{
    tableData.value=response.data;
    console.log(tableData)
    ElMessage({
    message: "查询成功！",
    type: "success",
  })
  }).catch(function (error) {
    ElMessage.error("获取数据失败");
  });
  
};
</script>