<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

import { ref, onMounted } from 'vue';
import { getNav } from '../../../api/api'
// const handleOpen = (key, keyPath) => {
//     console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//     console.log(key, keyPath)
// }


let items = ref([])


onMounted(async () => {
    let res = await getNav()
    items.value = res.data.res
})

</script>

<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical" default-active="2"
        text-color="#fff" @open="handleOpen" @close="handleClose" router>
        <el-menu-item :index="item.path" v-for="item in items" :key="item.path">
            <el-icon><icon-menu></icon-menu></el-icon>
            <span>首页{{ item.title }}</span>
        </el-menu-item>
    </el-menu>
</template>

<style scoped>
.el-menu-vertical {
    min-height: 100vh;
}
</style>