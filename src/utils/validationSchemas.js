import * as yup from 'yup';

const validationSchema = yup.object({
    body: yup.string().max(100, "Text must not exceed length in 100 characters").required("Text must be at least 1 character"),
})

export default validationSchema;