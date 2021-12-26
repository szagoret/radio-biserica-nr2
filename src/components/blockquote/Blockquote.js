import React from "react";
import {Box, Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const Blockquote = () => {
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
                    ...dacă poporul Meu, peste care este chemat Numele Meu se va smeri, se va ruga şi va căuta faţa
                    Mea,
                    şi se va abate de la căile lui rele - îl voi asculta din ceruri, îi voi ierta păcatul şi-i voi
                    tămădui ţara.
                </Typography>
            </CardContent>
            <CardActions>
                <a style={{textDecoration: 'none'}} href="https://bible.by/verse/14/7/14/">2 Cronici 7:14</a>
            </CardActions>
        </Box>
        <CardMedia sx={{width: '300px', display: {xs: 'none', sm: 'block'}}} image="images/Bible.jpg"/>
    </Card>);
};

export default Blockquote;