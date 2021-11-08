import React from 'react';
import { Grid } from "@mui/material";
import Calendar from "../Shared/Calendar";
import AppointmentData from "./AppointmentData";
import Typography from "@mui/material/Typography";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";


const DashboardHome = () => {
     const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Calendar date={date} setDate={setDate}></Calendar>
          </Grid>
          <Grid sx={{ pe: 8 }} item xs={12} md={8}>
            <Typography sx={{color:'blue', fontWeight:600}}> Appointments:  </Typography>
            <AppointmentData date={date}></AppointmentData>
          </Grid>
        </Grid>
    );
};

export default DashboardHome;