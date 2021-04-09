<template>
    <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
    <table v-else class="table">
        <thead>
            <tr>
                <th>№</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(request, index) in requests" :key="request.id">
                <td>{{ index + 1 }}</td>
                <td>{{ request.fio }}</td>
                <td>{{ request.phone }}</td>
                <td>{{ currency(request.amount) }}</td>
                <td><app-status :type="request.status"></app-status></td>
                <td>
                    <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
                        <button class="btn" @click="navigate">Открыть</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import {currency} from '@/utils/currency'
import AppStatus from '@/components/ui/AppStatus.vue';

export default {
    props: ['requests'],
    setup() {
        return {
            currency
        }
    },
    components: {
        AppStatus
    }
}
</script>

<style>

</style>