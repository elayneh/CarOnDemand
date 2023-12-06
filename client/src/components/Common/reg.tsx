// import React, { useState, ChangeEvent } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// //
// import { useDispatch, useSelector } from "react-redux";
// import { registerUserRequest } from "../../redux/auth/userSlice";
// import { RootState } from "../../redux/store";

// const theme = createTheme();

// // // export default function SignUp() {
// // //   const { user, loading, error } = useSelector(
// // //     (state: RootState) => state.userAuthentication
// // //   );

// // //   const dispatch = useDispatch();
// // //   const [firstName, setFirstName] = useState(user ? user.firstName : "");
// // //   const [lastName, setLastName] = useState(user ? user.lastName : "");
// // //   const [email, setEmail] = useState(user ? user.email : "");
// // //   const [password, setPassword] = useState(user ? user.password : "");
// // //   const handleFirstnameChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //     setFirstName(event.target.value);
// // //   };
// // //   const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //     setLastName(event.target.value);
// // //   };

// // //   const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //     setEmail(event.target.value);
// // //   };

// // //   const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
// // //     setPassword(event.target.value);
// // //   };

// // //   const handleSignup = async (e: { preventDefault: () => void }) => {
// // //     e.preventDefault();
// // //     await dispatch(
// // //       registerUserRequest({ firstName, lastName, email, password, token: "" })
// // //     );
// // //   };

// // //   return (
// // //     <ThemeProvider theme={theme}>
// // //       <div
// // //         style={{
// // //           backgroundImage: "url(https://source.unsplash.com/random?cars)",
// // //           backgroundRepeat: "no-repeat",
// // //           backgroundColor: "gray",
// // //           backgroundSize: "cover",
// // //           backgroundPosition: "center",
// // //           height: "100vh",
// // //           display: "flex",
// // //           alignItems: "center",
// // //           justifyContent: "center",
// // //         }}
// // //       >
// // //         <Container component="main" maxWidth="sm">
// // //           <Box
// // //             sx={{
// // //               marginTop: 10,
// // //               marginBottom: 10,
// // //               display: "flex",
// // //               flexDirection: "column",
// // //               alignItems: "center",
// // //               boxShadow: 3,
// // //               borderRadius: 2,
// // //               backgroundColor: "white",
// // //               px: 3,
// // //               py: 6,
// // //             }}
// // //           >
// // //             <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
// // //               <LockOutlinedIcon />
// // //             </Avatar>
// // //             <Typography component="h1" variant="h5">
// // //               Sign up
// // //             </Typography>
// // //             {loading && (
// // //               <h4 style={{ color: "#1976d2" }}>Registration loading...</h4>
// // //             )}
// // //             <Box component="form" noValidate sx={{ mt: 3 }}>
// // //               <Grid container spacing={2}>
// // //                 <Grid item xs={12} sm={6}>
// // //                   <TextField
// // //                     autoComplete="given-name"
// // //                     name="firstName"
// // //                     required
// // //                     fullWidth
// // //                     id="firstName"
// // //                     label="First Name"
// // //                     autoFocus
// // //                     value={firstName}
// // //                     onChange={handleFirstnameChange}
// // //                   />
// // //                 </Grid>
// // //                 <Grid item xs={12} sm={6}>
// // //                   <TextField
// // //                     required
// // //                     fullWidth
// // //                     id="lastName"
// // //                     label="Last Name"
// // //                     name="lastName"
// // //                     autoComplete="family-name"
// // //                     value={lastName}
// // //                     onChange={handleLastnameChange}
// // //                   />
// // //                 </Grid>
// // //                 <Grid item xs={12}>
// // //                   <TextField
// // //                     required
// // //                     fullWidth
// // //                     id="email"
// // //                     label="Email Address"
// // //                     name="email"
// // //                     autoComplete="email"
// // //                     value={email}
// // //                     onChange={handleEmailChange}
// // //                   />
// // //                 </Grid>
// // //                 <Grid item xs={12}>
// // //                   <TextField
// // //                     required
// // //                     fullWidth
// // //                     name="password"
// // //                     label="Password"
// // //                     type="password"
// // //                     id="password"
// // //                     autoComplete="new-password"
// // //                     value={password}
// // //                     onChange={handlePasswordChange}
// // //                   />
// // //                 </Grid>
// // //               </Grid>
// // //               <Button
// // //                 onClick={handleSignup}
// // //                 type="submit"
// // //                 fullWidth
// // //                 variant="contained"
// // //                 sx={{ mt: 3, mb: 2 }}
// // //               >
// // //                 Sign Up
// // //               </Button>
// // //               <Grid container justifyContent="flex-end">
// // //                 <Grid item>
// // //                   <p>
// // //                     Already have an account?&nbsp;&nbsp;
// // //                     <Link
// // //                       href="/user/login"
// // //                       variant="body2"
// // //                       style={{ textDecoration: "none" }}
// // //                     >
// // //                       Sign in
// // //                     </Link>
// // //                   </p>
// // //                 </Grid>
// // //               </Grid>
// // //             </Box>
// // //           </Box>
// // //         </Container>
// // //       </div>
// // //     </ThemeProvider>
// // //   );
// // // }

// // ////
// // interface User{
// //   firstName: string,
// //   lastName:string,
// //   email:string,
// //   password:string
// // }
// // export default function SignUp() {
// //   const dispatch = useDispatch();
// //   const validate = (values: User) => {
// //     const errors = { firstName: "", lastName: "", email: "", password: "" };
// //     if (!values.firstName) {
// //       errors.firstName = "First name is required";
// //     } else if (values.firstName.length > 15) {
// //       errors.firstName = "First name must be 15 characters or less";
// //     } else if (!(typeof values.firstName === "string")) {
// //       errors.firstName = "First Name must be a string";
// //     }

// //     if (!values.lastName) {
// //       errors.lastName = "Last name is required";
// //     } else if (values.lastName.length > 20) {
// //       errors.lastName = "Last name must be 20 characters or less";
// //     } else if (!(typeof values.lastName === "string")) {
// //       errors.lastName = "Last name must be a string";
// //     }
// //     if (!values.email) {
// //       errors.email = "Email is required";
// //     } else if (
// //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
// //     ) {
// //       errors.email = "Invalid email address";
// //     }
// //     if (!values.password) {
// //       errors.password = "Password is required";
// //     } else if (8 >= values.password || values.password > 32) {
// //       errors.password = "Password must be between 8 and 32 characters long";
// //     }

// //     return errors;
// //   };

// //   const formik = useFormik({
// //     initialValues: {
// //       firstName: "",
// //       lastName: "",
// //       email: "",
// //       password: "",
// //     },
// //     validate,
// //     onSubmit: values => {
// //       alert(JSON.stringify(values, null, 2));
// //       dispatch(registerUserRequest({ values }));
// //     },
// //   });

// //   const { user, loading, error } = useSelector(
// //     (state: RootState) => state.userAuthentication
// //   );

// //   return (
// //     <form onSubmit={formik.handleSubmit}>
// //       <ThemeProvider theme={theme}>
// //         <div
// //           style={{
// //             backgroundImage: "url(https://source.unsplash.com/random?cars)",
// //             backgroundRepeat: "no-repeat",
// //             backgroundColor: "gray",
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
// //             height: "100vh",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <Container component="main" maxWidth="sm">
// //             <Box
// //               sx={{
// //                 marginTop: 10,
// //                 marginBottom: 10,
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 alignItems: "center",
// //                 boxShadow: 3,
// //                 borderRadius: 2,
// //                 backgroundColor: "white",
// //                 px: 3,
// //                 py: 6,
// //               }}
// //             >
// //               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
// //                 <LockOutlinedIcon />
// //               </Avatar>
// //               <Typography component="h1" variant="h5">
// //                 Sign up
// //               </Typography>
// //               {loading && (
// //                 <h4 style={{ color: "#1976d2" }}>Registration loading...</h4>
// //               )}
// //               <Box component="form" noValidate sx={{ mt: 3 }}>
// //                 <Grid container spacing={2}>
// //                   <Grid item xs={12} sm={6}>
// //                     <TextField
// //                       id="firstName"
// //                       name="firstName"
// //                       type="text"
// //                       required
// //                       fullWidth
// //                       label="First Name"
// //                       autoFocus
// //                       onChange={formik.handleChange}
// //                       value={formik.values.firstName}
// //                     />
// //                     {formik.errors.firstName ? (
// //                       <div>{formik.errors.firstName}</div>
// //                     ) : null}
// //                   </Grid>
// //                   <Grid>
// //                     <TextField
// //                       id="lastName"
// //                       name="lastName"
// //                       type="text"
// //                       required
// //                       fullWidth
// //                       label="Last Name"
// //                       autoFocus
// //                       onChange={formik.handleChange}
// //                       value={formik.values.lastName}
// //                     />
// //                     {formik.errors.lastName ? (
// //                       <div>{formik.errors.lastName}</div>
// //                     ) : null}
// //                   </Grid>
// //                   <Grid item xs={12}>
// //                     <TextField
// //                       required
// //                       fullWidth
// //                       id="email"
// //                       label="Email Address"
// //                       name="email"
// //                       autoComplete="email"
// //                       value={formik.values.email}
// //                       onChange={formik.handleChange}
// //                     />
// //                     {formik.errors.email ? (
// //                       <div>{formik.errors.email}</div>
// //                     ) : null}
// //                   </Grid>

// //                   <Grid item xs={12}>
// //                     <TextField
// //                       required
// //                       fullWidth
// //                       name="password"
// //                       label="Password"
// //                       type="password"
// //                       id="password"
// //                       autoComplete="new-password"
// //                       value={formik.values.password}
// //                       onChange={formik.handleChange}
// //                     />
// //                     {formik.errors.password ? (<div>{formik.errors.password}</div>): null}
// //                   </Grid>
// //                 </Grid>

// //                 <Button
// //                   type="submit"
// //                   fullWidth
// //                   variant="contained"
// //                   sx={{ mt: 3, mb: 2 }}
// //                 >
// //                   Sign Up
// //                 </Button>
// //                 <Grid container justifyContent="flex-end">
// //                   <Grid item>
// //                     <p>
// //                       Already have an account?&nbsp;&nbsp;
// //                       <Link
// //                         href="/user/login"
// //                         variant="body2"
// //                         style={{ textDecoration: "none" }}
// //                       >
// //                         Sign in
// //                       </Link>
// //                     </p>
// //                   </Grid>
// //                 </Grid>
// //               </Box>
// //             </Box>
// //           </Container>
// //         </div>
// //       </ThemeProvider>
// //     </form>
// //   );
// // }

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const SignUp: React.FC = () => {
//   const dispatch = useDispatch();

//   const validate = (values: User) => {
//     const errors: Partial<User> = {};

//     if (!values.firstName) {
//       errors.firstName = "First name is required";
//     } else if (values.firstName.length > 15) {
//       errors.firstName = "First name must be 15 characters or less";
//     }

//     if (!values.lastName) {
//       errors.lastName = "Last name is required";
//     } else if (values.lastName.length > 20) {
//       errors.lastName = "Last name must be 20 characters or less";
//     }

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//       errors.email = "Invalid email address";
//     }

//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 8 || values.password.length > 32) {
//       errors.password = "Password must be between 8 and 32 characters long";
//     }

//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//     validate,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       dispatch(registerUserRequest(values));
//     },
//   });

//   const { loading, error } = useSelector(
//     (state: RootState) => state.userAuthentication
//   );

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <ThemeProvider theme={theme}>
//         <div
//           style={{
//             backgroundImage: "url(https://source.unsplash.com/random?cars)",
//             backgroundRepeat: "no-repeat",
//             backgroundColor: "gray",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "100vh",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Container component="main" maxWidth="sm">
//             <Box
//               sx={{
//                 marginTop: 10,
//                 marginBottom: 10,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 boxShadow: 3,
//                 borderRadius: 2,
//                 backgroundColor: "white",
//                 px: 3,
//                 py: 6,
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                 <LockOutlinedIcon />
//               </Avatar>
//               <Typography component="h1" variant="h5">
//                 Sign up
//               </Typography>
//               {loading && (
//                 <h4 style={{ color: "#1976d2" }}>Registration loading...</h4>
//               )}

//               <Box component="form" noValidate sx={{ mt: 3 }}>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       autoComplete="given-name"
//                       name="firstName"
//                       required
//                       fullWidth
//                       id="firstName"
//                       label="First Name"
//                       autoFocus
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.firstName}
//                     />
//                     {formik.touched.firstName && formik.errors.firstName ? (
//                       <div style={{ color: "red" }}>
//                         {formik.errors.firstName}
//                       </div>
//                     ) : null}
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="lastName"
//                       label="Last Name"
//                       name="lastName"
//                       autoComplete="family-name"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.lastName}
//                     />{" "}
//                     {formik.touched.lastName && formik.errors.lastName ? (
//                       <div style={{ color: "red" }}>
//                         {formik.errors.lastName}
//                       </div>
//                     ) : null}
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="email"
//                       label="Email Address"
//                       name="email"
//                       autoComplete="email"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.email}
//                     />{" "}
//                     {formik.touched.email && formik.errors.email ? (
//                       <div style={{ color: "red" }}>{formik.errors.email}</div>
//                     ) : null}
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       name="password"
//                       label="Password"
//                       type="password"
//                       id="password"
//                       autoComplete="new-password"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.password}
//                     />
//                     {formik.touched.password && formik.errors.password ? (
//                       <div style={{ color: "red" }}>
//                         {formik.errors.password}
//                       </div>
//                     ) : null}
//                   </Grid>
//                 </Grid>
//                 {loading && <div>Loading...</div>}
//                 {error && <div>Error: {error}</div>}

//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign Up
//                 </Button>
//                 <Grid container justifyContent="flex-end">
//                   <Grid item>
//                     <p>
//                       Already have an account?&nbsp;&nbsp;
//                       <Link
//                         href="/user/login"
//                         variant="body2"
//                         style={{ textDecoration: "none" }}
//                       >
//                         Sign in
//                       </Link>
//                     </p>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Container>
//         </div>
//       </ThemeProvider>
//     </form>
//   );
// };

// export default SignUp;
