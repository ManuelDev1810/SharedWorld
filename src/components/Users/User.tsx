import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";  

const User: React.FC = () => {
    return (
        <>
            <Card sx={{ minWidth: 275, width: 800, margin: "auto", marginTop: 2, background: "#c1cad6" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                    Leanne Graham
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Email: Sincere@april.biz
                    </Typography>
                    <Typography variant="body2">
                    Company: Romaguera-Crona
                        <br />
                        {"\"Catch Phrase: Multi-layered client-server neural-net\""}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default User;