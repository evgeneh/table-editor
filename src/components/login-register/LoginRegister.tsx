import * as React from 'react';

import {Formik, Form, withFormik} from 'formik';

import styled from 'styled-components'

import {emailValidate, isRequired, isPasswordConfirm} from '../instruments/formikValidators'
import Button from "../instruments/Button/Button";



const LoginInput = styled.input`
    padding: 5px 12px;
    border: none;
    border-bottom: 1px solid gray;
    margin-bottom: 5px;    
`;

const LabelError = styled.label`
     color: red;
     font-size: 10px;
     position: relative;
     z-index: 10;
`;

const LoginRegisterButtons = styled.div`
    padding-top: 20px;
`;

interface Values {
    password: string;
    email: string;
    passwordConfirm?: string
}

type LoginRegisterType = {
    type: "login" | "register"
    handleSubmit: (login: string, myId: number) => void
}


const LoginRegister: React.FC<LoginRegisterType> = ({type, handleSubmit}) => {

    const InitialValues: Values = {email: '', password: '', passwordConfirm: ''}
    //
    return (
        <Formik
            initialValues={InitialValues}

            validate={values => {
                    const errors = {email: emailValidate(values.email),
                    password: isRequired(values.password),
                    passwordConfirm: isPasswordConfirm(values.password, values.passwordConfirm)
                    }
                    let noErrors = true;

                    (Object.keys(errors) as Array<keyof typeof errors>).forEach((key) => {
                        if (errors[key])
                            noErrors = false
                    } )
                if (noErrors) return {}
                 else  return errors
            }}

            onSubmit={(values, actions) => {
                handleSubmit(values.email, 1)
            }}

            render={({errors, touched, values, handleChange, handleBlur}) => (
                <Form>
                    {(errors.email && touched.email) && <LabelError htmlFor="email">{errors.email}</LabelError>}
                    <br/>
                    <LoginInput id="email" name="email" placeholder="Email" type="text"
                                value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    {(errors.password && touched.password) &&
                    <LabelError htmlFor="password">{errors.password}</LabelError>}
                    <br/>
                    <LoginInput id="password" name="password" placeholder="password" type="password"
                                value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    {
                        (type === "register") && <>
                            {(errors.passwordConfirm ) &&
                            <LabelError htmlFor="passwordConfirm">{errors.passwordConfirm}</LabelError>} <br/>
                            <LoginInput id="passwordConfirm" name="passwordConfirm" placeholder="confirm password" type="password"
                                        value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} />
                            <br/>
                        </>
                    }

                    <LoginRegisterButtons>
                        < Button isSelected={(type === "login")} isDark={true}
                                 type={(type === "login") ? "submit" : "button"}> Login </Button>
                        <Button isSelected={(type === "register")} isDark={true}
                                type={'submit'}>Register</Button>
                     </LoginRegisterButtons>

                </Form>
            )}
        />
    )
}

// type={(type === "register") ? "submit" : "button"}>Register</Button>
export default LoginRegister