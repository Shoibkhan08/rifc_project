import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';


export default function NewsArticle ({data}) {
    const { id } = useParams();
    const navigate = useNavigate();

    const article = data.find(item => item.id === parseInt(id));

    if (!article) return <Typography color="#fff" textAlign="center" mt={10}>Loading or Article Not Found...</Typography>;


    return (
        <>
            <Grid container spacing={4} padding={5}   >
            <Grid size={{xl:12,md:12,sm:12,xs:12}} display='flex' justifyContent="center">
                <Card sx={{ borderRadius: 2,bgcolor:'#121212' }}>
                    <CardMedia
                        component="img"
                        height="380"
                        image={article.image}
                        alt="News Image"

                    />
                    <CardContent>
                        <Typography variant="h4" gutterBottom color='darkgrey'>
                             {article.title} 
                        </Typography>
                        <Typography variant="body2" color="#fff">
                            {article.description}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea rerum fuga ab et iusto accusantium mollitia, est libero dolorum, at quo possimus maxime illum itaque quisquam placeat cum sunt quam.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ipsum culpa sit pariatur laboriosam dolorem at ducimus, unde consectetur voluptatum voluptates temporibus animi corporis, odio expedita atque, aliquid quia saepe.
                        </Typography>
                        <Button variant="text" onClick={() => navigate('/news')} sx={{ mt: 2,bgcolor:'#EE1E46',color:'white',px:3 }}>
                            Back to News
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
        </>
    )
}

