import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Company, Address } from "../../types/User";  

interface Props {
    name: string;
    email: string;
    company: Company;
    address: Address;
}

const UserItem: React.FC<Props> = (props) => {
    return (
        <>
            <Card sx={{ marginTop: 2, background: "#c1cad6" }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Email: {props.email}
                    </Typography>
                    <Typography variant="body2">
                    Company: {props.company.name}
                        <br />
                    Catch Phrase: {props.company.catchPhrase}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default UserItem;