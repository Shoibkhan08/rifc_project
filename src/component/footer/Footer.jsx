import React from "react";
import { Box, Typography, Grid } from '@mui/material';

const Footer = () => {
  
  return (
    <Box sx={{ bgcolor: '#111', color: '#ccc', pt: 5, pb: 3 }}>
      <Grid container spacing={4} justifyContent="center" px={4}>
        
        {/* About Section */}
        <Grid columns={{ xs: 4, sm: 8, md: 12 }} >
          <Typography variant="h6" color="darkgrey" gutterBottom>
            Football Club
          </Typography>
          <Typography variant="body2">
            Rapid India football club register in 2020, Third division Football Club
          </Typography>
        </Grid>

        {/* Contact Info */}
        <Grid columns={{ xs: 4, sm: 8, md: 12 }}>
          <Typography variant="h6" color="darkgrey" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: support@mywebsite.com</Typography>
          <Typography variant="body2">Phone: +91-9876543210</Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" pt={4} mt={4} borderTop="1px solid #333">
        <Typography variant="body2" color="#aaa">
          &copy; {new Date().getFullYear()} Football. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
