import { Typography, Grid, OutlinedInput, Paper, Button, MenuItem } from '@mui/material'
import { TextareaAutosize } from '@mui/base';
import React, { useState, createContext, useContext } from 'react';
import '../AddNewUnit/AddUnitData.css'
import Box from '@mui/joy/Box';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';


import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import home from '../../Assets/house.png'




const AddBuilding = () => {
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");

    const [buildingName, setBuildingName] = useState('')

    const [floors, setFloors] = useState('')


    // counter
    const useValue = () => useState({ count1: 0, count2: 0, count3: 0, });

    const Context = createContext(null);

    const useGlobalState = () => {
        const value = useContext(Context);
        if (value === null) throw new Error('Please add GlobalStateProvider');
        return value;
    };

    const GlobalStateProvider = ({ children }) => (
        <Context.Provider value={useValue()}>{children}</Context.Provider>
    );

    const Counter = ({ name }) => {
        const [state, setState] = useGlobalState();
        const count = state[name] || 0;
        const increment = () => {
            setState({ ...state, [name]: count + 1 });
        };
        const decrement = () => {
            if (count <= 0) {
                setState(0);
            }
            else {
                setState({ ...state, [name]: count - 1 });
            }
        };
        return (
            <div className="bedroom-detail" style={{ marginRight: '20px' }}>
                <RemoveCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={decrement} />
                <Typography className="numbers-of-room">{count}</Typography>
                <AddCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={increment} />
            </div>
        );
    };
    // counter over
    // switch start
    const [switches, setSwitches] = React.useState(true);
    const handleChange = (event) => {
        setSwitches({
            ...switches,
            [event.target.name]: event.target.checked,
        });
    };

    const data = ['Courtyard(s)', 'Patio(s)', 'Playground Area(s)', 'Shared Laundry Room(s)', 'Lobby']

    const facilities = ['Front Yard', 'Front Porch', 'Side Porch', 'Back Porch Or Deck', 'Garage', 'Carport', 'Backyard', 'Pool']

    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    // select
    const [value, setValue] = React.useState('female');

    const handleSelect = (event) => {
        setValue(event.target.value);
    };


    return (
        <>
            {/* <div className='building-model-1' style={{ margin: '0 auto' }}>
                <Typography variant='h6' className=" model-title">
                    Where is the building located?
                </Typography>
                <Typography variant="span" sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600', ml: '10px' }}>
                    Building Name
                </Typography>
                <Grid item xs={12}>
                    <OutlinedInput
                        fullWidth
                        className='model-input'
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
                        className='model-input'
                        value={address1}
                        placeholder="32 N 3th Street, Sheboygan...."
                        onChange={(e) => setAddress1(e.target.value)}
                    />
                    <OutlinedInput
                        fullWidth
                        className='model-input'
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
            </div> */}
            {/* <div className='building-model-2' style={{ margin: '0 auto' }}>
                <Typography variant='h6' className=" model-title">
                    How many floors are there?
                </Typography>
                <Grid item xs={12}>
                    <OutlinedInput
                        fullWidth
                        className='model-input'
                        placeholder="12"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                    />
                </Grid>
            </div> */}
            {/* <div className='building-model-3' style={{ margin: '0 auto' }}>
                <Typography variant='h6' className=" model-title">
                    Select all amenities and common areas that apply to this Building
                </Typography>
                <FormControl component="fieldset" variant="filled">
                    <FormGroup>
                        {data.map((item, index) => (
                            <Paper
                                sx={{
                                    width: 'auto',
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
            </div> */}
            <div className='unit-model-5' style={{ margin: '0 auto' }}>
                <Typography variant='h6' className=" model-title">
                    Which team manages this building?
                </Typography>
                <Paper
                    sx={{
                        width: 'auto',
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
                            sx={{
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
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <Option><FormControlLabel value="female" control={<Radio />} label="Female" /></Option>
                                <Option><FormControlLabel value="male" control={<Radio />} label="Male" /></Option>
                                <Option><FormControlLabel value="other" control={<Radio />} label="Other" /></Option>
                                
                                
                            </RadioGroup>
                        </Select>
                    </div>
                </Paper>
            </div >

            {/* <div className='unit-model-7' style={{margin: '0 auto'}}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '20px', }}>
                    <img src={home} alt="" className='house' />
                    <Button variant="contained" sx={{ borderRadius: '20px', fontSize: '26px', px: '50px', fontWeight: '500' }}>Unit Added!</Button>
                    <Typography variant='span' sx={{color: '#868686', textAlign: 'center', fontWeight: '600', fontSize: '16px'}}>Address</Typography>
                </div>
            </div> */}
        </>
    )
}

export default AddBuilding