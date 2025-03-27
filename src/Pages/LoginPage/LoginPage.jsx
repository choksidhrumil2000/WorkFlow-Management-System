import styles from "./LoginPage.module.css";
import img from "../../Assets/Images/LoginPageImages/logo_highbridge.png";
import Stack from "@mui/material/Stack";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import "@fontsource/poppins";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();
  
  const NavigateToWorkFlowList = ()=>{
    navigate('/workflowlist');
  }

  return (
    <div>
      <div className={`${styles.bg_img} ${styles.div_main}`}>
        <div className={`${styles.div_text}`}>
          <img src={img} alt="HighBridge Logo" />
          <div className={`${styles.div_heading_and_p}`}>
            <h1 className={`${styles.future_text}`}>Building the Future...</h1>
            <p className={`${styles.para_text}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        {/* LogIn Container */}
        <Stack direction={"column"} className={`${styles.login_div}`}>
          <Stack direction={"column"} className={`${styles.login_section}`}>
            <Stack direction={"column"}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "22.53px",
                  letterSpacing: "0px",
                }}
              >
                WELCOME BACK!
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "26px",
                  lineHeight: "44px",
                  letterSpacing: "0px",
                }}
              >
                Log In to your Account
              </Typography>
              {/* Login Form Section */}
              <Stack
                direction={"column"}
                className={`${styles.login_form_section}`}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                  }}
                >
                  Email
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-email"
                  placeholder="Type Here...."
                  className={`${styles.placeholder_text}`}
                />

                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    marginTop: "20px",
                  }}
                >
                  Password
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-password"
                  placeholder="Type Here...."
                  className={`${styles.placeholder_text}`}
                />
                <Stack
                  direction={"row"}
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "rgba(238, 52, 37, 1)",
                          },
                        }}
                        defaultChecked
                      />
                    }
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "12.8px",
                        lineHeight: "22.53px",
                        letterSpacing: "0px",
                      },
                    }}
                    label="Remember me"
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "12.8px",
                      lineHeight: "22.53px",
                      letterSpacing: "0px",
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </Stack>
                <Button
                  variant="contained"
                  sx={{
                    background: "rgba(238, 52, 37, 1)",
                    color: "white",
                    marginTop: "20px",
                    height: "56px",
                  }}
                  onClick={NavigateToWorkFlowList}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                position: "relative",
                height: "20px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component={"hr"}
                sx={{
                  position: "absolute",
                  border: "1px solid rgba(224, 224, 224, 1)",
                  width: "100%",
                }}
              ></Box>
              <div
                style={{
                  textAlign: "center",
                  width: "10%",
                  background: "rgba(250, 250, 250, 1)",
                  position: "absolute",
                  zIndex: "1",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    fontSize: "13px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    textAlign: "center",
                  }}
                >
                  Or
                </Typography>
              </div>
            </Box>
            {/* Login With Different Platforms */}
            <Stack direction={"column"} gap={"9px"} sx={{ marginTop: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <GoogleIcon />{" "}
                <Typography className={styles.login_with}>
                  Login With Google
                </Typography>{" "}
                <Box />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />{" "}
                <Typography className={styles.login_with}>
                  Login With Facebook
                </Typography>{" "}
                <Box />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <AppleIcon />{" "}
                <Typography className={styles.login_with}>
                  Login With Apple
                </Typography>{" "}
                <Box />
              </Button>
            </Stack>
            <Typography
              className={styles.spanItem}
              sx={{ fontWeight: "400", marginTop: "40px" }}
            >
              New User?{" "}
              <span
                className={styles.spanItem}
                style={{ textDecoration: "underline" }}
              >
                SIGN UP HERE
              </span>
            </Typography>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
