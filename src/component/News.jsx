import React from "react";
import { Container } from '@mui/material';
import Slidebar from './slider/Slidebar';
import NewsPage from './NewsCard/NewsCard';
import img from '../assets/player7.jpg'

export default function News({ newsArticles }) {
  const header = 'News RAPID-INDIA THIRD DIVISION FOOTBALL CLUB (RIFC)'
  const paragraph = 'Which is bona fide football Club, legally registered and recognized by Government of India.'
  return (
    <>
      <Slidebar header={header} paragraph={paragraph} img={img} />
      <Container sx={{ py: 6 }}>
        <div className='heading' style={{ padding: '20px 0 0 0', margin: '10px 0' }}>
          <h2 className='h1'>News</h2>
        </div>
       
        <NewsPage newsArticles={newsArticles} />
        
      </Container>
    </>
  )
}
