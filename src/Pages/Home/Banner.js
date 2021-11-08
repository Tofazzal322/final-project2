import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Container, Typography } from "@mui/material";
// import doctorBig from "../../images/doctor.png";
import bg from "../../images/chair.png";
import chair from "../../images/chair.png";

const bannerBg = {
  background: `url(${bg})`,
  backgroundColor: " rgba(52, 73, 94 , 0.8)",
  backgroundBlendMode: "darken,luminosity",
};

const Banner = () => {
  return (
    <Box  style={bannerBg} sx={{ flexGrow: 1, p:4, mb:5}}>
      <Container >
        <Grid container spacing={2}>
          <Grid sx={{ ps: 8, textAlign: "left" }} xs={12} md={6}>
            <Typography
              sx={{ color: "rgba(64, 224, 208) ", fontWeight: 500, mt: 8 }}
            >
              APPOINTMENT
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                color: "rgba(246, 255, 254 )",
                fontSize: "40px",
                me: "50px",
              }}
            >
              Make An Appointment <br /> Today
            </Typography>
            <Typography
              sx={{ color: "rgba(246, 255, 254 )", textAlign: "left" }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              veniam possimus rerum impedit iure ad?{" "}
            </Typography>
            <Button
              variant="outlined"
              sx={{
                textAlign: "left",
                backgroundColor: "#49E7D6 ",
                color: "white",
                mt: 2,
                fontWeight: "bold",
                p: 2,
              }}
            >
              {" "}
              APPOINTMENT
            </Button>
          </Grid>
          <Grid xs={12} md={6}>
            <CardMedia>
              <img style={{ width: 450, marginTop: 50 }} src={chair} alt="" />
            </CardMedia>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
