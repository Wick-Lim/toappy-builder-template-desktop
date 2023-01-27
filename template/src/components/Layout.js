import { Box } from "@mui/material";
import { forwardRef } from "react";

export const Column = forwardRef((props, ref) => {
    return <Box display='flex' flexDirection='column' ref={ref} {...props} />
});

export const Row = forwardRef((props, ref) => {
    return <Box display='flex' flexDirection='row' ref={ref} {...props} />
});

export const Expanded = forwardRef((props, ref) => {
    return <Box display='flex' flex='1' ref={ref} {...props} />
});