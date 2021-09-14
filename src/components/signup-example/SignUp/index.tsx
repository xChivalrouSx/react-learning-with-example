import { useFormik } from 'formik';
import validationSchema from './validation';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        },
        onSubmit: () => {
            console.log(formik.values);
            alert("Works...");
        },
        validationSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />

            {formik.errors.email && formik.touched.email &&
                <span style={{color: "red"}}> .!. {formik.errors.email}</span>
            }

            <br /><br />

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                value={formik.values.password} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />

            {formik.errors.password && formik.touched.password &&
                <span style={{color: "red"}}> .!. {formik.errors.password}</span>}
 
            <br /><br />

            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input 
                type="password" 
                name="passwordConfirm" 
                value={formik.values.passwordConfirm} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur} />

            {formik.errors.passwordConfirm && formik.touched.passwordConfirm &&
                <span style={{color: "red"}}> .!. {formik.errors.passwordConfirm}</span>}

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp
