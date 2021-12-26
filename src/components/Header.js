import Box from "@mui/material/Box";
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Player from "./player/Player";

const Header = ({radioUrl}) => {

    return (
        <Box>
            <Box sx={{
                position: 'relative',
                height: 200,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom',
                backgroundImage: `url(images/cover.jpg)`,
                '&:before': {
                    position: 'absolute',
                    content: '" "',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
                },
                '&:hover': {
                    '& $changeButton': {
                        visibility: 'visible'
                    }
                }
            }}>
                <Container>
                    <Grid container
                          sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                        <Typography variant="h5" sx={{paddingTop: 5}}>
                            <Box sx={{
                                backgroundColor: '#fff',
                                padding: '10px',
                                borderRadius: '5px',
                                boxShadow: '1px 1px 16px 2px'
                            }}>
                                <span>Radio Adunarea Nr.2 Chisinau</span>
                            </Box>
                        </Typography>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{
                padding: (theme) => theme.spacing(2, 3),
                position: 'relative',
                display: 'flex',
                flexWrap: 'wrap',
                // flexDirection: 'row',
                // [theme.breakpoints.down('sm')]: {
                //     flexDirection: 'column'
                // }
            }}>
                <div style={{marginTop: '-64px'}}>
                    <Player radioUrl={radioUrl}/>
                </div>
            </Container>
        </Box>
    );
};

export default Header;