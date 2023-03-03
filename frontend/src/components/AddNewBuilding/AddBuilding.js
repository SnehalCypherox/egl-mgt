import { Typography, Grid, OutlinedInput, Paper, Button } from '@mui/material'
import React, { useState } from 'react';
import '../AddNewUnit/AddUnitData.css'
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import home from '../../Assets/house.png'

const AddBuilding = ({ currentStep }) => {
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [buildingName, setBuildingName] = useState('')
    const [floors, setFloors] = useState(12)

    // switch start
    const [switches, setSwitches] = React.useState(true);
    const handleChange = (event) => {
        setSwitches({
            ...switches,
            [event.target.name]: event.target.checked,
        });
    };

    const data = ['Courtyard(s)', 'Patio(s)', 'Playground Area(s)', 'Shared Laundry Room(s)', 'Lobby']

    function getBuildingModelData(steps) {
        switch (steps) {
            case 0:
                return (
                    <div className='building-model-1' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' className=" model-title">
                            Where is the building located?
                        </Typography>
                        <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600', ml: '10px' }}>
                            Building Name
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    m: '10px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000'
                                }}
                                className='building-input'
                                placeholder="Real-world"
                                value={buildingName}
                                onChange={(e) => setBuildingName(e.target.value)}
                            />
                        </Grid>
                        <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600', ml: '10px' }}>
                            Address
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    m: '10px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000'
                                }}
                                className='building-input'
                                value={address1}
                                placeholder="32 N 3th Street, Sheboygan...."
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    m: '10px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000'
                                }}
                                className='building-input'
                                value={address2}
                                placeholder="Enter your Address"
                                onChange={(e) => setAddress2(e.target.value)}
                            />
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography variant='div' component='div' className="city">City</Typography>
                                <OutlinedInput
                                    className='model-input'
                                    placeholder="Enter your City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant='div' component='div' className="zipcode">
                                    Zip Code
                                </Typography>
                                <OutlinedInput
                                    className='model-input'
                                    value={zipcode}
                                    placeholder="Enter your Zip Code"
                                    onChange={(e) => setZipcode(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </div>
                )
            case 1:
                return (
                    <div className='building-model-2' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' className=" model-title">
                            How many floors are there?
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                type="number"
                                className='model-input'
                                value={floors}
                                onChange={(e) => setFloors(e.target.value)}
                            />
                        </Grid>
                    </div>
                )
            case 2:
                return (
                    <div className='building-model-3' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' className=" model-title">
                            Select all amenities and common areas that apply to this Building
                        </Typography>
                        <FormControl component="fieldset" variant="filled">
                            <FormGroup>
                                {data.map((item, index) => (
                                    <Paper
                                        sx={{
                                            boxShadow: 'none',
                                            mt: '5px',
                                            backgroundColor: '#8080801a',
                                            minWidth: '610px',
                                            width: '100%'
                                        }} key={index}>
                                        <FormControlLabel
                                            sx={{ px: '20px', py: '10px', borderRadius: '10px' }}
                                            control={
                                                <Switch checked={switches.item} size="small" onChange={handleChange} name={item} />

                                            }
                                            label={item}
                                        />
                                    </Paper>
                                ))}
                            </FormGroup>
                        </FormControl>
                    </div>
                )
            case 3:
                return (
                    <div className='building-model-4' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' className=" model-title">
                            Which team manages this building?
                        </Typography>
                        <Paper
                            sx={{
                                boxShadow: 'none',
                                mt: '5px',
                                width: '100%',
                                borderRadius: '10px',
                                gap: '20px'
                            }}>
                            <div>
                                <Select
                                    placeholder="Select a Team"
                                    indicator={<KeyboardArrowDown sx={{ color: '#0071BC', fontSize: '44px' }} />}
                                    className='select-team'
                                    sx={{
                                        opacity: 1,
                                        width: 640,
                                        border: 'unset',
                                        color: '#0071BC',
                                        "&:hover": {
                                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                            color: '#0071BC',
                                        },
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: '0.5s',
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}
                                >
                                    <Option value='Lorem'>Lorem ipsum dolor sit amet...</Option>
                                    <Option value='Eagle'>Eagle Property Management</Option>
                                    <Option value='Eagle mgt'>Lorem ipsum dolor sit amet...</Option>
                                </Select>
                            </div>
                        </Paper>
                    </div>
                )
            case 4:
                return (
                    <div className='building-model-5' style={{ margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                            <img src={home} alt="" className='house' />
                            <Button variant="contained" sx={{ borderRadius: '20px', fontSize: '26px', fontWeight: '500', width: '100%', maxWidth: '246px', m: 'auto' }}>Building Added!</Button>
                            <Typography variant='span' sx={{ color: '#868686', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>Address</Typography>
                            <Typography sx={{ color: '#000000', textAlign: 'center', fontWeight: '400', fontSize: '12px' }}>
                                building name was successfully created. You can add units to the building at any time by
                                selecting one or more units from the Units tab and selecting to Add to Building.
                            </Typography>
                            <Typography sx={{ color: '#000000', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>
                                Would you like to set up a new Inspection for the unit?
                            </Typography>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }

    return (
        <>
            {getBuildingModelData(currentStep)}
        </>
    )
}

export default AddBuilding