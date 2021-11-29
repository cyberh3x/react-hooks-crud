import Box from "@mui/material/Box";
import LinearProgressComponent from "@mui/material/LinearProgress";

export default function LinearProgress(props) {
  return (
    <Box sx={{ width: "100%" }} {...props}>
      <LinearProgressComponent />
    </Box>
  );
}
