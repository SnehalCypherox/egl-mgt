import { Button, Typography } from '@mui/material'
import React from 'react'

const Team = () => {
    return (
        <>
            <Button sx={{
                borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#0071BC', maxWidth: '189px', py: '13px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                '&:hover': { backgroundColor: '#0071BC1a' }
            }}>Eagle Property
                Management</Button>
            <Button sx={{
                borderRadius: '10px', background: '#0071BC1a', m: '5px', color: '#0071BC', maxWidth: '189px', py: '18px', px: '30px', fontWeight: 600, fontSize: '16px', lineHeight: '24px',
                '&:hover': { backgroundColor: '#0071BC1a' }
            }}>+ Add Team</Button>

            <Typography variant='div' component='div' sx={{ fontWeight: 600, pt: '30px', fontSize: '16px', lineHeight: '24px', color: '#000000' }}>
                Set up a team account
            </Typography>
            <Typography sx={{fontSize: '16px', lineHeight: '24px', color: '#00000080', pt: '10px', maxWidth: '951px'}}>
                With a team account you can work with others in your company in RentCheck. Invite as many team members to join as you like. We will send them an email invitation and once accepted you'll see them here. You can also set up multiple teams if you'd like to give individuals access to specific groups of units within your portfolio. Add teammates to one or more teams and they will only be able to view and manage the units and inspections for the team or teams to which they've been invited.
            </Typography>
        </>
    )
}

export default Team