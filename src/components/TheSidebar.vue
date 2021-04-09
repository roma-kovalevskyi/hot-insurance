<template>
    <div class="sidebar" v-if="sidebar">
        <span class="sidebar-close" @click="close">&times;</span>
        <div class="sidebar-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam corrupti nobis, et quod illum non officia minus nemo. Blanditiis eveniet natus, illum accusamus odit totam alias, minima possimus explicabo repellat nisi enim iste? Tempora assumenda doloribus, magni enim distinctio!</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore();

        const sidebar = computed(() => store.state.sidebar);

        return {
            sidebar,
            close: () => store.commit('closeSidebar')
        }
    }
}
</script>

<style>

</style>