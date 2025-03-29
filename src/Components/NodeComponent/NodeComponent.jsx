import {
  Box,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./NodeComponent.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import loginStyles from "../../Pages/LoginPage/LoginPage.module.css";

export default function NodeComponent(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(!openModal);
  };

  const deleteNode = (idx) => {
    props.setNodes((prev) => {
      const arr = [...prev];
      arr[idx].isClicked = false;
      return arr;
    });
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "24px",
        }}
        className={styles.nodeStack}
        onClick={() => setOpenModal(true)}
      >
        <Typography component="p">{props.node}</Typography>
        <DeleteOutlineIcon
          sx={{
            "& :hover": {
              color: "red",
              cursor: "pointer",
            },
          }}
          onClick={() => deleteNode(props.idx)}
        />
      </Stack>
      <Modal open={openModal} onClose={handleModalClose}>
        <Stack
          direction={"row"}
          sx={{
            // width: "600px",
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translateY(-50%)",
            border: "none",
            outline: "0",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          {props.node === "API Call" && (
            // <Box>
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "120px",
                  height: "30px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  transform: "rotate(-90deg)",
                  transformOrigin: "top left",
                  whiteSpace: "nowrap",
                  position: "relative",
                  top: "120px",
                  left: "70px",
                }}
              >
                <Typography className={styles.config}>
                  Configueration
                </Typography>
              </Box>
              <Stack
                direction={"column"}
                sx={{
                  padding: "16px",
                  justifyContent: "center",
                  background: "white",
                  borderRadius: "6px",
                  width: "348px",
                }}
              >
                <Stack
                  direction={"column"}
                  className={`${loginStyles.login_form_section}`}
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
                    Method
                  </Typography>
                  <Select
                    placeholder="Type Here......."
                    className={`${loginStyles.placeholder_text}`}
                    fullWidth
                    disabled
                  />

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
                    URL
                  </Typography>
                  <OutlinedInput
                    placeholder="Type Here......."
                    className={`${loginStyles.placeholder_text}`}
                    fullWidth
                    disabled
                  />

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
                    Headers
                  </Typography>
                  <OutlinedInput
                    placeholder="Header Name"
                    className={`${loginStyles.placeholder_text}`}
                    fullWidth
                    disabled
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
                    Body
                  </Typography>
                  <OutlinedInput
                    id="outlined-adornment-description"
                    placeholder="Enter Description...."
                    className={`${loginStyles.placeholder_text}`}
                    multiline
                    rows={4}
                    disabled
                  />
                </Stack>
              </Stack>
              </>
            // </Box>
          )}
          {props.node === "Email" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "120px",
                  height: "30px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  transform: "rotate(-90deg)",
                  transformOrigin: "top left",
                  whiteSpace: "nowrap",
                  position: "relative",
                  top: "120px",
                  left: "70px",
                }}
              >
                <Typography className={styles.config}>
                  Configueration
                </Typography>
              </Box>
              <Stack
                direction={"column"}
                sx={{
                  padding: "16px",
                  justifyContent: "center",
                  background: "white",
                  borderRadius: "6px",
                  width: "348px",
                }}
              >
                <Stack
                  direction={"column"}
                  className={`${loginStyles.login_form_section}`}
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
                    placeholder="Type Here......."
                    className={`${loginStyles.placeholder_text}`}
                    fullWidth
                    disabled
                  />
                </Stack>
              </Stack>
            </>
          )}

          {props.node === "TextBox" && (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "120px",
                  height: "30px",
                  padding: "10px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  transform: "rotate(-90deg)",
                  transformOrigin: "top left",
                  whiteSpace: "nowrap",
                  position: "relative",
                  top: "120px",
                  left: "70px",
                }}
              >
                <Typography className={styles.config}>
                  Configueration
                </Typography>
              </Box>
              <Stack
                direction={"column"}
                sx={{
                  padding: "16px",
                  justifyContent: "center",
                  background: "white",
                  borderRadius: "6px",
                  width: "348px",
                }}
              >
                <Stack
                  direction={"column"}
                  className={`${loginStyles.login_form_section}`}
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
                    Message
                  </Typography>
                  <OutlinedInput
                    placeholder="Enter......."
                    className={`${loginStyles.placeholder_text}`}
                    fullWidth
                    multiline
                    rows={4}
                    disabled
                  />
                </Stack>
              </Stack>
            </>
          )}
        </Stack>
      </Modal>
    </>
  );
}
