<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formInline.user)"
              >Query</el-button
            >
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="id" label="学号" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="age" label="年龄" />
          <el-table-column prop="hoppy" label="爱好" />
        </el-table>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup>
import { reactive,ref } from "vue";
import axios from "axios";
const formInline = reactive({
  user: "",
});
const tableData=ref();
axios.get('http://localhost:8080/student/getById').then((response)=>{
    tableData.value=response.data
    console.log(response.data)
    console.log(tableData)
  })
const onSubmit = (parm) => {
  
  console.log("submit!");
  console.log(parm);
  
};
</script>