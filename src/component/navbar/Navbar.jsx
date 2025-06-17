import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { grey } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import Link from '@mui/material/Link';
import logo from '../../assets/logo1.png'

const lightgray = grey[900];

const pages = ['Home', 'Student', 'About', 'Contact'];
const settings = [
  { id: 1, page: 'HOME', link: '/'},
  { id: 2, page: 'NEWS', link: '/news',},
  { id: 3, page: 'OUR TEAM', link: '/team',},
  { id: 4, page: 'ABOUT', link: '/about',}
  ];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
    <AppBar position="sticky" sx={{opacity:0.8,top:0,background:lightgray}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            <img src={logo} alt="" width={80} height={80} />
            <p style={{padding:'0 5px'}}>FOOTBALL CLUB</p>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }}}
            >
              {settings.map((e) => (
                <MenuItem key={e.id} onClick={handleCloseNavMenu} sx={{}}>
                  <Link to={e.link} sx={{":active":'white'}} >{e.page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FOOTBALL CLUB
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',justifyContent:'right'} }}>
            {settings.map((e) => (  
              <Link key={e.id} href={e.link} 
                style={{
                  textDecoration:'none',
                  color:"white",
                  ":active":{colors:'white'},
                  padding:10,
                  fontSize:'14px'
                  }}>
                  {e.page}
                 </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet/>
    </>
  );
}
export default Navbar;