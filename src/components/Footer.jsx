// function Footer(params) {
//     return
// }

// export default Footer;

import { Box, Container, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#343434",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="#A2A2A2" variant="subtitle1">
              {`Copyright ${new Date().getFullYear()} © Durdans. All rights reserved | Powered by KinniyansHack`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;