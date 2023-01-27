import { Divider as MuiDivider } from "@mui/material";
import React from "react";

const Divider = (props) => {

    return <MuiDivider {...props} />;
}

Divider.Properties = [
    { name: 'orientation', type: 'string', options: ['horizontal', 'vertical'] },
    { name: 'variant', type: 'string', options: ['fullWidth', 'inset', 'middle'] },
];

export default Divider;
