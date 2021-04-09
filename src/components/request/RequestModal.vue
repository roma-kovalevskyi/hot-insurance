<template>
    <form @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: fioError}]">
            <label for="fio">ФИО</label>
            <input type="text" id="fio" v-model="fio" @blur="fioBlur">
            <small v-if="fioError">{{ fioError }}</small>
        </div>

        <div :class="['form-control', {invalid: phoneError}]">
            <label for="phone">Телефон</label>
            <input type="text" id="phone" v-model="phone" @blur="phoneBlur">
            <small v-if="phoneError">{{ phoneError }}</small>
        </div>

        <div :class="['form-control', {invalid: amountError}]">
            <label for="amount">Сумма</label>
            <input type="text" id="amount" v-model="amount" @blur="amountBlur">
            <small v-if="amountError">{{ amountError }}</small>
        </div>

        <div class="form-control">
            <label for="status">Статус</label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="queue">В очереди</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>

        <button class="btn primary" :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script>
import {useRequestForm} from '@/use/request-form'
import { useStore } from 'vuex'

export default {
    emits: ['created'],
    setup(_, {emit}) {
        const store = useStore();

        const submit = async values => {
            await store.dispatch('request/create', values);
            emit('created');
        }

        return {
            ...useRequestForm(submit)
        }
    }
}
</script>

<style>

</style>