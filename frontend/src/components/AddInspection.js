import React from 'react'

const AddInspection = () => {
    return (
        <>
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
                            className='model-input'
                            value={zipcode}
                            placeholder="Enter your Zip Code"
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default AddInspection