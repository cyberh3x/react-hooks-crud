import ButtonComponent from "@mui/material/Button";

const Button = ({ color = "primary", variant = "contained", ...props }) => {
  return (
    <ButtonComponent color={color} variant={variant} {...props}>
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
