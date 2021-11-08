import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";

const Service = (props) => {
  const { name, img, description } = props.service;
    return (
      <Card sx={{ maxWidth: 345, boxShadow: 0,  border: 0  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{width:'auto', height:'80px', margin: '0  auto', marginTop:'10px' }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
        {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <CardMedia>
    //       <img src={img} alt="" />
    //     </CardMedia>

    //     <Typography variant="h5" component="div">
    //       {name}
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //       {description}
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
};

export default Service;
