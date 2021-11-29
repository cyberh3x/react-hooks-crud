import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function SwitchLabels({
  label = "",
  value = false,
  handleChange = () => {},
  ...props
}) {
  return (
    <FormGroup {...props}>
      <FormControlLabel
        control={
          <Switch
            checked={value}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
