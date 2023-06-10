import { defineStore } from "pinia";
import { ref } from "vue";
export const useMainStore = defineStore('mian', () => {
    let nav = ref([])
    const setNav = (data) => {
        nav = data
    }
    return { nav, setNav }
})