<template>
    <div class="user-wrap">
        <UserForm v-show="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDate"></UserForm>
        <el-table :data="tableData" stripe height="500" style="width: 100%">
            <el-table-column prop="SourceFilesCreateTime" label="日期" width="180" align="center">
            </el-table-column>
            <el-table-column prop="Name" label="名称">
            </el-table-column>
            <el-table-column prop="CategoryTitle" label="CategoryTitle">
            </el-table-column>
            <el-table-column align="right">
                <template slot="header">
                    <el-button size="mini" type="primary" @click="addOrUpdateHandle(0)">新建</el-button>
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="addOrUpdateHandle(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>


<script>
    import UserForm from "@components/UserForm";
    import {
        getData
    } from "@api/public";
    export default {
        components: {
            UserForm
        },
        data() {
            return {
                tableData: [],
                addOrUpdateVisible:false
            }
        },
        mounted: function () {
            let that = this;
            let params = {
                jsonorder: {
                    token: "3456dfklj3443ldsfd435",
                    objectName: "video",
                    functionName: "getdata"
                }
            };
            getData(params)
                .then(res => {
                    that.$set(that, "tableData", res.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            addOrUpdateHandle(row) {
                this.addOrUpdateVisible =true;
                this.$refs.addOrUpdate.init(row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    };
</script>

<style scoped>
    .user-wrap {
        max-width: 800px;
        margin: 2rem auto;
    }
</style>