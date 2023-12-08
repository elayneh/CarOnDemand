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
////

import { useFormik } from "formik";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

//
// import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../../redux/auth/userSlice";
// import { RootState } from "../../redux/store";
import { IconButton } from "@mui/material";
import { navigationUtils } from "../../../utils/utils";
// import { useNavigate } from "react-router-dom";

////
const theme = createTheme();

function SignIn() {
  const { loginCredential } = useSelector(
    (state: RootState) => state.userAuthentication
  );
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
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

  ////////////////////////

  // return (
  //   <ThemeProvider theme={theme}>
  //     <div
  //       style={{
  //         backgroundImage: "url(./../../assets/images/avatar/bgImage.jpeg)",
  //         backgroundRepeat: "no-repeat",
  //         backgroundColor: "gray",
  //         backgroundSize: "cover",
  //         backgroundPosition: "center",
  //         backgroundAttachment: "fixed",
  //         height: "100vh",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Container component="main" maxWidth="sm">
  //         <CssBaseline />
  //         <Box
  //           sx={{
  //             marginTop: 1,
  //             display: "flex",
  //             flexDirection: "column",
  //             alignItems: "center",
  //             boxShadow: 3,
  //             borderRadius: 2,
  //             backgroundColor: "white",
  //             px: 3,
  //             py: 6,
  //           }}
  //         >
  //           <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
  //             <LockOutlinedIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign In
  //           </Typography>
  //           <Box component="form" noValidate sx={{ mt: 3 }}>
  //             <Grid container spacing={2}>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   fullWidth
  //                   id="email"
  //                   label="Email Address"
  //                   name="email"
  //                   autoComplete="email"
  //                   value={email}
  //                   onChange={handleEmailChange}
  //                 />
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <TextField
  //                   required
  //                   fullWidth
  //                   name="password"
  //                   label="Password"
  //                   type="password"
  //                   id="password"
  //                   autoComplete="new-password"
  //                   value={password}
  //                   onChange={handlePasswordChange}
  //                 />
  //               </Grid>
  //             </Grid>
  //             <Button
  //               onClick={handleLogin}
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               sx={{ mt: 3, mb: 2 }}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link
  //                   href="#"
  //                   variant="body2"
  //                   style={{ textDecoration: "none" }}
  //                 >
  //                   Forgot password?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <p>
  //                   Don't have an account?&nbsp;&nbsp;
  //                   <Link
  //                     href="/user/register"
  //                     variant="body2"
  //                     style={{ textDecoration: "none" }}
  //                   >
  //                     Sign Up
  //                   </Link>
  //                 </p>
  //               </Grid>
  //             </Grid>
  //           </Box>
  //         </Box>
  //       </Container>
  //     </div>
  //   </ThemeProvider>
  // );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await dispatch(loginUserRequest(values));
        if (localStorage.getItem("carondemandToken")) {
          console.log("TOKEN: ", localStorage.getItem("carondemandToken"));
          navigate("/user/dashboard");
        }
      } catch (error) {
        console.error("Error during user login:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  
  
  const { loading, error } = useSelector(
    (state: RootState) => state.userAuthentication
  );

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
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container component="main" maxWidth="sm">
          <Box
            sx={{
              marginTop: 10,
              marginBottom: 10,
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            {loading && <h4 style={{ color: "#1976d2" }}>Login loading...</h4>}
            {error && (
              <h3 style={{ color: "red" }}>Incorrect email or password</h3>
            )}
            <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="new-password"
                    {...formik.getFieldProps("password")}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 3,
                  marginBottom: 2,
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ flex: 1, marginRight: 1 }}
                >
                  Login
                </Button>
                <Button
                  type="reset"
                  onClick={() => formik.resetForm()}
                  sx={{
                    flex: 1,
                    color: "white",
                    background: "#FF9F61",
                    "&:hover": {
                      background: "#FF6961",
                    },
                  }}
                >
                  Reset
                </Button>
              </Box>
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
            {/* </form> */}
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default SignIn;
