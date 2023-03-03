import { Divider, Typography } from '@mui/material'
import React from 'react'

const Billing = () => {
    return (
        <>
            <Typography variant='div' component='div' sx={{ fontWeight: 600, fontSize: '18px', pt: '10px', lineHeight: '27px', color: '#000000' }}>
                Current Plan
            </Typography>
            <Typography sx={{ pt: '24px', pb: '16px', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>
                Your RentCheck subscription includes unlimited remote move-in & move-out inspections, turn and periodic inspections,
                flexible data entry, detailed inspections reporting, and phone & email support.
            </Typography>
            <Divider />
            <Typography variant='div' component='div' sx={{ pt: '30px', fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#000000' }}>
                Billing Contact
            </Typography>
            <Typography sx={{ pt: '24px', pb: '16px', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>
                Dan Irwin (dirwin@eimproperties.com)
            </Typography>
            <Divider />
            <Typography variant='div' component='div' sx={{ pt: '30px', fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#000000' }}>
                Number of active units
            </Typography>
            <Typography sx={{ pt: '24px', pb: '16px', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#00000080' }}>
                0 active units
            </Typography>
        </>
    )
}

export default Billing