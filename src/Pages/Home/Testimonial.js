import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Testimonial = () => {
  return (
    <Box>
      <Container sx={{ textAlign: "left", mt: 8 }}>
        <Typography variant="h6"> TESTIMONIAL</Typography>
        <Typography sx={{ mt: 2 }} variant="h4">
          {" "}
          What's Our Patients <br /> Says
        </Typography>
          </Container>
          <Container>
              
          </Container>
    </Box>
  );
};

export default Testimonial;
