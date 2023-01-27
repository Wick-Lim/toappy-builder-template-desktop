import { Typography as MuiTypography } from "@mui/material";
import React from "react";

const Typography = ({ text, ...props }) => {

    return <MuiTypography {...props} dangerouslySetInnerHTML={{ __html: text ?? '' }} />;
}

Typography.Properties = [
    { name: 'text', type: 'string' },
    { name: 'variant', type: 'string', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline', 'srOnly', 'inherit'] },
    { name: 'color', type: 'string', options: ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'] },
    { name: 'align', type: 'string', options: ['inherit', 'left', 'center', 'right', 'justify'] },
    { name: 'noWrap', type: 'boolean' },
];

export default Typography;
