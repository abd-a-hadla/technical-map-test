import React from 'react';
import {ISettingsProps} from "./interfaces";
import SingleSwitchItemContainer from "../SingleSwitchItem/singleSwitchItemContainer";

const SettingsSectionContainer = ({
                                      isPingChecked,
                                      setIsPingChecked,
                                      setIsGroupingChecked,
                                      isGroupingChecked
                                  }: ISettingsProps) => {

    return (
        <div
            className={"absolute shadow-4xl top-[-80px] left-[-203px] w-[208px] flex flex-col bg-white p-[1px]"}>
            <SingleSwitchItemContainer
                defaultChecked={isGroupingChecked}
                onSwitchChange={(checked) => {
                    setIsGroupingChecked(checked)
                }}
                label={"Markers Grouping"}
            />
            <SingleSwitchItemContainer
                defaultChecked={isPingChecked}
                onSwitchChange={(checked) => {
                    setIsPingChecked(checked)
                }}
                label={"Markers Ping Angels"}
            />
        </div>
    );
};

export default SettingsSectionContainer;