import React from 'react';
import { Paper, Typography } from '@mui/material';



export default function CareerHero(){
        return(
            <div>
            <Paper style={{backgroundImage: `url(${'https://www.durdans.com/wp-content/uploads/2017/06/banner-texture.png'})`,backgroundColor:"#27C6BE"}} sx={{height:'25vh'}}>
                <Typography>Careers</Typography>
                <Typography>Home / Careers</Typography>
            </Paper>
            <Paper sx={{height:'10vh',backgroundColor:"#27C6BE"}}></Paper>
            </div>
        )
    }