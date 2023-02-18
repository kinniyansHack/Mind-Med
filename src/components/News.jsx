import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
// import newsCard from '../newsCard';
export default function News(props) {
  return (
    <Container>
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'#F8F8F9'}}>
      <CardMedia
        component="img"
        alt="img"
        height="300"
        image={props.imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.newsTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.newsPara}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.btnTxt}</Button>
      </CardActions>
    </Card>
    </Container>
  );
}