import { IconButton as MuiIconButton } from "@mui/material";
import React, { useMemo } from "react";

import * as ICONS from "@mui/icons-material";

const IconButton = ({ icon, ...props }) => {
    const Icon = useMemo(() => {
        if (!icon)
            return;

        const { [icon]: Icon } = ICONS;
        return Icon
    }, [icon]);

    if (!Icon)
        return <MuiIconButton {...props} />;

    return (
        <MuiIconButton {...props}>
            <Icon />
        </MuiIconButton>
    );
}

IconButton.Properties = [
    { name: 'icon', type: 'string' },
    { name: 'color', type: 'string', options: ['inherit', 'primary', 'secondary', 'default'] },
    { name: 'disableRipple', type: 'boolean' },
    { name: 'disableTouchRipple', type: 'boolean' },
    { name: 'size', type: 'string', options: ['small', 'medium'] },
];

export default IconButton;
