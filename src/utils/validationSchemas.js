import * as yup from 'yup';

const validationSchema = yup.object({
    body: yup.string().required(),
})

export default validationSchema;