import React from "react";
import {Box, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const Blockquote = ({reference, content}) => {
    return (<Card sx={{
        display: 'flex', marginBottom: '20px'
    }}>
        <Box sx={{
            display: 'flex', flexDirection: 'column',
        }}>
            <CardContent sx={{flex: '1 0 auto',}}>
                <Typography variant="subtitle1" color="textSecondary" sx={{
                    paddingLeft: '13px', borderLeft: '5px solid #3f51b5'
                }}>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <a style={{textDecoration: 'none'}} href="https://bible.by">{reference}</a>
            </CardActions>
        </Box>
        <CardMedia sx={{width: '300px', display: {xs: 'none', sm: 'block'}}} image="images/Bible.jpg"/>
    </Card>);
};

export default Blockquote;