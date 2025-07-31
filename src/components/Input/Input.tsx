import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff, Close } from "@mui/icons-material";
import { useState } from "react";

type InputType = "text" | "password" | "number";

type CustomInputProps = TextFieldProps & {
  clearable?: boolean;
  type?: InputType;
};

export const Input = ({
  type = "text",
  clearable = false,
  InputProps,
  ...props
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && !showPassword ? "password" : "text";

  const isControlled = props.value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState("");

  const value = isControlled ? props.value : uncontrolledValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledValue(e.target.value);
    props.onChange?.(e);
  };

  const handleClear = () => {
    const cleared = {
      ...props,
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;
    handleChange(cleared);
  };

  const adornments: React.ReactNode[] = [];

  if (clearable && value) {
    adornments.push(
      <IconButton key="clear" size="small" onClick={handleClear}>
        <Close fontSize="small" />
      </IconButton>
    );
  }

  if (isPassword) {
    adornments.push(
      <IconButton
        key="toggle"
        edge="end"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    );
  }

  return (
    <Box>
      <TextField
        {...props}
        type={inputType}
        value={value}
        placeholder={type}
        onChange={handleChange}
        InputProps={{
          ...InputProps,
          endAdornment:
            adornments.length > 0 ? (
              <InputAdornment position="end">{adornments}</InputAdornment>
            ) : (
              InputProps?.endAdornment
            ),
        }}
        fullWidth
      />
    </Box>
  );
};
