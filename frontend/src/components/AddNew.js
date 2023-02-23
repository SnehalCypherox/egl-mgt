import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const AddNew = ({ dropdownTitle, dropdownSub }) => {
    return (
        <>
            <div className='new-add'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="property"
                        id="property" className='main-property'
                    >
                        <Typography>{dropdownTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="div" component="div">
                            <ul className='add-list'>
                                {dropdownSub.map(subData => {
                                    return (
                                        <li key={subData} onClick={() => {
                                            console.log('clicked : ' + subData);
                                        }}>
                                            {subData}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>

    )
}

export default AddNew