import React from 'react';
import {ITooltipProps} from "./interfaces";
import {Tooltip as MaterialTooltip, Typography} from "@mui/material";

const Tooltip = ({...props}: ITooltipProps) => {
    const {title, ...restProps} = props
    return (
        <MaterialTooltip title={<Typography variant={'h6'}>{title}</Typography>} {...restProps}/>
    );
};

export default Tooltip;