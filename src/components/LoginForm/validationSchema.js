import * as yup from "yup";

const validationSchema = yup.object().shape({
    email:yup.string().email().required('Demo Email: admin@healthm.com'),
    password: yup.string().required("Demo Password: admin")
}) 

export default validationSchema;