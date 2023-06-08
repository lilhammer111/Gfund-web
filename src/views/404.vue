<script setup>

</script>

<template>
    <el-result icon="error" title="404 提示" sub-title="您找的页面走丢了～">
        <template #extra>
            <el-button type="primary" @click="$router.go(-1)">返回</el-button>
        </template>
    </el-result>
</template>

<style scoped></style>