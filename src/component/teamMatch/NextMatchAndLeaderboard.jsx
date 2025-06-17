import React from "react";
import { Box, Typography, Grid, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from '@mui/material';
import './style.css'
import logo1 from '../../assets/logo_1.png'
import logo2 from '../../assets/logo_2.png'

const teams = [
    { position: 1, name: 'Football League', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 2, name: 'Soccer', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 3, name: 'Nepal', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 4, name: 'India', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 5, name: 'Dubai', wins: 22, draws: 3, losses: 2, points: 140 },
    { position: 6, name: 'Afganistan', wins: 22, draws: 3, losses: 2, points: 140 },
    // Add more teams here...
];

const leftpanel = {
    backgroundColor: ' #e63946', /* Red button */
    color: 'white',
    border: 'none',
    // borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer'
}

const leftrightpanel = {
    backgroundColor: "#1a1a1a",
    color: 'white',
    border: '2px solid #383838',
    overflow: 'hidden',
    // width: '100%',
    minHeight: '400px',
    

}

const NextMatchAndLeaderboard = () => {
    return (
        <Grid container spacing={2} className="match-info">
            {/* Next Match Section */}
            <Grid size={{md:5,sm:12,xs:12}}  >
                <Paper elevation={3} style={{ ...leftrightpanel }}>
                    <Typography variant="h5" color="primary" sx={{ ...leftpanel }}>Next Match</Typography>
                    <Box display="flex" alignItems="center"  justifyContent='space-around' p={2}>
                        <Grid display={'flex'}justifyContent={'center'}>
                            <img src={logo1} alt="Football League" width={120} />
                            
                        </Grid>
                        
                        <Grid>
                            <Button variant="contained" sx={{ ...leftpanel }}>vs</Button>
                        </Grid>
                        <Grid>
                            <img src={logo2} alt="Soccer" width={120} />
                        </Grid>
                    </Box>
                    <Box display={'flex'} justifyContent={'space-between'} px={6}>
                        <Typography variant="h6">Football League</Typography>
                        <Typography variant="h6">Soccer League</Typography>
                    </Box>
                    <Box sx={{textAlign:'center',color:'darkgrey',}} py={4}>
                        <Typography variant="subtitle1" color="#e63946" py={1} sx={{fontFamily:'sans-serif',fontWeight:600,letterSpacing:'0.8px'}}>World Cup League</Typography>
                        <Typography variant="body1" py={0.2}>December 20th, 2020</Typography>
                        <Typography variant="body1" py={0.2}>9:30 AM GMT+0</Typography>
                        <Typography variant="body1" >New Euro Arena</Typography>
                    </Box>

                    <Box display="flex" p={5} justifyContent="space-between" marginTop={2}>
                        <Typography variant="body2">435 weeks</Typography>
                        <Typography variant="body2">02 days</Typography>
                        <Typography variant="body2">13 hr</Typography>
                        <Typography variant="body2">06 min</Typography>
                        <Typography variant="body2">32 sec</Typography>
                    </Box>
                </Paper>
            </Grid>

            {/* Leaderboard Section */}
            <Grid size={{md:5,sm:12,xs:12}} >
                <Paper elevation={3} style={{ ...leftrightpanel, }} >
                    <Typography variant="h5" sx={{ ...leftpanel }} >Leaderboard</Typography>
                    <TableContainer>
                        <Table >
                            <TableHead sx={{ borderColor: '#383838' }}>
                                <TableRow className='white-text' sx={{ borderColor: '#383838' }}>
                                    <TableCell sx={{ borderColor: '#383838' }}>P</TableCell>
                                    <TableCell sx={{ borderColor: '#383838' }}>Team</TableCell>
                                    <TableCell sx={{ borderColor: '#383838' }}>W</TableCell>
                                    <TableCell sx={{ borderColor: '#383838' }}>D</TableCell>
                                    <TableCell sx={{ borderColor: '#383838' }}>L</TableCell>
                                    <TableCell sx={{ borderColor: '#383838' }}>PTS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teams.map((team) => (
                                    <TableRow key={team.position} className='white-text'>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.position}</TableCell>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.name}</TableCell>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.wins}</TableCell>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.draws}</TableCell>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.losses}</TableCell>
                                        <TableCell sx={{ borderColor: '#383838' }}>{team.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default NextMatchAndLeaderboard;
