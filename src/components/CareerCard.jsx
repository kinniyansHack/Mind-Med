import careerCard from "../careerCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";




export default function CareerCard(props) {
    return (
      <Container sx={{marginTop:'48px',marginBottom:'48px'}}>
        <Box sx={{backgroundColor:props.bgColor}} pt={'48px'} pb={'48px'} pl={'32px'} pr={'32px'}>
          <Typography mb={'16px'} variant="h6" color={props.textColor}>{props.title}</Typography>
          <Typography mb={'16px'} color={props.paraColor}>{props.content}</Typography>
          <Button variant="contained" disableElevation>CLICK HERE</Button>
        </Box>
      </Container>
    )
}