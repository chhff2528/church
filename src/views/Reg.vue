<template>
  <div class="form-page">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动地址" prop="address">
        <el-input v-model="form.address" clearable></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="郑州" value="zhengzhou"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" prop="data">
        <el-date-picker v-model="form.data" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="form.desc" placeholder="填写描述"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  import { getArticleBanner } from "@api/public";
  export default {
    name: "Reg",
    data() {
      return {
        form: {
          name: "",
          address: "",
          region: "",
          data: "",
          desc: ""
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          address: [{
            required: true,
            message: '请输入地址',
            trigger: 'blur'
          }],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          data: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //校验通过
            console.log(JSON.stringify(this.form));
            //   //接口
            let params = JSON.stringify(this.form);
            //getArticleBanner这是接口地址，参数params
            getArticleBanner(params)
              .then(res => {
                console.log(res);
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  };
</script>

<style scoped>
  .form-page {
    background: #fff;
    max-width: 10.8rem;
    margin: 1.2rem auto;
    padding: 0.2rem;
  }
</style>