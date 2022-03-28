import "./App.css";
import { Box, Card, CardHeader } from "@mui/material";

function App() {
    return (
        <div className="App">
            <Card>
                <CardHeader
                    title={"Header Text"}
                    component={Box}
                />
            </ Card>
        </div>
    );
}

export default App;
