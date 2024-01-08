import {ISharedMapProps} from "../interface";

export interface ISettingsProps  {
    isGroupingChecked: boolean
    setIsGroupingChecked: (checked: boolean) => void
    isPingChecked: boolean
    setIsPingChecked: (checked: boolean) => void
}