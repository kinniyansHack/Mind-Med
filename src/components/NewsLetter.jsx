import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';





function NewsLetter(props) {
    const card = (
        <React.Fragment>
          <CardContent>
            <img style={{width:'270px',height:'180px',textAlign:'center'}} src={props.imgUrl} alt=''/>
          </CardContent>
          <CardActions>
            <Typography align='center'>{props.text}</Typography>
          </CardActions>
        </React.Fragment>
      );
  return (
    <Container>
    <Box sx={{ minWidth: 275,mb:2}}>
      <Card>{card}</Card>
    </Box>
    </Container>
  );
}

export default NewsLetter;