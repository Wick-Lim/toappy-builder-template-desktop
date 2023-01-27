import { Box as MuiBox } from "@mui/material";
import React from "react";

const Box = (props) => {

    return <MuiBox {...props} />;
}

Box.Properties = [
    { name: 'display', type: 'string', options: ['initial', 'block', 'contents', 'flex', 'grid', 'inline', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'inherit'] },
    { name: 'flexDirection', type: 'string', options: ['row', 'row-reverse', 'column', 'column-reverse'] },
    { name: 'flexWrap', type: 'string', options: ['nowrap', 'wrap', 'wrap-reverse'] },
    { name: 'justifyContent', type: 'string', options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] },
    { name: 'alignItems', type: 'string', options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] },
    { name: 'flex', type: 'string', options: ['none', 'auto', 'initial', 'inherit', 1] },
    { name: 'gap', type: 'number' },
];

export default Box;
