import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = (props) => {

    return <MuiButton {...props} />;
}

Button.Properties = [
    { name: 'variant', type: 'string', options: ['text', 'outlined', 'contained'] },
    { name: 'color', type: 'string', options: ['inherit', 'primary', 'secondary', 'default'] },
    { name: 'disableElevation', type: 'boolean' },
    { name: 'disableRipple', type: 'boolean' },
    { name: 'disableTouchRipple', type: 'boolean' },
    { name: 'endIcon', type: 'string', options: [''] },
    { name: 'fullWidth', type: 'boolean' },
    { name: 'size', type: 'string', options: ['small', 'medium', 'large'] },
    { name: 'startIcon', type: 'string', options: [''] },
];

export default Button;
