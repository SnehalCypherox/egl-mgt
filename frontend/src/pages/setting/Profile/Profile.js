import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../../Assets/profile.png'

const Profile = () => {
    return (
        <>
            <Typography variant='div' component='div' sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <img src={profile} alt="profile image" style={{ width: '100%', maxWidth: '267px' }} />
                <div className='user-info'>
                    <Typography variant='h5' component='h5' sx={{ color: '#000000', fontWeight: '600', fontSize: '22px', lineHeight: '33px' }}>Carlo S</Typography>
                    <Typography variant='span' sx={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#808080' }}>Property Manager</Typography>
                    <Typography variant='div' component='div' sx={{ fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#808080', pt: '25px' }}>
                        Email : <Link to='mailto:iamwebdevcarlo@gmail.com' className='user-email'>iamwebdevcarlo@gmail.com</Link>
                    </Typography>
                </div>
            </Typography>
            <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
                <Link to='/update-password'>
                    <Button sx={{
                        borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#000000', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                        '&:hover': { backgroundColor: '#0071BC1a' }
                    }}>Update Password</Button>
                </Link>
                <Link to='/edit-profile'>
                    <Button variant="contained" sx={{ borderRadius: '10px', m: '5px', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>Edit Profile</Button>
                </Link>
            </div>
        </>
    )
}

export default Profile