import React from "react";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import {IconButton} from "@mui/material";

const PauseButton = ({onClick}) => {
    return (
        <IconButton color="primary"
                    sx={{
                        backgroundColor: '#fff',
                        borderBottom: '1px solid #b9b6b6',
                        padding: 0,
                        '&:hover': {
                            backgroundColor: '#fff',
                        }
                    }}
                    onClick={() => onClick()}>
            <PauseCircleFilledIcon style={{fontSize: 95}}/>
        </IconButton>
    );
};

export default PauseButton;