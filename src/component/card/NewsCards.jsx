import React from "react";
import { Card, CardMedia, Grid, Typography } from '@mui/material';
import img1 from '../../assets/img_1.jpg'
import img2 from '../../assets/img_2.jpg'
import img3 from '../../assets/img_3.jpg'
import CardContent from '@mui/material/CardContent';
import { grey } from '@mui/material/colors';
const lightgray = grey[900];

const playerData = [
  {
    name: "Player 1",
    imageUrl: img1, // Replace with your image URL
  },
  {
    name: "Player 2",
    imageUrl: img2, // Replace with your image URL
  },
  {
    name: "Player 3",
    imageUrl: img3, // Replace with your image URL
  },
];

const NewsCards = () => {

  return (
    <>
      {playerData.map((player, index) => (
        <Grid columns={{ xl: 3, md: 3, sm: 6, xs: 12 }} key={index}
          sx={{
            transition: '0.3s',
            '&:hover': {
              boxShadow: '10px 20px 40px white)', // adjust as needed
              transform: 'scale(1.02)', // optional: for zoom effect
            }
          }}
        >
          <Card sx={{
            maxWidth: 345,
            height: 460,
            border: '1px solid darkgrey',
            boxSizing: "border-box",
            
          }}>
            <CardMedia
              component="img"
              height="350"
              image={player.imageUrl}
              alt={player.name}
            />

            <CardContent sx={{ bgcolor: lightgray }}>
              <Typography variant="body2" sx={{ color: 'darkgrey', }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/* </Grid> */}
      {/* </Box> */}
    </>
  );
}

export default NewsCards;
