import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import International from "../components/International";
import NavBar from "../components/NavBar";
import News from "../components/News";
import Welcome from "../components/Welcome";
import newsCard from "../newsCard";
import newsLetter from "../newsLetter";
import Typography from '@mui/material/Typography';
import { Box, Container } from "@mui/system";
import NewsLetter from "../components/NewsLetter";

function Landing() {
    return (
    <div>
    <Header />,
    <NavBar />,
    <HeroSection />,
    <Welcome />,
    <International />,
    <Typography variant='h4' color={'green'} align='center'>Latest News</Typography>
    <Typography align='center' mb={'1rem'}>Checkout for the latest news from Durdans Hospital</Typography>
    <Container>
    <Box style={{display:'flex'}}>
    {newsCard.map((card) => (
        <News key={card.id} imgUrl={card.imgUrl} newsPara={card.newsPara} btnTxt={card.btnTxt} />
      ))}
      </Box>
      </Container>,
      <Container>
      <Typography variant="h4" align="center" color={'green'} mt={'1rem'}>Durdans Newsletter</Typography>
      <Typography align="center">Checkout for the latest news from Durdans Hospital</Typography>
    <Box style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
    {newsLetter.map((letter) => (
        <NewsLetter key={letter.id} imgUrl={letter.imgUrl} text={letter.text} />
      ))}
      </Box>
      </Container>
    
    </div>
    )
}

export default Landing;