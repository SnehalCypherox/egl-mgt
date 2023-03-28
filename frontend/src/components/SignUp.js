
import { Grid, Box, FormLabel, FormGroup, FormControl, Input, Button, Typography, InputAdornment, IconButton, Alert } from '@mui/material'
import Logo from '../Assets/Logo.png'
import vector from '../Assets/vector.png'
import formImage from '../Assets/SignUp.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import signup from '../Assets/SignUp.png'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleInsert = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:4000/register', {
                email,
                password,
                fName,
                lName
            });
            console.log("responce data = " + response.data);
        } catch (error) {
            console.error("responce data error =" + error);
        }
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container className='grid-container' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} className='grid-1'>
                        <form onSubmit={handleInsert}>
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
                                        <Input type={showPassword ? 'text' : 'password'} required name="password" placeholder='Enter your Password' className='input-field' value={password} onChange={(event) => setPassword(event.target.value)}
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
                                    <FormControl>
                                        <FormLabel className="formLabel">First Name</FormLabel>
                                        <Input type="text" name="fname" required placeholder='Please enter your First Name' className='input-field' value={fName} onChange={(event) => setFName(event.target.value)} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel className="formLabel">Last Name</FormLabel>
                                        <Input type="text" name="lname" required placeholder='Please enter your Last Name' className='input-field' value={lName} onChange={(event) => setLName(event.target.value)} />
                                    </FormControl>
                                    <FormControl className='terms'>
                                        <input type='checkbox' required />
                                        <span>I agree to the <Link to='/'>Terms Of Services</Link></span>
                                    </FormControl>
                                    <FormControl className='btn'>
                                        <Button variant="contained" style={{ zIndex: '99999' }} type="submit">Get started, it’s free</Button>
                                    </FormControl>
                                </FormGroup>
                            </Box>
                        </form>

                        <div className='quick-login'>
                            <img src={vector} alt="" className='vector' />
                            <h5>Already have an account ? <Link to='/signin'>Log in</Link></h5>
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

export default SignUp