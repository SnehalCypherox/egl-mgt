import { Box, Chip, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, ListItem, MenuItem, OutlinedInput, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Sheet } from '@mui/joy';
import RadioGroup from "@mui/joy/RadioGroup";
import Radio, { radioClasses } from "@mui/joy/Radio";
import CommonDatePiker from '../../Datepicker/CommonDatePiker';
import { useTheme } from '@mui/material/styles';
import _without from "lodash/without";
import '../../InspectionDropdownModal/inspectiondrop.css'
import inspectioncompleted from '../../../Assets/inspectioncompleted.png'

const names = [
    'Building Exterior (General)',
    'Grounds & Landscaping (General)',
    'Fencing & Gates (General)',
    'Building Signage (General)',
];

const AddBuildingInspection = ({ currentStep }) => {
    const [selectUnit, setSelectUnit] = React.useState('');
    const [chipData, setChipData] = React.useState(names);
    const [inspectionLabel, setInspectionLabel] = useState('')
    const [type, setType] = useState('');
    const [team, setTeam] = useState('');
    const [recipient, setRecipient] = useState('')

    const handleChange = (event) => {
        setSelectUnit(event.target.value);
    };

    // include inspection
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChangeInclude = (event) => {
        const { target: { value } } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const handleDelete = (e, value) => {
        e.preventDefault();
        console.log("clicked delete");
        setPersonName((current) => _without(current, value));
    };


    function getInspectionModalData(steps) {
        switch (steps) {
            case 0:
                return (
                    <div className='inspection-building-model-1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <FormControl
                            size='small'
                            sx={{ width: '100%', m: 1, maxWidth: 650 }}
                        >
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={handleChange}
                                value={selectUnit}
                                placeholder='Lorem Ipsum'
                                displayEmpty={false}
                                defaultOpen={true}
                            >
                                <MenuItem sx={{ color: '#0071BC', backgroundColor: '#0071BC1a', fontWeight: 600 }}>+Add New Unit</MenuItem>
                                <MenuItem sx={{ color: '#000000', fontWeight: 600, backgroundColor: '#8080801a' }} value={6005}>Lorem Ipsum</MenuItem>
                                <MenuItem value={1728}>Lorem Ipsum</MenuItem>
                                <MenuItem value={2208}>Lorem Ipsum</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )
            case 1:
                return (
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
                        <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, pt: '20px' }}>
                            Due Date
                        </Typography>
                        <Typography variant='div' component='div' sx={{ color: "#868686", lineHeight: '18px', fontSize: '12px', fontWeight: 500, pb: '10px' }}>
                            Click the date below to update the due date for this inspection.
                        </Typography>

                        <CommonDatePiker />
                    </div>
                )
            case 2:
                return (
                    <div className='inspection-building-model-3'>
                        <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
                            What type of inspection?
                        </Typography>
                        <Grid item xs={12}>
                            <FormControl sx={{ m: 1, width: '640px' }}>
                                <div>
                                    {personName.map((value) => (
                                        <Chip
                                            variant="outlined"
                                            key={value}
                                            label={value}
                                            clickable
                                            onDelete={(e) => handleDelete(e, value)}
                                            className='Inspection-chip-icon'
                                            sx={{ borderColor: '#0071BC', color: '#0071BC', borderRadius: '10px', px: '15px', py: '20px', m: '5px' }}
                                            onClick={() => console.log("clicked chip")}
                                        />
                                    ))}
                                </div>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    sx={{ borderRadius: '10px 10px 0px 0px', mt: '10px' }}
                                    multiple
                                    displayEmpty
                                    defaultOpen={true}
                                    IconComponent={() => null}
                                    value={personName}
                                    className='snehal'
                                    onChange={handleChangeInclude}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    renderValue={() => (
                                        <em style={{ color: '#00000080' }}>Search for features to add</em>
                                    )}
                                >
                                    <MenuItem disabled value="">
                                        <em>Search for features to add</em>
                                    </MenuItem>
                                    {names.map((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </div>
                )
            case 3:
                return (
                    <div className='inspection-building-model-4'>
                        <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
                            Inspection Label
                        </Typography>
                        <Typography sx={{ fontSize: '14px', textAlign: 'left', lineHeight: '21px', mb: '10px', color: '#808080', fontWeight: 500 }}>
                            Add units to RentCheck by uploading your unit data onto the RentCheck platform.
                        </Typography>
                        <Grid item xs={12}>
                            <OutlinedInput
                                fullWidth
                                sx={{
                                    borderRadius: '10px',
                                    my: '10px',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#000'
                                }}
                                className='building-input'
                                placeholder="Enter label here"
                                value={inspectionLabel}
                                onChange={(e) => setInspectionLabel(e.target.value)}
                            />
                        </Grid>
                    </div>
                )
            case 4:
                return (
                    <div className='inspection-building-model-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
                            Is this inspection recurring?
                        </Typography>
                        <ListItem clssname="radiogroup-inspection-type">
                            <RadioGroup>
                                <Grid container item xs={12}>
                                    {[
                                        "Is not recurring",
                                        "Daily",
                                        "Weekly",
                                        "Monthly",
                                        "Quarterly",
                                        "Semi - Annually",
                                        "Annually",
                                    ].map((item, index) => (
                                        <Sheet
                                            key={index}
                                            sx={{
                                                p: 1.5,
                                                m: 1,
                                                borderRadius: "10px",
                                                border: "none !important",
                                            }}
                                        >
                                            <Radio
                                                className='radio-button-action'
                                                value={item}
                                                label={item}
                                                onChange={(e) => setType(e.target.value)}
                                                overlay={true}
                                                disableIcon={true}
                                                sx={(theme) => ({
                                                    "& label": { fontWeight: 500, fontSize: '16px', color: '#808080', lineHeight: '24px' },
                                                    [`&.${radioClasses.checked}`]: {
                                                        "& label": {
                                                            color: "#0071BC",
                                                            background: "white",
                                                            border: '#0071BC'
                                                        },
                                                    },
                                                })}
                                            />
                                        </Sheet>
                                    ))}
                                </Grid>
                            </RadioGroup>
                        </ListItem>
                    </div>
                )
            case 5:
                return (
                    <div className='inspection-building-model-6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography variant='div' component='div' sx={{ mb: '20px', color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
                            Who should complete this Inspection?
                        </Typography>
                        <Grid container>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={(e) => setTeam(e.target.value)}
                                >
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                border: "1px solid #808080",
                                                padding: "20px",
                                                borderRadius: "10px",
                                                alignItems: "center",
                                            }}
                                        >
                                            <FormControlLabel
                                                value="Resident or third-Party"
                                                control={<Radio />}
                                                sx={{ display: "block" }}
                                            />
                                            <div className="radio1">
                                                <Typography variant='h5' component='h5' sx={{ fontWeight: 600, fontSize: '16px', lineHeight: '24px' }}>
                                                    Resident or third-Party
                                                </Typography>
                                                <Typography sx={{ pt: '10px', fontSize: '12px', lineHeight: '18px', fontWeight: 400, color: '#808080' }}>
                                                    Assign this inspection to someone else, such as the
                                                    resident. We will send them an email with instructions
                                                    on how to complete this inspection. Add multiple email
                                                    addresses by hitting Enter or adding a comma after
                                                    each email address.
                                                </Typography>
                                                <div>
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
                                                            placeholder="Add or Select Recipient"
                                                            value={recipient}
                                                            onChange={(e) => setRecipient(e.target.value)}
                                                        />
                                                    </Grid>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <Typography sx={{ display: 'flex', padding: '20px', background: '#0071bc26', borderRadius: '10px', color: '#0071BC' }}>
                                            <FormControlLabel value="Myself or My Team" control={<Radio />} />
                                            <Typography>Myself or My Team</Typography>
                                        </Typography>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                padding: '10px 0 '
                                            }}
                                        >
                                        </div>
                                    </div>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </div>
                )
            case 6:
                return (
                    <div className='inspection-building-model-7'>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                            <img src={inspectioncompleted} alt="" className='inspection completed' height='auto' width='246px' style={{ margin: 'auto' }} />
                            <Typography sx={{ pt: '30px', fontSize: '26px', fontWeight: 600, color: '#0071BC', textAlign: 'center' }}>
                                Inspection Created Successfully
                            </Typography>
                            <Typography variant='span' component='span' sx={{ color: '#868686', textAlign: 'center', fontWeight: '500', fontSize: '16px' }}>
                                Lorem Ipsum
                            </Typography>
                        </div>
                    </div>
                )


            default:

        }
    }


    return (
        <>
            {getInspectionModalData(currentStep)}
        </>

    )
}

export default AddBuildingInspection