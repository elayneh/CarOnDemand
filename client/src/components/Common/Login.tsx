import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { loginUserRequest } from "../../redux/auth/userSlice";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const theme = createTheme();

function SignIn() {
  const { loginCredential } = useSelector(
    (state: RootState) => state.userAuthentication
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(
    loginCredential ? loginCredential.email : ""
  );
  const [password, setPassword] = useState(
    loginCredential ? loginCredential.password : ""
  );

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await dispatch(loginUserRequest({ email, password }));
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: "url(./../../assets/images/avatar/bgImage.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "gray",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: "white",
              px: 3,
              py: 6,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
              </Grid>
              <Button
                onClick={handleLogin}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <p>
                    Don't have an account?&nbsp;&nbsp;
                    <Link
                      href="/user/register"
                      variant="body2"
                      style={{ textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default SignIn;
