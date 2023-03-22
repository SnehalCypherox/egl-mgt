import { Grid, Box, FormLabel, FormGroup, FormControl, Input, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import Logo from '../Assets/Logo.png'
import vector from '../Assets/vector.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLoginFormValidator } from "../hook/useLoginFormValidator";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Alert } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Form = ({ formImage, isField, isLogin, buttonTxt, resetPwd }) => {

    const [form, setForm] = useState({ email: '', password: '', fname: '', lname: '' })
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const { errors, validateForm, onBlurField } = useLoginFormValidator(form);
    const navigate = useNavigate();

    const onUpdateField = e => {
        const field = e.target.name;
        const nextFormState = {
            ...form,
            [field]: e.target.value,
        };
        setForm(nextFormState);
        if (errors[field])
            validateForm({
                form: nextFormState,
                errors,
                field,
            });
    };

    const onSubmitForm = async (e) => {
        e.preventDefault();
        

        if (errors.email.error && errors.password.error && errors.fname.error && errors.lname.error) {
            axios.post('http://localhost:4000/insert', {
                
            })
            // navigate("/signin")
        }
        else {
            console.log('fill first all fields');
        }

    };


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container className='grid-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6} className='grid-1'>
                        <form onSubmit={onSubmitForm}>
                            <Box className="login"
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        m: 'auto',
                                    },
                                }}
                            >
                                <FormGroup className='form-container'>
                                    <Link to='/'>
                                        <div className='logo'>
                                            <img src={Logo} alt="" />
                                        </div>
                                    </Link>
                                    <FormControl variant="outlined">
                                        <FormLabel className="formLabel">Email</FormLabel>
                                        <Input type="email" required name="email" placeholder='Enter your Email Address' className='input-field' value={form.email.trim()} onChange={onUpdateField} onBlur={onBlurField} />
                                        {!errors.email.error ? (
                                            <Alert severity="error">{errors.email.message}</Alert>
                                        ) : null}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel className="formLabel">Password</FormLabel>
                                        <Input type={showPassword ? 'text' : 'password'} required name="password" placeholder='Enter your Password' className='input-field' value={form.password} onChange={onUpdateField} onBlur={onBlurField}
                                            endAdornment={
                                                <InputAdornment position="end" className='pwdshow'>
                                                    <IconButton aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}>
                                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                        {!errors.password.error ? (
                                            <Alert severity="error">{errors.password.message}</Alert>
                                        ) : null}
                                    </FormControl>
                                    {
                                        isField &&
                                        (
                                            <>
                                                <FormControl>
                                                    <FormLabel className="formLabel">First Name</FormLabel>
                                                    <Input type="text" name="fname" required placeholder='Please enter your First Name' className='input-field' value={form.fname} onChange={onUpdateField} onBlur={onBlurField} />
                                                    {!errors.fname.error ? (
                                                        <Alert severity="error">{errors.fname.message}</Alert>
                                                    ) : null}
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel className="formLabel">Last Name</FormLabel>
                                                    <Input type="text" name="lname" required placeholder='Please enter your Last Name' className='input-field' value={form.lname} onChange={onUpdateField} onBlur={onBlurField} />
                                                    {!errors.lname.error ? (
                                                        <Alert severity="error">{errors.lname.message}</Alert>
                                                    ) : null}
                                                </FormControl>
                                                <FormControl className='terms'>
                                                    <input type='checkbox' required />
                                                    <span>I agree to the <Link to='/'>Terms Of Services</Link></span>
                                                </FormControl>
                                            </>
                                        )
                                    }
                                    <FormControl className='btn'>
                                        <Button variant="contained" style={{ zIndex: '99999' }} onSubmit={onSubmitForm} type="submit">{buttonTxt}</Button>
                                    </FormControl>
                                    {
                                        resetPwd && (
                                            <Typography variant='h3' component="p" className='reset-pwd'>Reset Password</Typography>
                                        )
                                    }
                                </FormGroup>
                            </Box>
                        </form>

                        <div className='quick-login'>
                            <img src={vector} alt="" className='vector' />
                            {
                                isLogin ?
                                    <h5>New to RentCheck ? <Link to='/sign-up'> Sign up</Link></h5>
                                    :
                                    <h5>Already have an account ? <Link to='/signin'>Log in</Link></h5>
                            }
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <img src={formImage} alt="" className='form-image' />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Form