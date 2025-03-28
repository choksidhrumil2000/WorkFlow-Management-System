import {
  Box,
  Button,
  Collapse,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "./WorkFlowList.module.css";
import pinImgNormal from "../../Assets/Images/WorkFlowListPageImages/NormalPin.png";
import pinImgYellow from "../../Assets/Images/WorkFlowListPageImages/YellowPin.png";

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
    </div>
  );
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [isNormalPin, setIsNormalPin] = useState(true);

  const changePin = (e) => {
    setIsNormalPin(!isNormalPin);
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
            <Button variant="outlined" className={styles.table_button}>
              Execute
            </Button>
            <Button variant="outlined" className={styles.table_button}>
              Edit
            </Button>
            <MoreVertIcon />
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
    </React.Fragment>
  );
}
