<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
    phoneNumber: '',
    password: '',
    mac: ''
})

const rules = reactive({
    phoneNumber: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        // { min: 3, max: 5, message: '请输入正确的手机号', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        // { min: 8, max: 16, message: '密码错误', trigger: 'blur' },
    ],
    mac: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        // { min: 3, max: 5, message: '请输入正确的手机号', trigger: 'blur' },
    ],
})


const submitForm = (formEl) => {
    formEl.validate(valid => {
        if (valid) {
            //跳转index
            router.push('/')
        } else {
            // 校验未通过
            alert('校验未通过')
        }
    })
}
</script>

<template>
    <el-row class="login-container" justify="center">
        <h2>账号登录</h2>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm">
            <el-form-item prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber" placeholder="手机号" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="密码" />
            </el-form-item>
            <el-form-item prop="mac">
                <el-row :gutter="6">
                    <el-col :span="15">
                        <el-input v-model="ruleForm.mac" placeholder="验证码" />
                    </el-col>
                    <el-col :span="9">
                        <el-button plain>发送验证码</el-button>
                    </el-col>
                </el-row>

            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="info" @click="submitForm(ruleFormRef)">
                    确定
                </el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template> 

<style scoped>
.login-container {
    box-sizing: border-box;
    width: 360px;
    /* height: 300px; */
    margin: 20vh auto 30vh auto;
    border-radius: 10px;
    background-color: #f5f1f167;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .5);
    padding: 20px 40px;
}

.login-btn {
    display: inline-block;
    width: 280px;
}
</style>