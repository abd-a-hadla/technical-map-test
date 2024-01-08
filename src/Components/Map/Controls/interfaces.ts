import {ISharedMapProps} from "../interface";
import {ISettingsProps} from "../SettingsSection/interfaces";
import {FullScreenHandle} from "react-full-screen";

export interface IControlsProps extends ISharedMapProps, ISettingsProps {
    handle: FullScreenHandle
}