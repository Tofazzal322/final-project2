import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Grid, Typography } from "@mui/material";
// import { TextFields } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        marginTop: 10,
        backgroundColor: "rgba(46, 64, 83)",
        padding: 10,
      }}
    >
      <Typography variant="h5" sx={{ color: "rgba(64, 224, 208)", mb: 2 }}>
        {" "}
        Contact Us{" "}
      </Typography>
      <Typography variant="h3" sx={{ color: "white", mb: 6 }}>
        {" "}
        Always Contact with Us{" "}
      </Typography>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Grid>
          <TextField
            sx={{ backgroundColor: "white", borderRadius: 1 }}
            fullWidth
            label="Email Address*"
            id="email"
          />
          <TextField
            sx={{
              marginTop: 2,
              backgroundColor: "white",
              borderRadius: 1,
            }}
            fullWidth
            label="Subjects*"
            id="subjects"
          />
          <TextField
            sx={{
              marginTop: 2,
              backgroundColor: "white",
              borderRadius: 1,
            }}
            fullWidth
            label="Yor Message*"
            id="message"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              p: 1,
              background: "linear-gradient(to right, #33ccff 0%, #ff99cc 100%)",
              color: "white",
            }}
          >
            {" "}
            Submit
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
