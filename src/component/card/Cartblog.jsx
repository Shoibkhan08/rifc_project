import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
const lightgray = grey[900];

export default function MediaControlCard({img, title, name}) {
    // console.log(img)
    return (
        <>
            <Card sx={{ display: 'flex', bgcolor: lightgray, color: 'darkgray',mx:2,height:'200px'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 151,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}
                    image={img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto',py:4 }}>
                        <Typography component="div" variant="p" color='darkgrey' sx={{fontFamily:'sans-serif',fontSize:'12px',fontStyle:"bold",fontWeight:600}}>
                            {title}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'white' }}
                        >
                            {name}
                            
                        </Typography>

                        <Typography component="div" variant="p">
                            <p style={{fontSize:'14px'}}>Lorem ipsum  consectetur adipisicing elit. </p>
                            <a href="/" style={{color:'#EE1E46',textDecoration:'none',fontFamily:"sans-serif"}}>Read more</a>
                        </Typography>

                    </CardContent>
                </Box>

            </Card>
        </>
    );
}
