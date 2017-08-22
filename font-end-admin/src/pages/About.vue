<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="公司简介" prop="cmpDesc">
      <el-input type="textarea" v-model="ruleForm.cmpDesc"></el-input>
    </el-form-item>
    <el-form-item label="团队介绍" prop="teamDesc">
      <el-input type="textarea" v-model="ruleForm.teamDesc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  let qs = require('qs')
  export default {
    data () {
      return {
        ruleForm: {
          cmpDesc: '',
          teamDesc: ''
        },
        user: {
          name: 'han'
        },
        rules: {
          cmpDesc: [{
            required: true,
            message: '请填写公司简介',
            trigger: 'blur'
          }],
          teamDesc: [{
            required: true,
            message: '请填写团队介绍',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submitForm (formName) {
        // console.log(JSON.stringify(this.ruleForm))
        let formData = this.ruleForm
        // console.log('data:' + formData)
        let Vue = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios.post('about', qs.stringify(formData)).then(function (res) {
              Vue.$message({
                message: '修改成功！',
                type: 'success'
              })
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style scoped>
  
</style>
