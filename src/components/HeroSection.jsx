import { Container } from "@mui/system";
import HeroImage from '../assets/hero.jpg'
import * as React from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';



function HeroSection() {
    return (
        <Container style={{height:'68vh'}}>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid  md={6}>
        <Box sx={{ml:'2rem',mt:'10rem'}}>
        <Typography variant="h4" sx={{mb:'1.5rem'}} color="green">Experience the best in healthcare at Mind-Med hospital's new Alfred Place Wing</Typography>
        <Typography variant="h6" sx={{mb:'1.5rem'}} color='gray'>Trust in us for all your healthcare needs</Typography>
        <Button variant="contained" color="success" size="large">Book an Appoinment</Button>
        </Box>
        </Grid>
        <Grid md={6}>
            <img style={{maxWidth: '100%',height: 'auto',padding: 0,margin: 0,marginTop:'5rem'}} src={HeroImage} alt='hero-img'/>
        </Grid>
        </Grid>
        </Container>
        
    )
}


export default HeroSection;