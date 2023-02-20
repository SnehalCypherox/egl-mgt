import React from 'react'
import Form from './Form'
import signup from '../Assets/SignUp.png'

const SignUp = () => {
    return (
        <>
            <Form
                formImage={signup}
                isField={true}
                isLogin={false}
                buttonTxt='Get started, it’s free'
                resetPwd={false}
            />
        </>
    )
}

export default SignUp