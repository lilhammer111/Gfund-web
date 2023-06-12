<script setup>
import Login from './Login.vue';
import LoginHeader from './LoginHeader.vue'
import LoginFooter from './LoginFooter.vue'
</script>

<template>
    <div class="page-container">
        <LoginHeader />
        <div class="bg">
            <Login />
        </div>
        <LoginFooter />
    </div>
</template>
  

<style scoped>
.page-container {
    /* height: 91.8vh; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.bg {
    background: rgba(167, 167, 15, 0.514) url(../../assets/images/image-3046593_1280.png) repeat-x;
    background-size: auto;
    height: 600px;
}
</style>