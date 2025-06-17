import React from "react"
import { Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

const TeamSection = ({title,data}) => {
  return (
    <div style={{  padding: '2em',color:'lightgray' }}>
      <Typography variant="h4" textAlign={'center'} >
        {title}
      </Typography>
      <Typography variant="subtitle1" textAlign={'center'} gutterBottom>
        Our philosophy is simple; hire great people and give them the resources and support to do their best work.
      </Typography>
      <Grid container spacing={3} mt={5} justifyContent={'center'}>
        {data.map((member, index) => (
          <Grid columns={{ xl: 3, md: 4, sm: 6, xs: 12 }} key={index}>
            <Card sx={{maxWidth: 250,
            height: 'auto',
            overflow:'hidden',
            border:'none',
            background:'none',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            transition:'0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow:' 0 4px 20px rgba(0, 0, 0, 0.2)', // optional: for zoom effect
            }
            }}>
              <CardMedia
                component="img"
                height="280"
                image={member.image} // Replace with the actual image path
                alt={member.name}
                sx={{borderRadius:'10px'}}
              />
              <CardContent>
                <Typography variant="h6" color='white'>
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" color='white'>
                  {member.role}
                </Typography>
                <Typography variant="body2" color='white'>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TeamSection;
