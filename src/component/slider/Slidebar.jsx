import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/material/Grid';
import '../../App.css'
import Button from '@mui/material/Button';

export default function MediaCover({header,paragraph,img}) {
  return (
    <>
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0, height: '90vh',}}
      >
        <div className='div'></div>
        <Card component="li" sx={{ height:{xl:'90vh',md:'90vh',xs:'80vh'},  flexGrow: 1, borderRadius: "0", border: 'none' }}>
          <CardCover>
            <img
              src={img}
              //srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
              style={{ opacity: 1 }}
            />
          </CardCover>
          <CardContent>
            <Typography
            component="div"
              level="body-lg"
              textColor="#fff"
              sx={{ fontWeight: 'lg', 
              // mt: { xs: 12, sm: 18 },
               }}
            >
              {/* <Grid container spacing={1} sx={{position:"absolute",top:50}}> */}
                <Grid size={12} p={{xl:6,md:6,xs:3}} mx={'auto'} sx={{display:'flex',}}>

                  <Typography style={{width:'100%',height:'auto',textAlign:'center',}}>
                    <Typography component={'p'} variant='h1' sx={{color:'#FFFFFF',fontSize:{md:'60px',sm:'45px',xs:'35px'}}}>{header}</Typography>
                    <p style={{color:'#FFFFFFB3'}}>{paragraph}</p>
                    <Button variant="contained" sx={{background:"#EE1E46",my:5}} >JOIN CLUB</Button>
                  </Typography>
                </Grid>
              {/* </Grid> */}
              
            </Typography>
          </CardContent>
        </Card>

      </Box>

    </>
  );
}
