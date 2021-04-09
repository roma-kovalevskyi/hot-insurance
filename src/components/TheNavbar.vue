<template>
    <nav class="navbar">
        <h3>Hot Insurance</h3>
        <ul class="navbar-menu">
            <li>
                <router-link to="/">
                    Заявки
                </router-link>
            </li>
            <li>
                <router-link to="/help">
                    Помощь
                </router-link>
            </li>
            <li>
                <a href="#" @click.prevent="openSidebar">Сообщения</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Выход</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        return {
            openSidebar: () => store.commit('openSidebar'),
            logout: () => {
                store.commit('auth/logout');
                router.push('/auth');
            }
        }
    }
}
</script>

<style>

</style>