import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from "../../images/chair.png";
import Calendar from '../Shared/Calendar';

const AppointmentHeader = ({ date, setDate }) => {

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "100%" }} src={chair} alt="chair" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
