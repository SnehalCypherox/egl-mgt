import { Button, Checkbox, FormControl, FormControlLabel, Grid, ListItem, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material'
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import React, { useState } from 'react'
import inspectioncompleted from '../../../Assets/inspectioncompleted.png'
import '../../InspectionDropdownModal/inspectiondrop.css'
import CommonDatePiker from '../../Datepicker/CommonDatePiker';
import { AddInspectionModal } from '../DetailUnitModal';


const UnitdetailModal = ({ currentStep }) => {
  const [selectUnit, setSelectUnit] = React.useState('');
  const handleChange = (event) => {
    setSelectUnit(event.target.value);
  };

  const [value, setValue] = useState('')
  const [type, setType] = useState('');
  const [team, setTeam] = useState('');
  const [recipient, setRecipient] = useState('')


  function getInspectionModalData(steps) {
    switch (steps) {
      case 0:
        return (
          <AddInspectionModal />
        )
      case 1:
        return (
          <div className='inspection-unit-model-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
              What type of inspection?
            </Typography>
            <Grid>
              <Grid item>
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
                                  background: "transparent",
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
              </Grid>
            </Grid>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
              <Typography sx={{ mb: "0px", fontWeight: 600 }}>
                Due Date
              </Typography>
              <CommonDatePiker />
            </div>
          </div>
        )

      case 2:
        return (
          <div className='inspection-unit-model-3' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant='div' component='div' sx={{ color: "#000000", lineHeight: '24px', fontSize: '16px', fontWeight: 600, fontSizeAdjust: '16px' }}>
              Is this inspection recurring?
            </Typography>
            <ListItem clssname="radiogroup-inspection-type">
              <RadioGroup>
                <Grid container xs={12}>
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
                              background: "transparant",
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

      case 3:
        return (
          <div className='inspection-unit-model-4' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                      <Checkbox />
                      <Typography sx={{ fontSize: '12px', lineHeight: '18px', fontWeight: 400, color: '#808080' }}>
                        Fast-Track - A faster inspection experience designed for
                        property management professionals.<Typography variant='span' component='span' sx={{ color: '#0071BC' }}>Learn More</Typography>
                      </Typography>
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </Grid>
          </div>
        )

      case 4:
        return (
          <div className='inspection-unit-model-5'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
              <img src={inspectioncompleted} alt="" className='inspection completed' height='auto' width='246px' style={{ margin: 'auto' }} />
              <Typography sx={{ pt: '30px', fontSize: '26px', fontWeight: 600, color: '#0071BC', textAlign: 'center' }}>
                Inspection Created Successfully
              </Typography>
              <Typography variant='span' component='span' sx={{ color: '#868686', textAlign: 'center', fontWeight: '500', fontSize: '16px' }}>
                6005 Livorno Way
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

export default UnitdetailModal