<script setup>

import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

const isShow = ref(false)

</script>

<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
        <el-menu-item index="0">LOGO</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="1" v-if="isShow">
            <template #title>权限管理</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2" v-else>
            <router-link to="/login">登陆</router-link>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.flex-grow {
    flex-grow: 1;
}
</style>