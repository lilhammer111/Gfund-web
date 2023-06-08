<script setup>
import AsideNav from './layout/aside_nav/AsideNav.vue';
import HeaderNav from './layout/header_nav/HeaderNav.vue';
import MainContent from './layout/main_content/MainContent.vue';

</script>

<template>
    <div class="layout-container">
        <div class="aside-nav">
            <AsideNav></AsideNav>
        </div>
        <div>
            <HeaderNav></HeaderNav>
            <MainContent></MainContent>
        </div>
    </div>
</template>

<style scoped>
.layout-container {
    display: flex;
    min-height: 100vh;
    /* justify-content: stretch; */
}
</style>