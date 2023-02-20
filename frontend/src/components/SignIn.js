import React from 'react'
import Form from './Form'
import LoginImage from '../Assets/Login.png'

const SignIn = () => {
    return (
        <>
            <Form
                formImage={LoginImage}
                isField={false}
                isLogin={true}
                buttonTxt='Login'
                resetPwd='false'
            />
        </>
    )
}

export default SignIn