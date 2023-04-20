import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Typography, Button } from "@mui/material";

import UpcomingCards from "./UpcomingCards/UpcomingCards";
import QuickBookGlobal from "./QuickBookGlobal/QuickBookGlobal";

interface iLeftSide {
    roomName: string;
    availability: number;
}

const LeftSide = ({
    roomName,
    availability,
}: iLeftSide) => {
    let currDate = new Date();
    let hoursMin;

    if (currDate.getMinutes() < 10) {
        hoursMin = currDate.getHours() + ":0" + currDate.getMinutes();
    } else {
        hoursMin = currDate.getHours() + ":" + currDate.getMinutes();
    }

    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    const formattedDate: string = currDate.toLocaleDateString("en-US", options);
    const [time, setTime] = useState(hoursMin);
    const [showQuickBookButton, setShowQuickBookButton] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (
            availability === 2 ||
            location.pathname.includes("quickbookglobal")
        ) {
            setShowQuickBookButton(false);
        }
    }, [availability, location]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                color: "white",
                height: "100vh",
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                    gap: "10px",
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Typography variant="h3">{roomName}</Typography>
                    <Typography variant="h2">{time}</Typography>
                    <Typography variant="h3">{formattedDate}</Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                <UpcomingCards
                    meetingName="Name"
                    start="10:00"
                    end="10:20"
                    persons={[
                        "Mihai Burada",
                        "Silviu Manzur",
                        "Mita Daniel",
                        "Andrei Toba",
                        "Mihai Burada",
                        "Silviu Manzur",
                        "Mita Daniel",
                        "Andrei Toba",
                    ]}
                ></UpcomingCards>
                <UpcomingCards
                    meetingName="Name Name Name Name Name Name"
                    start="10:00"
                    end="10:20"
                    persons={[
                        "Mihai Burada",
                        "Silviu Manzur",
                        "Mita Daniel",
                        "Andrei Toba",
                        "Mihai Burada",
                        "Silviu Manzur",
                        "Mita Daniel",
                        "Andrei Toba",
                    ]}
                ></UpcomingCards>
                <Button variant="outlined" color="inherit">
                    Show More
                </Button>
            </Box>
            {showQuickBookButton ? <QuickBookGlobal /> : null}
        </Box>
    );
};

export default LeftSide;
