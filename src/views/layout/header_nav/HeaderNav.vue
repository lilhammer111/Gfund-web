<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { deleteToken } from '../../../utils/auth';
const router = useRouter()
const logout = () => {
    router.push('/login')
    //清除token
    deleteToken()
    //清除store

}


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}



</script>

<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="1">
            <template #title>账户</template>
            <el-menu-item index="2-1">权限管理</el-menu-item>
            <el-menu-item index="2-2" @click="logout">退出登录</el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>