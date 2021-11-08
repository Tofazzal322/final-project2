import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Container, Typography } from "@mui/material";
import doctorBig from "../../images/doctor.png";
import bg from "../../images/appointment-bg.png";

const appointmentBg = {
  background: `url(${bg})`,
  backgroundColor: " rgba(52, 73, 94 , 0.7)",
  backgroundBlendMode: "darken,luminosity",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1, marginTop: "150px" }}>
      <Container >
        <Grid container spacing={0}>
          <Grid xs={12} md={6}>
            <CardMedia>
              <img
                style={{ width: 450, marginTop: -100 }}
                src={doctorBig}
                alt="doctor"
              />
            </CardMedia>
          </Grid>
          <Grid sx={{ ps: 8,textAlign:'left' }} xs={12} md={6}>
                      <Typography sx={{ color: 'rgba(64, 224, 208) ', fontWeight:500, mt:8}} >APPOINTMENT</Typography>
            <Typography sx={{textAlign:'left', color:'rgba(246, 255, 254 )', fontSize:'40px', me:'50px'}} >Make An Appointment <br /> Today</Typography>
            <Typography sx={{color:'rgba(246, 255, 254 )',textAlign:'left'}}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              veniam possimus rerum impedit iure ad?{" "}
            </Typography>
            <Button variant="outlined" sx={{textAlign:'left', background: "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)", color:'white', mt:2, fontWeight:'bold', p:2}} > APPOINTMENT</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
