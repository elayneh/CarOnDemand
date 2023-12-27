import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { registerUserRequest } from "../redux/auth/userSlice";
import Dashboard from "./DashboardNav";

const Profile = () => {
  const user = useSelector((state: RootState) => state.userAuthentication.user);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // dispatch(registerUserRequest({ userData }));
    alert("User data updated successfully!!");
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Handle cancel logic, e.g., revert changes
    setUserData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Dashboard />
      <Box sx={{ margin: "0 auto", width: "90%", mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom align="center">
              User Profile
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              value={userData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              value={userData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={userData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            {isEditing ? (
              <>
                <Button
                  onClick={handleSaveClick}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button
                  onClick={handleCancelClick}
                  variant="outlined"
                  sx={{ marginLeft: 2 }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                onClick={handleEditClick}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
