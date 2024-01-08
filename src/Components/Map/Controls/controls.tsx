import React, {useState} from 'react';
import ZoomSectionContainer from "../ZoomSection/zoomSectionContainer";
import {Button, Tooltip} from "@mui/material";
import {singleButtonClassName, singleIconClassName} from "../../../Constants/sharedConstants";
import LayersIcon from "@mui/icons-material/Layers";
import ViewChangeListContainer from "../ViewChangeList/viewChangeListContainer";
import {AiFillSetting} from "react-icons/ai";
import Control from "react-leaflet-custom-control";
import {IControlsProps} from "./interfaces";
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import SettingsSectionContainer from "../SettingsSection/settingsSectionContainer";
import {RiFullscreenExitLine, RiFullscreenFill} from "react-icons/ri";


const Controls = ({
                      onItemClick,
                      activeView,
                      isPingChecked,
                      setIsPingChecked,
                      setIsGroupingChecked,
                      isGroupingChecked,
                      handle
                  }: IControlsProps) => {
    const [isChangeViewVisible, setIsChangeViewVisible] = useState(false)
    const [isSettingsVisible, setIsSettingsVisible] = useState(false)

    return (
        <div>
            <ClickAwayListener onClickAway={() => {
                setIsChangeViewVisible(false)
                setIsSettingsVisible(false)
            }}>
                <div>
                    <Control container={{className: "flex gap-[16px]",}} position="bottomleft">
                        <ZoomSectionContainer/>
                        <Tooltip  placement={"bottom"} title={"Change view"}>
                            <Button onClick={() => {
                                setIsSettingsVisible(false)
                                setIsChangeViewVisible(!isChangeViewVisible)
                            }}
                                    className={singleButtonClassName}><LayersIcon
                                className={singleIconClassName}/></Button>
                        </Tooltip>
                        <Tooltip placement={"bottom"} title={"Settings"}>
                            <Button onClick={() => {
                                setIsChangeViewVisible(false)
                                setIsSettingsVisible(!isSettingsVisible)
                            }}
                                    className={singleButtonClassName}>
                                <AiFillSetting className={singleIconClassName}/>
                            </Button>
                        </Tooltip>

                        <Tooltip placement={"bottom"} title={"Full Screen"}>
                            <Button onClick={() => {
                                handle.active ? handle.exit() : handle.enter()
                            }}
                                    className={singleButtonClassName}>
                                {
                                    handle.active ?
                                        <RiFullscreenExitLine className={singleIconClassName}/>
                                        :
                                        <RiFullscreenFill className={singleIconClassName}/>
                                }
                            </Button>
                        </Tooltip>
                        <div className={"relative"}>
                            {
                                isChangeViewVisible &&
                                <ViewChangeListContainer activeView={activeView} onItemClick={onItemClick}/>
                            }
                            {
                                isSettingsVisible &&
                                <SettingsSectionContainer
                                    isPingChecked={isPingChecked}
                                    isGroupingChecked={isGroupingChecked}
                                    setIsGroupingChecked={setIsGroupingChecked}
                                    setIsPingChecked={setIsPingChecked}
                                />
                            }

                        </div>
                    </Control>
                </div>
            </ClickAwayListener>
        </div>

    );
};

export default Controls;