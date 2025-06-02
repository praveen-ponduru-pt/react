import React from "react";
import { Formik } from 'formik';

const RegistrationForm = () => {

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
    }

    const todayDate = new Date().toISOString().split('T')[0];
    return (
        <>
            <div>
                <h1>Registration Form</h1>
                <Formik
                    initialValues={{ firstName: 'Praveen', lastName: 'Kumar', email: '', dob: todayDate, age: calculateAge(todayDate), password: '', cnfPassword: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.firstName) errors.firstName = 'First Name required';
                        if (!values.lastName) errors.lastName = 'Last Name required';
                        if (values.email.match('[^a-z]@[a-z].[a-z]')?.length) errors.email = 'Enter valid email';
                        if (values.password.length < 8) errors.password = 'Password should be at least 8 characters'
                        if (values.password != values.cnfPassword) errors.cnfPassword = 'Password and Confirm Password should be same'
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}>
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <label>First Name</label>
                            <input id="firstName" type="text" value={values.firstName} onChange={handleChange} />
                            {errors.firstName}
                            <label>Last Name</label>
                            <input id="lastName" type="text" value={values.lastName} onChange={handleChange} />
                            <label>Email</label>
                            <input id="email" type="text" value={values.email} onChange={handleChange}></input>
                            <div>{errors.email}</div>
                            <label>Date of Birth</label>
                            <input id="dob" type="date" onChange={handleChange}></input>
                            <label>Age</label>
                            <input id="age" type="text" value={values.age} onChange={handleChange}></input>
                            <label>Password</label>
                            <input id="password" type="password" onChange={handleChange} />
                            <div>{errors.password}</div>
                            <label>Confirm Password</label>
                            <input id="cnfPassword" type="password" onChange={handleChange} />
                            <div>{errors.cnfPassword}</div>
                            <button type="submit">Submit</button>
                        </form>
                    )}

                </Formik>
            </div>
        </>
    )
}

export default RegistrationForm;