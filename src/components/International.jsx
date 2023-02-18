import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

function International() {
    return (
        <Box style={{backgroundColor:'rgb(244, 244, 244)'}}>
        <Container>
        <Box style={{display:'flex',gap:'32px'}} sx={{p:'4rem 0rem'}}>
        <Box>
            <img style={{width:'407px',height:'264.125px'}} src='https://www.durdans.com/wp-content/uploads/2022/11/f-s.png' alt='internatinal-img'/>
        </Box>
        <Box>
            <Typography variant='h4' color={'green'} sx={{mb:'1.5rem'}}>International Patient Care</Typography>
            <Typography color={'GrayText'}>Mind Med has a dedicated team to handle the care of international patients within the hospital. This includes coordinating not only the patient’s stay at the hospital and insurance coverage but also airport drop off and pickups as well as hotel accommodation. Durdans being a JCI-accredited hospital meets international standards in healthcare. With state-of-the-art facilities and a highly skilled team patients are guaranteed a smooth recovery process.</Typography>
        </Box>
        </Box>
        </Container>
        </Box>
    )
}

export default International;