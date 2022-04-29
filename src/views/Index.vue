<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="Approved by">
            <el-input v-model="formInline.user" placeholder="Approved by" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit(formInline.user)">Query</el-button>
          </el-form-item>
        </el-form>
      </el-header>
      <el-main>Main{{formInline.user}}</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
})

const onSubmit = (parm) => {
  console.log('submit!')
  console.log(parm)
}
</script>