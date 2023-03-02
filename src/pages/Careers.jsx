import BottomContent from "../components/BottomContent";
import CareeCard from "../components/CareerCard";
import CareerHero from "../components/CareerHero";
import CareerMain from "../components/CareerMain";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Careers() {
    return (
        <div>
        <Header/>
        <NavBar/>
        <CareerHero/>
        <CareerMain/>
        <CareeCard/>
        <hr/>
        <BottomContent/>
        <Footer/>
        </div>
    )
}

export default Careers;