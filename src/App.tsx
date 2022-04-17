import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Box sx={{margin: "auto", minWidth: 275, width: 800,}} >
                <Users />
            </Box>
        </>
    );
};

export default App;
