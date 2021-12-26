import React, {useState} from "react";
import {VolumeDown, VolumeUp} from "@mui/icons-material";
import {Box, Grid, Slider} from "@mui/material";

const VolumeSlider = ({onChange}) => {
    const [value, setValue] = useState(70);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <Box sx={{
            width: '230px',
            marginTop: '35px',
            backgroundColor: '#fff',
            borderRadius: '5px',
            paddingLeft: 2,
            paddingRight: '7px',
            marginLeft: '-10px',
            borderBottom: '1px solid #b9b6b6'
        }}>
            <Grid container spacing={1}>
                <Grid item>
                    <VolumeDown/>
                </Grid>
                <Grid item xs sx={{paddingTop: '0 !important'}}>
                    <Slider value={value} onChange={handleChange} style={{padding: '20px 0'}}
                            aria-labelledby="continuous-slider"/>
                </Grid>
                <Grid item>
                    <VolumeUp/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default VolumeSlider;
