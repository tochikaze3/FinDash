import React from 'react';
import NavBar from './Navbar'
import { Container, Box, Paper, Typography, ThemeProvider, Styled } from "@mui/material";


const Dashboard = () => {
  return (
  
    <Container maxWidth="sm" sx={{ bgcolor: "#000", height: "50vh", marginTop: "100px" }} >
          <NavBar/>
        
      
        <Box component="section" sx={{ p:1, my:1 }}>
            <Paper >
      <Typography variant = "subtitle1"  sx={{ textAlign: "center", color: "primary.main"}}>
        Welcome, Sophia
      </Typography>
      </Paper>
      </Box>

      <Box >
      <Typography variant = "body1"  sx={{textAlign: "center", color: "primary.main"}}>
       0000 SAVINGS xxxx3366-00
      </Typography>
      </Box>


    <Box  sx={{ p:1}}>
        <Paper background-color='' elevation = '2' variant='outlined' square={false} >
            <Typography variant = "h1"  sx={{my:1, textAlign: "center", color: "primary.main"}}>
       -$125,275.00
      </Typography>
        </Paper>
        </Box>

      <Box  sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        '& > :not(style)': {
          width: 600,
          height: 30,
        },
      }} >
      <Typography variant = "subtitle2"  sx={{ textAlign: "center", color: "primary.main"}}>
       AVAILABLE BALANCE
      </Typography>
      </Box>

      <Box >
      <Typography variant = "h6"  sx={{ textAlign: "center", color: "primary.main"}}>
       Current Balance -$18,720
      </Typography>
      </Box>

     

    </Container>
  )
}

export default Dashboard
