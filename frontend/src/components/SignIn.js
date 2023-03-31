import React, { useState } from 'react'
import LoginImage from '../Assets/Login.png'
import axios from 'axios';
import { Grid, Box, FormLabel, FormGroup, FormControl, Input, Button, Typography, InputAdornment, IconButton } from '@mui/material'
import Logo from '../Assets/Logo.png'
import vector from '../Assets/vector.png'
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/login", {
                email: email,
                password: password,
            });
            toast.success('Login sucessfully')
            console.log("login responce data =" + response);
        } catch (error) {
            toast.error('Invalid email or password');
            console.log("responce data error = " + error.message);
        }
    };
    return (
        <>
            <ToastContainer />
            <Box sx={{ width: '100%' }}>
                <Grid container className='grid-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6} className='grid-1'>
                        <form onSubmit={handleSubmit}>
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
                                        <Input type="email" required name="email" placeholder='Enter your Email Address' className='input-field' value={email} onChange={(event) => setEmail(event.target.value)} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel className="formLabel">Password</FormLabel>
                                        <Input type={showPassword ? 'text' : 'password'} required name="password" placeholder='Enter your Password' className='input-field'
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            endAdornment={
                                                <InputAdornment position="end" className='pwdshow'>
                                                    <IconButton aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}>
                                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    <FormControl className='btn'>
                                        <Button variant="contained" style={{ zIndex: '99999' }} type="submit">Login</Button>
                                    </FormControl>
                                    <Typography variant='h3' component="p" className='reset-pwd'>Reset Password</Typography>
                                </FormGroup>
                            </Box>
                        </form>

                        <div className='quick-login'>
                            <img src={vector} alt="" className='vector' />
                            <h5>New to RentCheck ? <Link to='/sign-up'> Sign up</Link></h5>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <img src={LoginImage} alt="" className='form-image' />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default SignIn