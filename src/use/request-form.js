import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(func) {
    const {handleSubmit, isSubmitting} = useForm({
        initialValues: {
            status: 'queue'
        }
    });

    const {value: fio, errorMessage: fioError, handleBlur: fioBlur} = useField(
        'fio',
        yup
            .string()
            .trim()
            .required('Введите ФИО клиента')
    )
    const {value: phone, errorMessage: phoneError, handleBlur: phoneBlur} = useField(
        'phone',
        yup
            .string()
			.matches(/^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm, 
				{ message: 'Введите корректный номер телефона' }
			).trim()
            .required('Телефон не может быть пустым')
    )
    const {value: amount, errorMessage: amountError, handleBlur: amountBlur} = useField(
        'amount',
        yup
            .number()
			.typeError('Введите сумму в числовом формате')
            .required('Сумма не может быть пустой')
            .min(0, 'Сумма не может быть меньше 0')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(func);

    return {
        fio,
        phone,
        amount,
        fioError,
        phoneError,
        amountError,
        fioBlur,
        phoneBlur,
        amountBlur,
        status,
        isSubmitting,
        onSubmit
    }
    
}