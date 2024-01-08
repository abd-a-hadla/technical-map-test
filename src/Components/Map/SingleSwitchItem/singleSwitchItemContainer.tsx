import React from 'react';
import {Switch} from "@mui/material";
import {ISingleSwitchProps} from "./interfaces";

const SingleSwitchItemContainer = ({onSwitchChange, label, defaultChecked}: ISingleSwitchProps) => {

    return (
        <div className={"flex gap-2"}>
            <Switch
                classes={{
                    thumb:"!bg-gray-600",
                    track:"!bg-gray-400",
                }}
                onChange={(event, checked) => onSwitchChange(checked)}
                defaultChecked={defaultChecked}/>
            <span className={"flex items-center"}>{label}</span>
        </div>
    );
};

export default SingleSwitchItemContainer;