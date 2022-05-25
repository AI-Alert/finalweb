import React from 'react';
// import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Banner from './Common/Banner';

const Home = () => {
return(
    <React.Fragment>
    <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="./posts"
              sx={{ my: 1, mx: 1.5 }}
            >
              See Posts
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="./signIn" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
      <Banner/>
      </React.Fragment>
    // <div>
    //     <h1>Home Page</h1>
    //     <li><Link to="/users" replace >Users</Link></li> 
    // </div>
    );
}
export default Home;