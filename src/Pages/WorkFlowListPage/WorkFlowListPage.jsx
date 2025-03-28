import {
  Box,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import styles from "./WorkFlowListPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import normalmenuimg from "../../Assets/Images/WorkFlowListPageImages/NormalMenu.png";
import WorkFlowList from "../../Components/WorkFlowList/WorkFlowList";
import { useEffect, useState } from "react";

export default function WorkFlowListPage() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        const obj = [{
            name:'WorkFlow Name here.....',
            id:1,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:2,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:3,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:4,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:5,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:6,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        },
        {
            name:'WorkFlow Name here.....',
            id:7,
            last_edited_on:'zubin Khanna | 22:43 IST - 28/05',
            description:'Some description here regarding the flow..',
        }];
        setData(obj);
    },[]);

  return (
    <div>
      {/* MainLayout */}
      <div style={{ padding: "24px", background: "rgba(253, 251, 246, 1)" }}>
        {/* NavBar */}
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <img src={normalmenuimg} alt="MenuICon" className={styles.menu} />
          <p className={styles.heading}>Workflow Builder</p>
        </Stack>
        {/* Main WorkFlow List */}
        <Box sx={{ marginLeft: "64px", marginTop: "32px" }}>
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search By Workflow Name/ID"
              fullWidth
              sx={{
                width: "300px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px", // Makes it a rectangle
                  height: "32px",
                  background: "white",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <button className={styles.newProcessButton}>+ Create New Process</button>
          </Stack>
          <WorkFlowList rows={data} />
        </Box>
      </div>
    </div>
  );
}
