import * as yup from "yup";

const validationSchema = yup.object().shape({
    email:yup.string().email().required(),
    password: yup.string().required()
}) 

export default validationSchema;