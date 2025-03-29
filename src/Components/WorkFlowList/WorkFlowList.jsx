import {
  Box,
  Button,
  Collapse,
  IconButton,
  Modal,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./WorkFlowList.module.css";
import pinImgNormal from "../../Assets/Images/WorkFlowListPageImages/NormalPin.png";
import pinImgYellow from "../../Assets/Images/WorkFlowListPageImages/YellowPin.png";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

export default function WorkFlowList(props) {
  return (
    <div
      style={{
        padding: "24px",
        marginTop: "24px",
        background: "white",
      }}
    >
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center" className={styles.head_cells}>
                Workflow Name
              </TableCell>
              <TableCell align="center" className={styles.head_cells}>
                ID
              </TableCell>
              <TableCell align="center" className={styles.head_cells}>
                Last Edited On
              </TableCell>
              <TableCell align="center" className={styles.head_cells}>
                Description
              </TableCell>
              <TableCell className={styles.head_cells}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "24px",
        }}
      >
        <Pagination
          count={15}
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "rgba(254, 243, 233, 1)",
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "rgba(254, 243, 233, 1)",
            },
            "& .MuiPaginationItem-root: hover": {
              background: "rgba(254,243,233,1)",
            },
          }}
        />
      </Stack>
    </div>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [isNormalPin, setIsNormalPin] = useState(true);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isExecuteClicked, setIsExecuteClicked] = useState(false);

  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/workflowdesign");
  };

  const changePin = (e) => {
    setIsNormalPin(!isNormalPin);
  };

  const handleToolTipClose = () => {
    setIsToolTipOpen(!isToolTipOpen);
  };

  const handleModalClose = () => {
    setOpenModal(!openModal);
  };

  const handleExecute = () => {
    setIsExecuteClicked(true);
    setIsDeleteClicked(false);
    setOpenModal(true);
  };
  const handleDelete = () => {
    setIsDeleteClicked(true);
    setIsExecuteClicked(false);
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <TableRow sx={{}}>
        <TableCell
          component="th"
          scope="row"
          align="center"
          className={styles.row_cells}
        >
          {row.name}
        </TableCell>
        <TableCell
          align="center"
          className={styles.row_cells}
        >{`#${row.id}`}</TableCell>
        <TableCell align="center" className={styles.row_cells}>
          {row.last_edited_on}
        </TableCell>
        <TableCell align="center" className={styles.row_cells}>
          {row.description}
        </TableCell>
        <TableCell>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {isNormalPin ? (
              <img
                src={pinImgNormal}
                alt="PinImage"
                className={styles.pinYellow}
                onClick={changePin}
              />
            ) : (
              <img
                src={pinImgYellow}
                alt="PinImage"
                className={styles.pinNormal}
                onClick={changePin}
              />
            )}
            <Button
              variant="outlined"
              className={styles.table_button}
              onClick={handleExecute}
            >
              Execute
            </Button>
            <Button
              variant="outlined"
              className={styles.table_button}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Tooltip
              onClose={handleToolTipClose}
              open={isToolTipOpen}
              title={
                <Typography
                  sx={{
                    textDecoration: "underline",
                    color: "red",
                    cursor: "pointer",
                  }}
                  onClick={handleDelete}
                >
                  Delete
                </Typography>
              }
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                    padding: "10px",
                    border: "1px solid black", // Background color
                  },
                },
                arrow: {
                  sx: {
                    color: "white",
                  },
                },
              }}
            >
              <MoreVertIcon
                onClick={() => setIsToolTipOpen(true)}
                sx={{ cursor: "pointer" }}
              />
            </Tooltip>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
            </IconButton>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}></Box>
          </Collapse>
        </TableCell>
      </TableRow>

      {/* Modal Implementation for Delete And Execute */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            maxWidth: "596px",
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
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <CloseIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setOpenModal(false)}
              />
            </Stack>

            <Stack
              direction={"row"}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: "24px",
              }}
            >
              <Stack
                direction={"column"}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography className={styles.question_text}>
                  {`"Are you sure you want to ${
                    isExecuteClicked
                      ? "Execute"
                      : isDeleteClicked
                      ? "Delete"
                      : "Execute"
                  } the process 'Process_Name'?`}
                </Typography>
                <Typography className={styles.undo_text}>
                  You cannot Undo this step
                </Typography>
              </Stack>
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
              border: "1px solid rgba(224, 224, 224, 1)",
              gap: "10px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                background: "white",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "rgba(79, 79, 79, 1)",
                border: "1px solid rgba(224, 224, 224, 1)",
                gap: "10px",
              }}
              onClick={() => setOpenModal(false)}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              sx={{
                background: "white",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "150%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                color: "rgba(79, 79, 79, 1)",
                border: "1px solid rgba(224, 224, 224, 1)",

                gap: "10px",
              }}
              onClick={() => setOpenModal(false)}
            >
              No
            </Button>
          </Stack>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
