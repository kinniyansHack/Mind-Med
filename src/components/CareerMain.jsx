import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function CareerMain() {
    return (<Container>
    <Grid container spacing={3} sx={{ flexGrow: 1 , pt:'4rem'}}>
    <Grid  md={6}>
    <Typography variant="h4" color={"green"} mb={'16px'}>Our Working Culture</Typography>
    <Typography pr={'48px'} sx={{color:'#6D6E71'}}>At Durdans Hospital, we aim to build a talent pool of friendly and passionate team members who are as dedicated as we are to providing world-class care and support services.<br/><br/>
We work hard to ensure our staff are as proud of us as we are of them. The standards we set for care and service are high. Our team members rise to the challenge, going above and beyond to meet and exceed those standards every time.<br/><br/>

We value ideas and feedback. Our teams and departments are organised in a way that opens up communication channels from the bottom up, and we empower staff across all levels to share their insights.<br/><br/>

We invest in our team, encouraging career growth and long-term personal and professional development. Knowing we support them, each of our team members is a proud ambassador for our brand, confident that working with us enhances their career.<br/><br/>

The Durdans Hospital team ensures that everyone who visits us enjoys exceptional healthcare in a welcoming and supportive environment.</Typography>
    </Grid>
    <Grid md={6}>
        <img style={{maxWidth: '100%'}} src={'https://www.durdans.com/wp-content/uploads/2017/06/Why_work_for_us_image_1.png'} alt='hero-img'/>
    </Grid>
    </Grid>
    </Container>)
}