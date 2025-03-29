import {
  Box,
  Button,
  Modal,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./WorkFlowDesign.module.css";
import SaveIcon from "@mui/icons-material/Save";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ArrowTooltipComponent from "../../Components/ArrowTooltipComponent/ArrowTooltipComponent";
import NodeComponent from "../../Components/NodeComponent/NodeComponent";
import CloseIcon from "@mui/icons-material/Close";

import loginStyles from "../LoginPage/LoginPage.module.css";

export default function WorkFlowDesignPage() {
  const navigate = useNavigate();

  
  const [openModal, setOpenModal] = useState(false);
  const handleModalClose = () => {
    setOpenModal(!openModal);
  };

  const [Nodes, setNodes] = useState([
    {
      node: "API Call",
      isClicked: false,
    },
    {
      node: "Email",
      isClicked: false,
    },
    {
      node: "TextBox",
      isClicked: false,
    },
  ]);

  const handleGoBack = () => {
    navigate("/workflowlist");
  };

  return (
    <div>
      <Stack
        sx={{
          background: "rgba(242, 227, 195, 1)",
          position: "relative",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Save and Back Div  */}
        <Stack
          direction={"row"}
          sx={{
            position: "absolute",
            background: "white",
            top: "40px",
            left: "40px",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "24px",
            padding: "10px 24px 10px 24px", //top right bottom left
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{
              textDecoration: "underline",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textDecorationOffset: "0%",
              textDecorationThickness: "0%",
              cursor: "pointer",
            }}
            onClick={handleGoBack}
          >{`<-Go Back`}</Typography>
          <Typography className={styles.workflow_name}>Untitled</Typography>
          <SaveIcon
            sx={{
              color: "yellow",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal(true)}
          />
        </Stack>
        <Stack
          direction={"column"}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Start Node */}
          <Box
            sx={{
              borderRadius: "50%",
              border: "6.15px solid rgba(132, 158, 76, 1)",
              padding: "5px",
              width: "80px",
              height: "80px",
            }}
          >
            <Stack
              sx={{
                background: "rgba(132, 158, 76, 1)",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <p className={styles.first_and_last_node}>Start</p>
            </Stack>
          </Box>

          {/* Center Node Management */}
          <ArrowTooltipComponent Nodes={Nodes} setNodes={setNodes} />

          {Nodes.map((item, i) => {
            if (item.isClicked) {
              return (
                <div key={item.node}>
                  <NodeComponent node={item.node} idx={i} setNodes={setNodes} />
                  <ArrowTooltipComponent Nodes={Nodes} setNodes={setNodes} />
                </div>
              );
            }else{
                return <></>;
            }
          })}
          {/* End Node */}
          <Box
            sx={{
              borderRadius: "50%",
              border: "6.15px solid rgba(238, 52, 37, 1)",
              padding: "5px",
              width: "80px",
              height: "80px",
            }}
          >
            <Stack
              sx={{
                background: "rgba(238, 52, 37, 1)",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <p className={styles.first_and_last_node}>End</p>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      {/* Modal Implementation for Save */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "600px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            border: "none",
            outline: "0",
          }}
        >
          <Stack
            direction={"column"}
            sx={{
              padding: "16px",
              justifyContent: "center",
            }}
          >
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography id="modal-modal-title" className={styles.modalTitle}>
                Save your workflow
              </Typography>
              <CloseIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setOpenModal(false)}
              />
            </Stack>

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
                Name
              </Typography>
              <OutlinedInput
                id="outlined-adornment-name"
                placeholder="Name Here......."
                className={`${loginStyles.placeholder_text}`}
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
                Description
              </Typography>
              <OutlinedInput
                id="outlined-adornment-description"
                placeholder="Write Here...."
                className={`${loginStyles.placeholder_text}`}
                multiline
                rows={6}
                disabled
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              marginTop: "40px",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "10px",
              boxShadow: "0px 0px 8px 0px rgba(44, 62, 80, 0.2)",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "rgba(238, 52, 37, 1)",
                color: "white",
                marginTop: "10px",
                marginBottom: "10px",
                height: "30px",
                fontFamily: "Poppins",
                fontWeight: "700",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "0px",
                textAlign: "center",
                verticalAlign: "middle",
                textTransform: "initial",
                gap: "10px",
              }}
              onClick={() => setOpenModal(false)}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
