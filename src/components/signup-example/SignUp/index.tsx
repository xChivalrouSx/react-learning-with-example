import { useFormik } from 'formik';

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
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" value={formik.values.email} onChange={formik.handleChange}/>

            <br /><br />

            <label htmlFor="password">Password</label>
            <input name="password" value={formik.values.password} onChange={formik.handleChange}/>

            <br /><br />

            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input name="passwordConfirm" value={formik.values.passwordConfirm} onChange={formik.handleChange}/>

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp
