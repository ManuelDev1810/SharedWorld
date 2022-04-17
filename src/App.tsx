import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import UserList from "./components/Users/UserList";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Box sx={{margin: "auto", minWidth: 275, width: 800,}} >
                <UserList />
            </Box>
        </>
    );
};

export default App;
