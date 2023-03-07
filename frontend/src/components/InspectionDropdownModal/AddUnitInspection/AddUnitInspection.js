import { FormControl, Grid, ListItem, MenuItem, Select, TextField, Typography } from '@mui/material'

import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import React, { useState } from 'react'
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const AddUnitInspection = () => {
  const [selectUnit, setSelectUnit] = React.useState('');
  const handleChange = (event) => {
    setSelectUnit(event.target.value);
  };

  const [value, setValue] = useState('')
  const [type, setType] = useState('');

  return (
    <>
      {/* <div className='inspection-unit-model-1' style={{ display: 'flex', justifyContent: 'center' }}>
        <FormControl
          size='small'
          sx={{ width: '100%', m: 1, maxWidth: 650 }}
        >
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={handleChange}
            value={selectUnit}
            placeholder='+Add New Unit'
            displayEmpty
          >
            <MenuItem sx={{ color: '#0071BC', backgroundColor: '#0071BC1a', fontWeight: 600 }}>+Add New Unit</MenuItem>
            <MenuItem sx={{ color: '#000000', fontWeight: 600, backgroundColor: '#8080801a' }} value={6005}>6005 Livorno Way</MenuItem>
            <MenuItem value={1728}>1728 Richmond st apt 14</MenuItem>
            <MenuItem value={2208}>2208 Madera Rd</MenuItem>
          </Select>
        </FormControl>
      </div> */}
      <div className='inspection-unit-model-2' style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='div' component='div' sx={{ color: "black" }}>
          What type of inspection?
        </Typography>
        <Grid>
          <ListItem clssname="radiogroup-inspection-type">
            <RadioGroup>
              <Grid container xs={12}>
                {[
                  "Move - in",
                  "Move - out",
                  "Annual",
                  "Turn",
                  "Periodic",
                  "Maintenance Check",
                  "Exterior",
                  "Pre-Acquisition",
                  "RV Lot",
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
                      value={item}
                      label={item}
                      onChange={(e) => setType(e.target.value)}
                      overlay
                      disableIcon
                      sx={(theme) => ({
                        "& label": {
                          fontWeight: "md",
                          fontSize: "md",
                          color: "#808080",
                        },
                        [`&.${radioClasses.checked}`]: {
                          "& label": {
                            color: "#0071BC",
                            background: "white",
                          },
                          "--joy-palette-primary-outlinedBorder":
                            "#006BB2",
                          "& JoySheet-root": {
                            backgroundColor: "none",
                          },
                          "--joy-palette-primary-outlinedHoverBorder":
                            "#0071BC",

                          [`& .${radioClasses.action}`]: {
                            "--variant-borderWidth": "2px",
                          },
                        },
                      })}
                    />
                  </Sheet>
                ))}
              </Grid>
            </RadioGroup>
          </ListItem>
        </Grid>
      </div>
      <div>
        <Typography style={{ marginBottom: "0px", fontWeight: "bold" }}>
          Due Date
        </Typography>
        <Typography className="add_new_inspection_date-desc">
          Click the date below to update the due date for this
          inspection.
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat="MM/dd/yyyy"
            value={value}
            sx={{ borderRadius: "10px" }}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="inspection_date-picker"
                sx={{
                  borderRadius: "15px",
                }}
              />
            )}
          />
        </LocalizationProvider>
      </div>
    </>


  )
}

export default AddUnitInspection