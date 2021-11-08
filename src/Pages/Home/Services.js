import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "./Service";
import fluoride from "../../images/fluoride.png";
import cavity from "../../images/cavity.png";
import whitening from "../../images/whitening.png";
// import { fontSize } from "@mui/system";

const services = [
  {
    name: "Fluoride Treatment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia aut earum, quis tempore ullam corrupti id eius, necessitatibus, reprehenderit ab ducimus! Incidunt",
    img: fluoride,
  },
  {
    name: "Fluoride Treatment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia aut earum, quis tempore ullam corrupti id eius, necessitatibus, reprehenderit ab ducimus! Incidunt",
    img: cavity,
  },
  {
    name: "Fluoride Treatment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia aut earum, quis tempore ullam corrupti id eius, necessitatibus, reprehenderit ab ducimus! Incidunt",
    img: whitening,
  }
];

const Services = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
          <Container>
              <Typography variant="h6">
                  OUR SERVICES
              </Typography>
              <Typography variant="h4" sx={{ mb:'20px', color:'blue', fontWeight:'500'}}>
                  SERVICES WE PROVIDE
              </Typography>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid  item xs={4} sm={4} md={4} key={index}>
            <Service service={service}></Service>
          </Grid>
        ))}
      </Grid>
     </Container>
    </Box>
  );
};

export default Services;
