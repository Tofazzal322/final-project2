import { Button, Container, Grid, Typography } from "@mui/material";
// import { fontSize } from "@mui/system";
import React from "react";
import dentalImg from "../../images/treatment.png";

const Exceptional = () => {
  return (
    <Container>
      <Grid
        container
        style={{ marginTop: "50px", border: "1px solid darkgray", padding: 20 }}
      >
        <Grid xs={12} md={6}>
          <img style={{ width: 350, height: 300 }} src={dentalImg} alt="" />
        </Grid>
        <Grid style={{ textAlign: "left" }} xs={12} md={6}>
          <Typography variant="h4">
            {" "}
            Exceptional Dental <br /> Care, on Your Terms
          </Typography>
          <Typography sx={{ mt: 2, width: 400, color: "gray" }}>
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis recusandae error labore, quaerat nobis aliquid
            voluptatum explicabo officia suscipit molestias ipsa eligendi
            quisquam laudantium in nulla ab ipsum unde minus impedit architecto.
            Vel exercitationem officiis, ipsum qui ex laborum suscipit animi
            magnam
          </Typography>
          <Button
            sx={{
              mt: 3,
              background: "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)",
            }}
            variant="contained"
          >
            {" "}
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Exceptional;
