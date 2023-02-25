import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';




function Header() {
  return (
    <Container sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
        <Box style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center"}} space={6} sx={{mt:2}}>
        <img style={{ width:143,  height:104  }} src='https://www.durdans.com/wp-content/uploads/2018/01/logo-transparent.png' alt='Logo'/>
        <div>
        <img style={{ width: 130, height: 110 }} src='https://www.durdans.com/wp-content/uploads/2022/11/001.png' alt='calenter-img' />
        <img style={{ width: 130, height: 110 }} src='https://www.durdans.com/wp-content/uploads/2022/11/002.png' alt='health-img' />
        <img style={{ width: 130, height: 110 }} src='https://www.durdans.com/wp-content/uploads/2022/11/003.png' alt='lab-img' />
        <img style={{ width: 130, height: 110 }} src='https://www.durdans.com/wp-content/uploads/2022/11/004.png' alt='pay-img' />
        <img style={{ width: 130, height: 110 }} src='https://www.durdans.com/wp-content/uploads/2022/11/006.png' alt='emergency-img' />
        </div>
        </Box>
    </Container>
  );
}

export default Header;