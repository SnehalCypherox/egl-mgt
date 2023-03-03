import React, { useState } from 'react'
import Divider from "@mui/material/Divider";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const UpdatePassword = () => {
    const [currentPwd, setCurrentPwd] = useState();
    const [pwd, setPwd] = useState();

    const navigate = useNavigate();
    return (
        <div className="profile-edit">
            <Typography sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>Update Password</Typography>
            <Divider sx={{ pt: '20px' }} />

            <div className='edit-form'>
                <Typography variant="div" component='div' sx={{ color: '#00000080', fontSize: '14px', lineHeight: '21px', fontWeight: '600', mt: '40px', ml: '30px' }}>
                    Current Password
                </Typography>
                <OutlinedInput
                    fullWidth
                    sx={{
                        borderRadius: '10px',
                        fontSize: '12px',
                        my: '10px',
                        ml: '30px',
                        lineHeight: '18px',
                        color: '#000',
                        maxWidth: '640px',
                    }}
                    placeholder="Enter your Current Password"
                    value={currentPwd}
                    onChange={(e) => setCurrentPwd(e.target.value)}
                />
                <Typography variant="div" component='div' sx={{ color: '#00000080', fontSize: '14px', lineHeight: '21px', fontWeight: '600', mt: '20px', ml: '30px' }}>
                    Enter Email Address
                </Typography>
                <OutlinedInput
                    type='password'
                    fullWidth
                    sx={{
                        borderRadius: '10px',
                        fontSize: '12px',
                        my: '10px',
                        ml: '30px',
                        lineHeight: '18px',
                        color: '#000',
                        maxWidth: '640px'
                    }}
                    placeholder="Enter your New Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <Typography variant="div" component='div' sx={{ color: '#00000080', fontSize: '14px', lineHeight: '21px', fontWeight: '600', mt: '20px', ml: '30px' }}>
                    Repeat New Password
                </Typography>
                <OutlinedInput
                    type='password'
                    fullWidth
                    sx={{
                        borderRadius: '10px',
                        fontSize: '12px',
                        my: '10px',
                        ml: '30px',
                        lineHeight: '18px',
                        color: '#000',
                        maxWidth: '640px'
                    }}
                    placeholder="Enter your Repear New Password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
                <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
                    
                    <Button sx={{
                        borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#000000', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                        '&:hover': { backgroundColor: '#0071BC1a' }
                    }} onClick={() => navigate('/setting')}>Cancel</Button>
                    <Button variant="contained" sx={{ borderRadius: '10px', m: '5px', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>
                        Save
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default UpdatePassword