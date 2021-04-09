<template>
    <app-page back title="Помощь">
        <question-item 
            v-for="question in questions" 
            :key="question.title"
            :question="question"
        >
        </question-item>
    </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
import QuestionItem from '@/components/question/QuestionItem.vue'

export default {
    setup() {
        const questions = [
            {
                title: 'Как работает авторизация?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptate sapiente non blanditiis corporis nemo.' 
            },
            {
                title: 'Что есть в данной системе?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta libero blanditiis recusandae consequuntur illo, veritatis vero aspernatur obcaecati excepturi?'
            },
            {
                title: 'Как пользоваться заявками?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae voluptate sapiente non blanditiis corporis nemo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta libero blanditiis recusandae consequuntur illo, veritatis vero aspernatur obcaecati excepturi?'
            }
        ]

        return {
            questions
        }
    },
    components: {
        AppPage,
        QuestionItem
    }
}
</script>
