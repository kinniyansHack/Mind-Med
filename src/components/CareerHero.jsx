import React from 'react';
import { Paper, Typography,Box, Grid } from '@mui/material';
import { Container } from '@mui/system';



export default function CareerHero(){
        return(
            <div>
            <Paper style={{backgroundImage: `url(${'https://www.durdans.com/wp-content/uploads/2017/06/banner-texture.png'})`,backgroundColor:"#27C6BE"}} sx={{height:'25vh'}}>
            <Container>
            <Box pt={'64px'}>
                <Typography variant='h3' fontSize={'30px'} color={'white'}>Careers</Typography>
                <Typography fontSize={'16px'} color={'white'}>Home / Careers</Typography>
                </Box>
                </Container>
            </Paper>
            <Paper sx={{height:'10vh',backgroundColor:"#27C6BE"}}>
            <Container>
            <Grid container spacing={3} sx={{flexGrow:1,paddingTop:'18px'}}>
                <Grid md={3}><Typography color={'white'} sx={{fontSize:'18px',fontWeight:'bold'}}>Our Working Culture</Typography></Grid>
                <Grid md={3}><Typography color={'white'} sx={{fontSize:'18px',fontWeight:'bold'}}>Latest Opportunity</Typography></Grid>
                <Grid md={3}><Typography color={'white'} sx={{fontSize:'18px',fontWeight:'bold'}}>Nursing School</Typography></Grid>
                <Grid md={3}><Typography color={'white'} sx={{fontSize:'18px',fontWeight:'bold'}}>Our Employees Say</Typography></Grid>
                </Grid>
                </Container>
            </Paper>
            </div>
        )
    }