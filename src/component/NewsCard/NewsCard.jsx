import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import player1 from "../../assets/player1.jpg";

const NewsPage = ({ newsArticles }) => {
  const navigate = useNavigate()
  
  return (
    <Box sx={{ bgcolor: "none", py: 4 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color="darkgrey" gutterBottom>
          Latest News & Updates
        </Typography>
        <Typography variant="h6" color="white">
          Stay informed with all the latest happenings from Rapid India FC
        </Typography>
      </Container>

      {/* Featured News */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, borderRadius: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: { md: "50%" } }}
            image={player1 || "News Image"}
            alt="Featured News"
          />
          <CardContent sx={{ bgcolor: "#121212", color: "#fff", p: 4 }}>
            <Typography variant="h5" color="#EE1E46" gutterBottom>
              Rapid India FC Wins State Championship!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              A memorable night for the club as Rapid India FC triumphed 3-1 in the finals. A new chapter
              begins in Indian football with our team at the forefront. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ducimus amet nihil sed voluptate deserunt assumenda quaerat, placeat minima saepe, earum tenetur illo quas quos id dolorem quo eligendi excepturi?
            </Typography>
            <Button variant="contained" color="primary" sx={{ borderRadius: 3, background: '#EE1E46' }}>
              Read More
            </Button>
          </CardContent>
        </Card>
      </Container>
      {/* Recent News Grid */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Recent News
        </Typography>
        <Grid container spacing={2}>

          {newsArticles.map((item) => (
            <Grid size={{xl:3,md:4,sm:6,xs:12}} key={item.id} >
              <Card sx={{ bgcolor: "#121212",borderRadius: 2}}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image || "News Image"}
                  alt="News Image"
                />
                <CardContent sx={{bgcolor: "none",color:'#fff'}}>
                  <Typography variant="h6" color="#FFFFFFB3" gutterBottom>
                    {item.title || 'title'}
                  </Typography>
                  <Typography variant="body2" >
                    {item.description || 'description'}Short description of the news article. Catchy, informative, inviting users to read more.
                  </Typography>
                  <Button variant="text" onClick={()=>navigate(`/news/${item.id}`)} sx={{ mt: 1,background:'#EE1E46',color:"#fff" }}>
                   Read More →
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))  }

        </Grid>
      </Container>

      {/* Upcoming Fixtures */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        {/* <Typography variant="h5" gutterBottom> */}
        <h2 className="h1" style={{ margin: '10px 0 30px 0' }}>
          Upcoming Fixtures
        </h2>
        {/* </Typography> */}
        <Paper sx={{ p: 3, bgcolor: "#EE1E46", color: "#fff", borderRadius: 2 }}>
          <Typography variant="body1">
            🏟️ Rapid India FC vs Mumbai Strikers — <strong>22 June 2025</strong>
          </Typography>
          <Typography variant="body1">
            🏟️ Rapid India FC vs Delhi Warriors — <strong>29 June 2025</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default NewsPage;
