<template>
    <app-loader v-if="loading"></app-loader>
    <app-page v-else-if="request" title="Заявка" back>
        <p><strong>Имя клиента</strong>: {{ request.fio }}</p>
        <p><strong>Телефон</strong>: {{ request.phone }}</p>
        <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
        <p><strong>Статус</strong>: <app-status :type="request.status"></app-status></p>

        <div class="form-control">
            <label for="status">Изменить статус</label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="queue">В очереди</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>

        <button v-if="hasChanges" class="btn" @click="update">Обновить</button>
        <button class="btn danger" @click="remove">Удалить</button>
    </app-page>
    <h3 v-else class="text-center text-white">
        Заявки с ID = {{ $route.params.id }} нет
    </h3>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import { useStore } from 'vuex'
import {currency} from '@/utils/currency'
import AppPage from '../components/ui/AppPage.vue'
import AppLoader from '../components/ui/AppLoader.vue'
import AppStatus from '../components/ui/AppStatus.vue'

export default {
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();

        const status = ref();
        const request = ref({});
        const loading = ref(true);

        onMounted(async() => {
            request.value = await store.dispatch('request/loadById', route.params.id);
            status.value = request.value?.status;
            loading.value = false;
        });

        const hasChanges = computed(() => request.value.status !== status.value);

        const remove = async () => {
            await store.dispatch('request/remove', route.params.id);
            router.push('/');
        }

        const update = async () => {
            const data = {...request.value, status: status.value, id: route.params.id};
            console.log(data);
            await store.dispatch('request/update', data);
            request.value.status = status.value;
        }

        return {
            request,
            loading,
            currency,
            status,
            hasChanges,
            remove,
            update
        }
    },
    components: {
        AppPage,
        AppLoader,
        AppStatus
    }
}
</script>

<style>

</style>