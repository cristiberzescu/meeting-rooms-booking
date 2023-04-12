import { Box,Container} from "@mui/system";
import React, { useState } from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import COLORS from "../../CustomColors";
import Grid from "@mui/material/Grid";
const TabletApp = () => {
    const colorStates = [COLORS.SUCCESS, COLORS.WARNING, COLORS.ERROR];

    const [availability, setAvailability] = useState(1);
    const [roomName, setRoomName] = useState("Focus Room");
    
    return (
        <Grid sx={{backgroundColor:colorStates[availability]}} flexDirection="row"  container>
            <Grid  item xs={5}>
                <LeftSide roomName={roomName} />
            </Grid>
            <Grid  item xs={7}  >
            <RightSide  roomName={roomName} availability={availability} />
            </Grid>
        </Grid>
 
        
    );
};

export default TabletApp;
