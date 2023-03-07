import { FormControl, Grid, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React from 'react'

const AddBuildingInspection = () => {
    const [selectUnit, setSelectUnit] = React.useState('');
    const handleChange = (event) => {
        setSelectUnit(event.target.value);
    };

    return (
        // <div className='inspection-building-model-1' style={{ display: 'flex', justifyContent: 'center' }}>
        //     <FormControl
        //         size='small'
        //         sx={{ width: '100%', m: 1, maxWidth: 650 }}
        //     >
        //         <Select
        //             labelId="demo-simple-select-helper-label"
        //             id="demo-simple-select-helper"
        //             onChange={handleChange}
        //             value={selectUnit}
        //             placeholder='Lorem Ipsum'
        //             displayEmpty={false}
        //         >
        //             <MenuItem sx={{ color: '#0071BC', backgroundColor: '#0071BC1a', fontWeight: 600 }}>+Add New Unit</MenuItem>
        //             <MenuItem sx={{ color: '#000000', fontWeight: 600, backgroundColor: '#8080801a' }} value={6005}>Lorem Ipsum</MenuItem>
        //             <MenuItem value={1728}>Lorem Ipsum</MenuItem>
        //             <MenuItem value={2208}>Lorem Ipsum</MenuItem>
        //         </Select>
        //     </FormControl>
        // </div>
        <div className='inspection-building-model-2'>
            <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
                What type of inspection?
            </Typography>
            <Grid item xs={12}>
                <OutlinedInput
                    fullWidth
                    className='building-inspection'
                    sx={{
                        borderRadius: '10px',
                        m: '10px',
                        fontSize: '12px',
                        lineHeight: '18px',
                        color: '#0071BC',
                        borderColor: '#0071BC'
                    }}
                    value='Maintenance / Safety Check'
                />
            </Grid>
        </div>
    )
}

export default AddBuildingInspection