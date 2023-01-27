import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from "@mui/material";
import React from "react";

const AppBar = ({ children, ...props }) => {

    return (<>
        <MuiAppBar position="relative" {...props}>
            <MuiToolbar>
                {children}
            </MuiToolbar>
        </MuiAppBar>
    </>);
}

AppBar.Properties = [
    { name: 'position', type: 'string', options: ['absolute', 'sticky', 'static', 'relative'] },
    { name: 'color', type: 'string', options: ['inherit', 'primary', 'secondary', 'default'] },
    { name: 'elevation', type: 'number', options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24] },
];

export default AppBar;
