import React from "react";
import { Container } from '@mui/material';
import Slidebar from './slider/Slidebar';
import TeamSection from './team/Player';
import img1 from '../assets/img_1.jpg';
import img2 from '../assets/img_2.jpg';
import img3 from '../assets/img_3.jpg';
import person_1 from '../assets/person_1.jpg';
import person_2 from '../assets/person_2.jpg';
import person_3 from '../assets/person_3.jpg';
import person_4 from '../assets/person_4.jpg';
import person_5 from '../assets/person_5.jpg';
import person_6 from '../assets/person_6.jpg';
import img from '../assets/player1.jpg';

export default function OurTeam() {

  const teamMembers = [
  {
    name: 'Sienna Hewitt',
    role: 'Founder & CEO',
    description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
    image: img2,
  },
  {
    name: 'Ashwin Santiago',
    role: 'Engineering Manager',
    description: 'Lead engineering teams at Netflix, Pitch, and Protocol Labs.',
    image: img1,
  },
  {
    name: 'Caitlyn King',
    role: 'Product Designer',
    description: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
    image: img3,
  },
  {
    name: 'Owen Garcia',
    role: 'Frontend Developer',
    description: 'Former frontend developer for Linear, Coinbase, and Postscript.',
    image: img1,
  },
  {
    name: 'Caitlyn King',
    role: 'Product Designer',
    description: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
    image: img2,
  },
  {
    name: 'Owen Garcia',
    role: 'Frontend Developer',
    description: 'Former frontend developer for Linear, Coinbase, and Postscript.',
    image: img3,
  },
];

const leadership = [
  {
    name: "Rajeev Sharma",
    role: "President",
    image: person_5,
  },
  {
    name: "Anjali Mehra",
    role: "Vice President",
    image: person_6,
  },
  {
    name: "Anjali Mehra",
    role: "Vice President",
    image: person_1,
  },
  {
    name: "Anjali Mehra",
    role: "Vice President",
    image: person_2,
  },
];

const coaches = [
  {
    name: "Sunil Kumar",
    role: "Head Coach",
    image: person_1,
  },
  {
    name: "Amit Singh",
    role: "Assistant Coach",
    image: person_2,
  },
  {
    name: "Prakash Rawat",
    role: "Goalkeeping Coach",
    image: person_3,
  },
  {
    name: "Prakash Rawat",
    role: "Goalkeeping Coach",
    image: person_4,
  },
  
];


  const header = 'Team RAPID-INDIA THIRD DIVISION FOOTBALL CLUB (RIFC)';
  const paragraph = 'Rapid India Football Club';
  // const heading = '';
  // const title = '';

  return (
    <>
      <Slidebar header={header} paragraph={paragraph} img={img} />
      
      <Container spacing={2} sx={{ py: 5 }} >
        <div className='heading' style={{ padding: '20px 0 0 0', margin: '10px 0' }}>
          <h2 className='h1'>Our Team</h2>
        </div>
        <TeamSection title="Leadership Team" data={coaches}/>

        <TeamSection title="Coaching Staff" data={leadership}/>
        
        <div className='heading' style={{ padding: '20px 0 0 0', margin: '10px 0' }}>
          <h2 className='h1'>Our Players</h2>
        </div>
        <TeamSection title={'Player'} data={teamMembers} />

      </Container>
    </>
  )
}
