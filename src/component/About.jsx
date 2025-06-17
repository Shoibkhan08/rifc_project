import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Slidebar from './slider/Slidebar';
import './Home.css'

export default function About() {

  const header = 'About Us RAPID-INDIA THIRD DIVISION FOOTBALL CLUB (RIFC)';
  const paragraph = `

Rapid India Football Club isn’t just a team — it’s a movement. Built on passion, pride, and purpose, we are dedicated to taking Indian football to new heights, nurturing young talent, and creating a legacy that inspires generations.`;

  return (
    <>
      <Slidebar header={header} paragraph={paragraph} />

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <div className='heading' style={{ padding: '20px 0 0 0', margin: '10px 0' }}>
          <h2 className='h1'>About Club</h2>
        </div>
        <Typography variant="h3" align='center' gutterBottom fontWeight="bold" color="darkgrey">
          About Us
        </Typography>

        <Typography variant="h6" align="center" color="white" >
          Welcome to Rapid India Football Club — where passion meets performance.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={12} elevation={3} sx={{ p: 3, borderRadius: 3, background: 'gray' }}>
            {/* <Paper elevation={3} sx={{ p: 3, height: "100%", borderRadius: 3 }}> */}
            <Typography variant="h5" color="#FFFFFFB3" sx={{ fontFamily: 'sans-serif', }}>
              Founded in 2020, Rapid India FC was born out of a dream: to bring professional
              football closer to every Indian home. From grassroots development to national
              tournaments, we are here to create history. <br />

              RAPID INDIA FOOTBALL CLUB VRINDAVAN is the set of projects dedicated to the involvement of target audience in sporting activities via the football coaching promote and the training of all adults involved. The training proposal is aimed at national and international sports clubs, both amateur and professional, sports, coaches, managers, federations, institutions who in various ways, aimed to generate a sporting culture and organizational excellence in their territory.

              RAPID INDIA FOOTBALL CLUB VRINDAVAN is true center of innovation, is shaped by a team of sports professional made up of managers, football coaches, teachers and instructors who operate with knowledge and competence in accordance with the Club’s principles and who also aspire to define a new standard for the world of football. Passion, excellence, sophistication and teamwork are the building blocks of the project which by sharing the RAPID INDIA method and using guideline, crocheting programs and dedicated services, sports development of all the youngers involved in football and sports activities.

              RAPID INDIA FOOTBALL CLUB VRINDAVAN an academy exports our football philosophy worldwide, selected schools, trained by the Club, with the aim of developing both players and individuals in line with RAPID INDIA FOOTBALL CLUB VRINDAVAN style.

            </Typography>
            {/* </Paper> */}
          </Grid>
          <Grid size={6}>
            <Typography variant="h5" align='center' gutterBottom color="darkgrey" fontWeight="bold" >
              Our Story
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography variant="h5" align='center' gutterBottom color="darkgrey" fontWeight="bold">
              Our Mission
            </Typography>
          </Grid>
          <Grid size={6} sx={{ p: 3, borderRadius: 3, background: 'gray' }}>
            {/* <Paper elevation={3} sx={{ height: "100%", borderRadius: 3 }}> */}
            
            <Typography variant="body1" color="#FFFFFFB3">
              Founded in 2023, Rapid India FC was born out of a dream: to bring professional
              football closer to every Indian home. From grassroots development to national
              tournaments, we are here to create history.
            </Typography>
            {/* </Paper> */}
          </Grid>
          
          <Grid size={6} sx={{ p: 3, borderRadius: 3, background: 'gray' }}>
            {/* <Paper elevation={3} sx={{ height: "100%", borderRadius: 3 }}> */}
            
            <Typography variant="body1" color="#FFFFFFB3">
              ⚽ Promote football at grassroots level <br />
              ⚽ Provide world-class training to players <br />
              ⚽ Represent India on national & global platforms <br />
              ⚽ Unite communities through football
            </Typography>
            {/* </Paper> */}
          </Grid>
        </Grid>

        <Box textAlign="center" py={5}>
          <Typography variant="h5" gutterBottom color="darkgrey">
            Join the Movement
          </Typography>
          <Typography variant="body1" color="white" maxWidth="md" mx="auto">
            Whether you’re a fan, a player, or someone who loves the beautiful game — Rapid India FC is your home.
            Together, we play. Together, we grow.
          </Typography>
          <Typography variant="h6" color="darkgrey" sx={{ mt: 2, fontWeight: 'bold' }}>
            #OneTeamOneDream
          </Typography>
        </Box>
      </Container>
    </>
  )
};
