import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <Container maxWidth="xs">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h3">404</Typography>
            <Typography variant="h6">
              The page you're looking for doesn't exist.
            </Typography>
            <Button variant="contained" onClick={() => navigate("/")}>
              Back Default Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src="./../../../assets/images/notFound.jpg"
              alt=""
              width={200}
              height={100}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
