import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header/>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "" }}
          variant="contained"
        >
          <Typography variant="h3">Browse Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
