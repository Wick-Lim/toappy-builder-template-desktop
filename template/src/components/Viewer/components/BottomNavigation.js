import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction as MuiBottomNavigationAction } from "@mui/material";
import React from "react";

const BottomNavigation = ({ actions, ...props }) => {

    return (<>
        <MuiBottomNavigation {...props}>
            {actions?.map((action, index) => <MuiBottomNavigationAction key={`bnb-btn-${index}`} label={action} />)}
        </MuiBottomNavigation>
    </>);
}

BottomNavigation.Properties = [
    { name: 'actions', type: 'array' },
    { name: 'showLabels', type: 'boolean' },
    { name: 'value', type: 'string' },
];

export default BottomNavigation;
