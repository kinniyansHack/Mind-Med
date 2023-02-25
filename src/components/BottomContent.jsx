import * as React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function BottomContent() {
  return (
    <Container>
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
            <img
              src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/HD.jpg"
              alt=""
              style={{ width: "127px",paddingLeft:'25%'}}
            />
            <Typography>
              Durdans Hospital is a private hospital committed to delivering
              exceptional healthcare across a range of specialties for more than
              75 years.
            </Typography>
          </Box>
          <Box gridColumn="span 3">
            <Typography variant="h6">CONTACT US</Typography>
            <Typography>
              Phone numbers: <br/> +94 (0)11 2140 000 <br/> +94 (0)11 2140 040
            </Typography>
            <Typography>E-mail: <br/> contactus@durdans.com</Typography>
          </Box>
          <Box gridColumn="span 3">
            <Typography>Durdans Hospital</Typography>
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/2.png" alt="" />
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/1.png" alt="" />
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/3.png" alt="" />
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/4.png" alt="" />
            <Typography>Durdans Laboratories</Typography>
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/2.png" alt=""/>
          </Box>
          <Box gridColumn="span 3">
            <Typography>Enhance by Durdans</Typography>
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/1.png" alt="" />
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/2.png" alt="" />
            <Typography>Durdans Dental Clinic</Typography>
            <img style={{height:'40px',width:'40px'}} src="https://durdans.mdcreations.work/wp-content/uploads/2022/10/2.png" alt="" />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
