import React from "react";
import { Box, Card, CardHeader } from "@mui/material";

const Header: React.FC = () => {
    return (
        <Card
            sx={{
                background: "#3a6ea5",
                color: "#fff",
                textAlign: "center"
            }}
        >
            <CardHeader title={"Shared World"} component={Box} />
        </Card>
    );
};

export default Header;
