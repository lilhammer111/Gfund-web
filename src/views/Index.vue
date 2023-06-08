<script setup>
import AsideNav from './layout/aside_nav/AsideNav.vue';
import HeaderNav from './layout/header_nav/HeaderNav.vue';
import MainContent from './layout/main_content/MainContent.vue';

</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <AsideNav></AsideNav>
            </el-aside>
            <el-container>
                <el-header>
                    <HeaderNav></HeaderNav>
                </el-header>
                <el-main>
                    <MainContent></MainContent>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped></style>