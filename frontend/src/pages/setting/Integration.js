import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import Latchel from '../../Assets/latchel.png'
import rentManager from '../../Assets/rentManager.png'
import zapier from '../../Assets/zapier.png'

const Integration = () => {
    return (
        <>
            <Accordion className='setting-accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <img src={rentManager} alt="" style={{ width: '100%', maxWidth: '58px', margin: '20px' }} />
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#000000' }}>
                        Rent Manager
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#0071BC1a' }}>
                    <Typography>
                        Import your unit and tenant directory from Rent Manager without the need for manual data entry.
                    </Typography>
                    <Typography sx={{ mt: '20px' }}>
                        Once resident information is imported, names and contact details will auto-populate when requesting an inspection. RentCheck refreshes this data every hour to ensure it is accurate and up-to-date.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='setting-accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <img src={Latchel} alt="" style={{ width: '100%', maxWidth: '58px', margin: '20px' }} />
                    <Typography variant='div' component='div' sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#000000' }}>
                        Latchel
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#0071BC1a' }}>
                    <Typography>
                        Create Latchel Work Orders instantly from maintenance issues identified during RentCheck inspections.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='setting-accordion'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <img src={zapier} alt="" style={{ width: '100%', maxWidth: '58px', margin: '20px' }} />
                    <Typography variant='div' component='div' sx={{display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '18px', lineHeight: '27px', color: '#000000' }}>
                        Zapier
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#0071BC1a' }}>
                    <Typography>
                        Connect RentCheck to 4,000+ apps via Zapier. With our Zapier integration, you can automatically add units, add residents,
                        and schedule move-in / move-out, annual, periodic, turn, and pre-acquisition inspections.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Integration