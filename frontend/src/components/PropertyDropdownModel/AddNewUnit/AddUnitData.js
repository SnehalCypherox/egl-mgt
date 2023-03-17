import { Typography, Grid, OutlinedInput, Paper, Button } from '@mui/material'
import { TextareaAutosize } from '@mui/base';
import React, { useState, createContext, useContext } from 'react';
import './AddUnitData.css'
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import home from '../../../Assets/house.png'




const AddUnitData = ({ currentStep }) => {
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState(95829 - 8033);

    const [alignment, setAlignment] = useState('left');

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
            (count <= 0) ? setState(0) : setState({ ...state, [name]: count - 1 })
        };
        return (
            <div className="bedroom-detail" style={{ marginRight: '20px' }}>
                <RemoveCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={decrement} />
                <Typography variant='span' component='span' className="numbers-of-room">{count}</Typography>
                <AddCircleOutlineRoundedIcon sx={{ fontSize: '18px', margin: '10px' }} onClick={increment} />
            </div>
        );
    };
    // counter over
    // switch start
    const [switches, setSwitches] = React.useState(true);
    const [switchesOutSide, setSwitchesOutside] = React.useState(true);
    const handleChange = (event) => {
        setSwitches({
            ...switches,
            [event.target.name]: event.target.checked,
        });
    };
    const handleChangeOutside = (event) => {
        setSwitchesOutside({
            ...switchesOutSide,
            [event.target.name]: event.target.checked,
        });
    };
    const additional = ['Kitchen', 'Dining Room', 'Storage Room', 'Living Room', 'Den', 'Office', 'Laundry Room']
    const facilities = ['Front Yard', 'Front Porch', 'Side Porch', 'Back Porch Or Deck', 'Garage', 'Carport', 'Backyard', 'Pool']
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    function getModelContent(steps) {
        switch (steps) {
            case 0:
                return (
                    <div className='unit-model-1' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className=" model-title">
                            Where is the rental unit located?
                        </Typography>
                        <Typography variant="span" component='h6' sx={{ color: '#0071BC', fontSize: '14px', lineHeight: '21px', fontWeight: '600' }}>
                            Address
                        </Typography>
                        <Grid item xs={12}>
                            <TextareaAutosize required minRows={1.5}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    marginBottom: '10px',
                                    marginTop: '10px'
                                }}
                                value={address1} placeholder="‘401’ Lord plaza, opp bandra........."
                                onChange={(e) => setAddress1(e.target.value)}
                            />
                            <TextareaAutosize minRows={1.5}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    borderRadius: "10px",
                                    ml: '10px'
                                }}
                                value={address2} placeholder="Enter your Address"
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
                                    type='number'
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
                    <div className='unit-model-2' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className=" model-title">
                            What type of unit are you renting?
                        </Typography>
                        <div>
                            <RadioGroup
                                orientation="horizontal"
                                aria-label="Alignment"
                                name="alignment"
                                value={alignment}
                                onChange={(event) => setAlignment(event.target.value)}
                                sx={{ gap: '20px' }}
                            >
                                {['left', 'center', 'right'].map((item) => (
                                    <Box
                                        key={item}
                                        sx={(theme) => ({
                                            position: 'relative',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 'auto',
                                            paddingLeft: '30px',
                                            paddingRight: '30px',
                                            height: 48,
                                            borderRadius: '10px',
                                            background: '#0071bc1a'
                                        })}
                                    >
                                        <Radio
                                            value={item}
                                            disableIcon
                                            overlay
                                            label={
                                                {
                                                    left: 'Apartment or Condo',
                                                    right: 'Single - Family',
                                                    center: 'Multi - Family'
                                                }[item]
                                            }
                                            variant={alignment === item ? 'outlined' : 'plain'}
                                            slotProps={{
                                                input: { 'aria-label': item },
                                                action: {
                                                    sx: { borderRadius: 10, transition: 'none' },
                                                },
                                                label: { sx: { lineHeight: 0 } },
                                            }}
                                        />
                                    </Box>
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div className='unit-model-3' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className=" model-title">
                            How many bedrooms are there?
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography variant='span' component='span' className="model-title" sx={{ color: '#0071BC', fontWeight: '600', fontSize: '14px', lineHeight: '21px', mb: '10px' }}>
                                    Bedrooms
                                </Typography>
                                <GlobalStateProvider>
                                    <Counter name="count1" />
                                </GlobalStateProvider>
                            </Grid>
                        </Grid>
                        <Typography variant='h6' component='h6' className=" model-title" sx={{ mt: '30px', mb: '20px' }}>
                            How many bathroom are there?
                        </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <GlobalStateProvider>
                                    <Typography variant='span' component='span' className="model-title" sx={{ color: '#0071BC', fontWeight: '600', fontSize: '14px', lineHeight: '21px', mb: '10px' }}>
                                        Full Bathrooms
                                    </Typography>
                                    <Counter name="count3" />
                                </GlobalStateProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <GlobalStateProvider>
                                    <Typography variant='span' component='span' className="model-title" sx={{ color: '#0071BC', fontWeight: '600', fontSize: '14px', lineHeight: '21px', mb: '10px' }}>
                                        Half Bathrooms
                                    </Typography>
                                    <Counter name="count2" />
                                </GlobalStateProvider>
                            </Grid>
                        </Grid>
                    </div>
                )
            case 3:
                return (
                    <div className='unit-model-4' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className=" model-title">
                            Select all features that apply to this Unit
                        </Typography>
                        <FormControl variant="filled">
                            <FormGroup>
                                {additional.map((item, index) => (
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
                                                <Switch checked={switchesOutSide.item} size="small" onChange={handleChangeOutside} name={item} />
                                            }
                                            label={item}
                                        />
                                    </Paper>
                                ))}
                            </FormGroup>
                        </FormControl>
                    </div>
                )
            case 4:
                return (
                    <div className='unit-model-5' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className=" model-title">
                            Select all features that apply to this Unit
                        </Typography>
                        <Paper
                            sx={{
                                boxShadow: 'none',
                                mt: '5px',
                                backgroundColor: '#8080801a',
                                minWidth: '610px',
                                width: '100%',
                                py: '10px',
                                pl: '20px',
                                borderRadius: '10px',
                                gap: '20px'
                            }}>
                            <FormControlLabel
                                value="Hallway"
                                control={<Switch {...label} defaultChecked size="small" />}
                                label="Hallway"
                            />
                        </Paper>
                        <Paper
                            sx={{
                                boxShadow: 'none',
                                mt: '5px',
                                backgroundColor: '#8080801a',
                                minWidth: '610px',
                                width: '100%',
                                py: '10px',
                                pl: '20px',
                                borderRadius: '10px'
                            }}>
                            <FormControlLabel
                                value="Stairway"
                                control={<Switch {...label} size="small" />}
                                label="Stairway"
                            />
                        </Paper>
                    </div>
                )
            case 5:
                return (
                    <div className='unit-model-6' style={{ margin: '0 auto' }}>
                        <Typography variant='h6' component='h6' className="model-title">
                            Select all features that apply to this Unit
                        </Typography>
                        <FormControl variant="filled">
                            <FormGroup>
                                {facilities.map((item, index) => (
                                    <Paper
                                        sx={{
                                            boxShadow: 'none',
                                            mt: '5px',
                                            backgroundColor: '#8080801a',
                                            minWidth: '610px',
                                            borderRadius: '10px',
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
            case 6:
                return (
                    <div className='unit-model-7' style={{ margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                            <img src={home} alt="" className='house' />
                            <Button variant="contained" sx={{ borderRadius: '20px', fontSize: '26px', px: '50px', fontWeight: '500' }}>Unit Added!</Button>
                            <Typography variant='span' component='span' sx={{ color: '#868686', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}>Address</Typography>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }
    return (
        <>
            {getModelContent(currentStep)}
        </>
    )
}

export default AddUnitData