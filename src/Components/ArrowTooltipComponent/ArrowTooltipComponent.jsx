import { Box, Stack, Tooltip } from "@mui/material";
import styles from "./ArrowTooltipComponent.module.css";
import SouthIcon from '@mui/icons-material/South';
import addNodeImage from '../../Assets/Images/WorkFlowDesignPageImages/AddNode.png';
import React from "react";

export default function ArrowTooltipComponent(props){

    const AddNodeFunctionality = (idx)=>{
        const temp_nodes = [...(props.Nodes)];
        temp_nodes[idx].isClicked = true;
        props.setNodes(temp_nodes);
      }
    return(
        <Stack sx={{
            position:'relative',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <SouthIcon 
            sx={{
                fontSize:'5rem',
            }} />
            <Tooltip 
            title={
             <React.Fragment>
                <Stack direction={'row'}
                    sx={{
                        justifyContent:'flex-start',
                        alignItems:'center',
                        background:'white',
                        gap:'10px',
                        maxWidth:'200px',
                        flexWrap:'wrap',
                    }}
                >
                    {
                        (props.Nodes).map((item,i)=>
                        <Box key={`${item.node} ${i}`} sx={{
                            background:'white',
                            fontFamily: 'Poppins',
fontWeight: '500',
fontSize: '12px',
lineHeight: '100%',
letterSpacing: '0%',
padding:'8px 12px 8px 12px',
border: '1px solid rgba(224, 224, 224, 1)',
borderRadius:'10px',
color:'black',
cursor:'pointer',

                        }} onClick={()=>AddNodeFunctionality(i)}>
                            {item.node}
                        </Box>
                        )
                    }
                </Stack>
             </React.Fragment>   
            } 
            slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "preventOverflow",
                      options: {
                        boundary: "window",
                      },
                    },
                  ],
                },
              }}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                    padding:'15px' // Background color
                  },
                },
                arrow: {
                  sx: {
                    color: "white", // Arrow color
                  },
                },
              }}
            placement="right"
            arrow={true}>
            <img src={addNodeImage} style={{
                width:'28px',
                height:'28px',
                position:'absolute',
                zIndex:'1',
                top:'25%',
            }} alt="AddNodeImage" className={styles.addNodeHover}/>
            </Tooltip>
            
        </Stack>
    );
}