import CardComponent from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "components/button";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";

export default function Card({
  id = null,
  title = "",
  media,
  body = "",
  adminMode = false,
  handleRemove = () => {},
  handleUpdate = () => {},
  ...props
}) {
  return (
    <CardComponent {...props}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://via.placeholder.com/600/92c952"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      {adminMode && (
        <CardActions>
          <Button
            color="error"
            variant="contained"
            onClick={() => handleRemove(id)}
          >
            Remove
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleUpdate(id)}
          >
            Update
          </Button>
        </CardActions>
      )}
    </CardComponent>
  );
}
