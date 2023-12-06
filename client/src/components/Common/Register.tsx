import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

//
import { useDispatch, useSelector } from "react-redux";
import { registerUserRequest } from "../../redux/auth/userSlice";
import { RootState } from "../../redux/store";
import { IconButton } from "@mui/material";
import { navigationUtils } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(32, "Must be 32 character or less")
        .required("Required"),
      lastName: Yup.string()
        .max(32, "Must 32 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(16, "Must be 16 characters or less")
        .min(8, "Must be 8 characters or more")
        .matches(
          passwordRegex,
          "Should include lowercase and uppercase letter, special characters, and numbers"
        )
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (Object.keys(formik.errors).length === 0) {
          await dispatch(registerUserRequest(values));
          if (localStorage.getItem("token")) {
            console.log("TOKEN: ", localStorage.getItem("token"));
            navigate("/user/dashboard");
          }
        }
      } catch (error) {
        console.error("Error during user registration:", error);
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
          backgroundImage:
            "url(./../../assets/images/avatar/bgImage.jpeg)",
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
              Sign up
            </Typography>
            {loading && (
              <h4 style={{ color: "#1976d2" }}>Registration loading...</h4>
            )}

            {/* <form onSubmit={formik.handleSubmit}> */}
            <Box component="form" sx={{ mt: 3 }} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps("firstName")}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    sx={{
                      ...(formik.touched.firstName && formik.errors.firstName
                        ? { borderColor: "red" }
                        : { borderColor: "green" }),
                    }}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="family-name"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    {...formik.getFieldProps("lastName")}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    sx={{
                      ...(formik.touched.lastName && formik.errors.lastName
                        ? { borderColor: "red" }
                        : { borderColor: "green" }),
                    }}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                  ) : null}
                </Grid>
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
                    {...formik.getFieldProps("email")}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    sx={{
                      ...(formik.touched.email && formik.errors.email
                        ? { borderColor: "red" }
                        : { borderColor: "green" }),
                    }}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
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
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    sx={{
                      ...(formik.touched.password && formik.errors.password
                        ? { borderColor: "red" }
                        : { borderColor: "green" }),
                    }}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  ) : null}
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
                  disabled={
                    Object.keys(formik.touched).length === 0 ||
                    Object.keys(formik.errors).length > 0
                  }
                >
                  SignUp
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
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <p>
                    Already have an account?&nbsp;&nbsp;
                    <Link
                      href="/user/login"
                      variant="body2"
                      style={{ textDecoration: "none" }}
                    >
                      Sign in
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
export default SignUp;
