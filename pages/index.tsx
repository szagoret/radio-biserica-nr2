import * as React from 'react';
import type {NextPage} from 'next';
import Header from '../src/components/Header';
import Blockquote from '../src/components/blockquote/Blockquote';
import Calendar from '../src/components/calendar/Calendar';
import Footer from '../src/components/Footer';
import {Box} from "@mui/system";
import {Container} from "@mui/material";
import {gql} from "@apollo/client";
import client from "../apollo-client";
import {CalendarType} from "../src/types";
import {DefaultSeo} from 'next-seo';
import Layout from "../src/components/Layout";

const Home: NextPage<{
    calendar: CalendarType,
    verset: { referinta: string, continut: string }
    contact: { telefon: string, telefonLink: string }
    radioUrl: string
}> =
    ({
         calendar,
         verset,
         contact,
         radioUrl
     }) => {
        return (
            <Layout  title = 'Radio Biserica Nr.2 Chisinau'>
                <DefaultSeo
                    openGraph={{
                        title: 'Radio Biserica Nr.2 Chisinau',
                        type: 'website',
                        locale: 'ro_Ro',
                        url: 'https://radiobisericanr2.vercel.app/',
                        site_name: 'Radio Biserica Nr.2 Chisinau ',
                    }}/>
                <Box sx={{backgroundColor: '#f4f6f8'}}>
                    <Header radioUrl={radioUrl}/>
                    <Container maxWidth="md">
                        <Blockquote reference={verset.referinta} content={verset.continut}/>
                        <Calendar calendar={calendar}/>
                        <Footer telefon={contact.telefon} telefonLink={contact.telefonLink}/>
                    </Container>
                </Box>
            </Layout>
        );
    };

export async function getStaticProps() {
    const {data} = await client.query({
        query: gql`
query {
  programActivitati {
    data {
      attributes {
        Titlu,
        Program {
          Titlu,
          Evenimente {
            ora,
            titlu
          }
        }
      }
    }
  }
}
      `,
    });
    const programRaw = data.programActivitati.data.attributes;
    const title = programRaw.Titlu;
    const program = programRaw?.Program?.map((p: { Titlu: any; Evenimente: any[]; }) => {
        const title = p.Titlu;
        const events = p.Evenimente?.map(e => ({title: e.titlu, time: e.ora}));

        return {title, events};
    }) || [];

    const {data: verset} = await client.query({
        query: gql`
        query {
  verset{
data{
  attributes {
    continut,
    referinta
  }
}
  }
}
        `
    });

    const referinta = verset.verset.data.attributes.referinta;
    const continut = verset.verset.data.attributes.continut;


    const {data: contact} = await client.query({
        query: gql`

query {
  contact {
    data {
      attributes {
        Telefon,
        TelefonLink
      }
    }
  }
}
        `
    });

    const telefon = contact.contact.data.attributes.Telefon;
    const telefonLink = contact.contact.data.attributes.TelefonLink;

    const {data: radioSetup} = await client.query({
        query: gql`
        query  {
  radioUrl {
    data {
      attributes {
        url
      }
    }
  }
}
        `
    });

    const url = radioSetup.radioUrl.data.attributes.url;

    return {
        props: {
            calendar: {title, program},
            verset: {referinta, continut},
            contact: {telefon, telefonLink},
            radioUrl: url
        },
    };
}

export default Home;
