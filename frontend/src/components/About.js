import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header/>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "" }} variant="h2">
          Book Store CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "" }} variant="h3">
          <br/>
          By Zoya Charaniya and 
             Vedant Shahu  
        </Typography>
      </Box>
    </div>
  );
};

export default About;
