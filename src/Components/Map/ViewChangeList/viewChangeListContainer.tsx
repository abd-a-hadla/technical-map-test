import React from 'react';
import {Avatar, Divider, List, ListItem} from "@mui/material";
import {mapViewDetails} from "../constants";
import {IViewChangeListProps} from "./interfaces";


const style = {
    py: 0,
    width: '277px',
    maxWidth: 360,
    display: "flex",
    borderRadius: 2,
};

const ViewChangeListContainer = ({onItemClick, activeView}: IViewChangeListProps) => {

    return (
        <div className={"absolute shadow-4xl top-[-112px] left-[-285px] flex gap-[4px] bg-white"}>
            <List sx={style}>
                {
                    mapViewDetails.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <ListItem className={"flex flex-col !text-center "}>
                                    <Avatar
                                        className={`cursor-pointer ${activeView === item?.url ? "border-[2px] border-green-400" : ""}`}
                                        onClick={() => {
                                            onItemClick(item)
                                        }} alt="" src={item?.image}/>
                                    <span>{item?.text}</span>
                                </ListItem>
                                {
                                    index !== mapViewDetails?.length - 1 &&
                                    <Divider orientation="vertical" variant="middle" flexItem/>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </List>
        </div>
    );
};

export default ViewChangeListContainer;