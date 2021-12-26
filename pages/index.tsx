import * as React from 'react';
import type {NextPage} from 'next';
import Header from '../src/components/Header';
import Blockquote from '../src/components/blockquote/Blockquote';
import Calendar from '../src/components/calendar/Calendar';
import Footer from '../src/components/Footer';
import {Box} from "@mui/system";
import {Container} from "@mui/material";

const Home: NextPage = () => {
    return (
        <Box sx={{backgroundColor: '#f4f6f8'}}>
            <Header/>
            <Container maxWidth="md">
                <Blockquote/>
                <Calendar/>
                <Footer/>
            </Container>
        </Box>
    );
};

export default Home;
