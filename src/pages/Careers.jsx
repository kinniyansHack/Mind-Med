import BottomContent from "../components/BottomContent";
import CareerCard from "../components/CareerCard";
import CareerHero from "../components/CareerHero";
import CareerMain from "../components/CareerMain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import careerCard from "../careerCard"
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
function Careers() {
    return (
        <div>
        <Header/>
        <NavBar/>
        <CareerHero/>
        <CareerMain/>
        <Container>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
        <CareerCard  paraColor='#B0B0B0' textColor='#0070CC' bgColor='#F4F4F4' title={careerCard[0].title} content={careerCard[0].content}/>
        <CareerCard  paraColor='#FFFFFF' textColor='#FFFFFF' bgColor='#01BBB3'title={careerCard[1].title} content={careerCard[1].content}/>
        <CareerCard  paraColor='#FFFFFF' textColor='#FFFFFF' bgColor='#0070CC'title={careerCard[2].title} content={careerCard[2].content}/>
        </div>
        </Container>
        <hr/>
        <BottomContent/>
        <Footer/>
        </div>
    )
}

export default Careers;