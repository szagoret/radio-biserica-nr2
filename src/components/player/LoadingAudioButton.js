import React from "react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import {CircularProgress, IconButton} from "@mui/material";
import {green} from "@mui/material/colors";
import Box from "@mui/material/Box";

const LoadingAudioButton = () => {
    return (
        <>
            <IconButton color="primary" sx={{
                backgroundColor: '#fff',
                padding: 0,
                '&:hover': {
                    backgroundColor: '#fff'
                },
                borderBottom: '1px solid #b9b6b6'
            }}>
                <VolumeOffIcon style={{fontSize: 95}}/>
            </IconButton>
            <Box xs={{
                position: 'relative',
                marginTop: -98,
                marginLeft: -3,
            }}>
                <CircularProgress size={100} xs={{
                    color: green[500],
                    position: 'absolute',
                }} thickness={3}/>
            </Box>
        </>
    );
};

export default LoadingAudioButton;