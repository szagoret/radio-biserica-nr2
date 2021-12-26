import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import {IconButton} from "@mui/material";

const PlayButton = ({onClick}) => {
    return (
        <IconButton color="primary" sx={
            {
                backgroundColor: '#fff',
                padding: 0,
                '&:hover': {
                    backgroundColor: '#fff'
                },
                borderBottom: '1px solid #b9b6b6'
            }} onClick={() => onClick()}>
            <PlayCircleFilledIcon style={{fontSize: 95}}/>
        </IconButton>
    );
};

export default PlayButton;