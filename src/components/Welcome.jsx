import { Typography } from "@mui/material";
import { Container } from "@mui/system";

function Welcome() {
    return (
        <Container sx={{display:{sm:'block'}}}>
        <Typography variant="h4" align="center">Welcome to Mind-Med Hospital</Typography>
        <Typography variant="h6" align="center">Dedicated to you</Typography>
        <Typography variant="h6" align="center" color="green">Compassion, Innovation & Excellence</Typography>
        <Typography align="center" sx={{mb:'1rem' ,mt:'1rem',color:'GrayText'}}>Since our foundation in 1945, we have built a reputation for regional leadership in medical excellence and innovation, based on a simple philosophy: that improving the health of our community should be driven by passion as well as compassion.</Typography>
        <Typography align="center" sx={{color:'GrayText',mt:'2rem'}}>We offer a range of spacious modern rooms and are equipped with state of critical care units. At Durdans the best consultants, specialists and employees are dedicated to providing exceptional clinical outcomes and the utmost customer satisfaction.</Typography>
        </Container>
    )
}

export default Welcome;