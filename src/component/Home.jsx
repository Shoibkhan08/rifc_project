import React from "react";
import { Grid, Container } from '@mui/material'
import Slidebar from './slider/Slidebar'
import "./Home.css";
import NewsCards from './card/NewsCards'
import Slide2 from './slider/Slide2';
import NextMatchAndLeaderboard from './teamMatch/NextMatchAndLeaderboard';
import slide3 from '../assets/bg_3.jpg';
// import img1 from '../assets/img_1.jpg'

export default function Home() {

  const header = `Welcome to RAPID-INDIA THIRD DIVISION FOOTBALL CLUB (RIFC)`;
  const paragraph = `Which is bona fide football Club, legally registered and recognized by Government of India.`
  return (
    <>
      <Slidebar header={header} paragraph={paragraph} img={slide3} />
      <Container spacing={2} sx={{ py: 5 }} >

        <div className='heading' style={{ padding: '20px 0 0 0', margin: '10px 0' }}>
          <h2 className='h1'>Latest News</h2>
        </div>
        <Grid container spacing={2}
          sx={{ display: 'flex', justifyContent: 'center', my: 5 }}
        >

          <NewsCards />
        </Grid>
      </Container>

      <div style={{ backgroundColor: '#121212', padding: '20px' }}>
        <NextMatchAndLeaderboard />
      </div>
      <Container spacing={2} sx={{ py: 5 }} >
        <Grid container spacing={2}>
          <div className='heading'>
            <h2 className='h1'>Our Blogs</h2>
          </div>

          <Grid columns={{ md: 12 }} sx={{ py: 5 }} >
            <Slide2 />
          </Grid>
        </Grid>
      </Container>

    </>
  )
}
