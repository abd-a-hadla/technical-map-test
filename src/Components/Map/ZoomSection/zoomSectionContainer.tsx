import React from 'react';
import {Button, ButtonGroup, Tooltip} from "@mui/material";
import {MdOutlineZoomIn, MdOutlineZoomOut} from "react-icons/md";
import {useMap} from "react-leaflet";
import {singleIconClassName} from "../../../Constants/sharedConstants";

const ZoomSectionContainer = () => {
    const map = useMap();

    const handleZoomIn = () => {
        map.zoomIn();
    };

    const handleZoomOut = () => {
        map.zoomOut();
    };
    return (
        <ButtonGroup className={"bg-white !rounded-[20px]"} variant="outlined" aria-label="outlined button group">
            <Tooltip placement={"bottom"} title={"Zoom in"}>
                <Button className={"!py-[4px] !px-[10px] !rounded-tl-[18px] !rounded-bl-[18px] !border-gray-400"}
                        onClick={handleZoomIn}><MdOutlineZoomIn className={singleIconClassName}/></Button>
            </Tooltip>
            <Tooltip placement={"bottom"} title={"Zoom out"}>
                <Button className={"!py-[4px] !px-[10px] !rounded-tr-[18px] !rounded-br-[18px] !border-gray-400"}
                        onClick={handleZoomOut}><MdOutlineZoomOut className={singleIconClassName}/></Button>
            </Tooltip>
        </ButtonGroup>
    );
};

export default ZoomSectionContainer;