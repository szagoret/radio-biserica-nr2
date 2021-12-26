import React from "react";
import {FaViber} from "react-icons/fa";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import {Card, CardActions, CardContent, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Footer = ({telefon, telefonLink}) => {
    return (
        <Grid container spacing={1} style={{paddingBottom: '2rem'}}>
            <Grid item xs={12}>
                <Card>
                    <CardContent sx={{paddingBottom: '1rem'}}>
                        <Typography sx={{fontSize: 12,}} color="textSecondary" gutterBottom>
                            Contact
                        </Typography>

                        <Typography variant="h6" component="h6" sx={{display: 'flex', alignItems: 'center'}}>
                            <PhoneIphoneIcon fontSize="small"/>
                            <span>Telefon:</span>
                            <a href={`tel:+${telefonLink}`} style={{
                                color: '#4051b5',
                                paddingLeft: '5px',
                                textDecoration: 'none'
                            }}>{telefon}</a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={`viber://chat?number=%2B${telefonLink}`}
                                sx={{color: '#7360f2'}}
                                startIcon={<FaViber/>}
                                size="small">
                            Viber
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Footer;