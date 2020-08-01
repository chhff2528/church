<template>
  <el-dialog :title="!form.id ?'新建' :'编辑' " :visible.sync="visible">
      <el-form ref="form" :model="form" :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="Name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="CategoryTitle" prop="CategoryTitle">
          <el-input v-model="form.CategoryTitle" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">保存</el-button>
        </el-form-item>
      </el-form>
  </el-dialog>
</template>


<script>
  import {
    getData
  } from "@api/public";
  export default {
    name: "UserForm",
    data() {
      return {
        visible:false,
        form: {
          Name: "",
          CategoryTitle: ""
        },
        rules: {
          Name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 10,
              message: '长度在 1 到 10 个字符',
              trigger: 'blur'
            }
          ],
          address: [{
            required: true,
            CategoryTitle: '请输入地址',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      init(row){
        this.form.id=row.ID;
        this.visible=true;
        this.$nextTick(()=>{
          this.form.name=row.Name;
          this.form.CategoryTitle=row.CategoryTitle;
        })
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 校验通过～formParams为填写的信息;
            let formParams = this.form;
            let params = {
              "jsonorder": {
                "token": "3456dfklj3443ldsfd435",
                "objectName": "dictionary",
                "functionName": "insert",
                "data": formParams,

              }
            };
            //getArticleBanner这是接口地址，参数params
            getData(params)
              .then(res => {
                if (res.status == 200) {
                  this.$message({
                    message: '恭喜你～，创建成功',
                    type: 'success'
                  });
                } else {

                }
              })
              .catch(function (error) {
                this.$message.error('Oops~，网络错误了，请刷新重试～');
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
</style>