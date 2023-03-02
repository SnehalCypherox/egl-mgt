import React, { useState } from 'react'
import Divider from "@mui/material/Divider";
import { Button, OutlinedInput, Typography } from "@mui/material";


const EditProfile = () => {
  const Username = 'Carlo S';
  const email = 'iamwebdevcarlo@gmail.com';
  const [userName, setUserName] = useState(Username);
  const [userEmail, setUserEmail] = useState(email);
  return (
    <div className="profile-edit">
      <Typography sx={{ color: '#0071BC', fontWeight: 600, fontSize: '22px', lineHeight: '33px', textTransform: 'capitalize' }}>Edit Profile</Typography>
      <Divider sx={{ pt: '20px' }} />

      <div className='edit-form'>
        <Typography variant="div" component='div' sx={{ color: '#00000080', fontSize: '14px', lineHeight: '21px', fontWeight: '600', mt: '40px', ml: '30px' }}>
          Enter Full Name
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
            maxWidth: '640px'
          }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Typography variant="div" component='div' sx={{ color: '#00000080', fontSize: '14px', lineHeight: '21px', fontWeight: '600', mt: '20px', ml: '30px' }}>
          Enter Email Address
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
            maxWidth: '640px'
          }}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div className='btns' style={{ position: 'absolute', bottom: '62px', right: '20px' }}>
          <Button sx={{
            borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#000000', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
            '&:hover': { backgroundColor: '#0071BC1a' }
          }}>Cancel</Button>
          <Button variant="contained" sx={{ borderRadius: '10px', m: '5px', background: '#0071BC', py: '13px', px: '30px', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>
            Save
          </Button>

        </div>
      </div>
    </div>
  )
}

export default EditProfile