import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import LDSHome from "../LDSHome";
import fb from "../Firebase";
import { AuthContext } from "./Context";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

const Login = ({ history }) => {
   const classes = useStyles();

   const handleLogin = useCallback(
      async (event) => {
         event.preventDefault();
         const { email, password } = event.target.elements;
         try {
            await fb.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
         } catch (error) {
            alert(error);
         }
      },
      [history]
   );

   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return <LDSHome />;
   }

   return (
      <Container className="main" component="main" maxWidth="xs">
         <CssBaseline />
         <div className={classes.paper}>
            <Typography component="h1" variant="h5">
               Sign in
            </Typography>
            <form id="form" onSubmit={handleLogin} className={classes.form} noValidate>
               <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
               <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
               />
               <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
               <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  Sign In
               </Button>
               {/* <Grid container>
                  <Grid item xs>
                     <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                  </Grid>
                  <Grid item>
                     <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                     </Link>
                  </Grid>
               </Grid> */}
            </form>
         </div>
      </Container>
   );
};

export default withRouter(Login);
