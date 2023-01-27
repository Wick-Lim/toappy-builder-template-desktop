import { Box } from "@mui/material";
import React from "react";

const Column = (props) => {

    return <Box display='flex' flexDirection='column' {...props} />;
}

Column.Properties = [
    { name: 'flexWrap', type: 'string', options: ['nowrap', 'wrap', 'wrap-reverse'] },
    { name: 'justifyContent', type: 'string', options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] },
    { name: 'alignItems', type: 'string', options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] },
    { name: 'flex', type: 'string', options: ['none', 'auto', 'initial', 'inherit', 1] },
    { name: 'gap', type: 'number' },
];

export default Column;
