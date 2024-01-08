import {MapContainerProps} from "react-leaflet/lib/MapContainer";
import {IMapViewItemProps} from "../../Interfaces/sharedInterfaces";

export interface IMapContainerProps extends MapContainerProps {
    markerData?: any
}

export interface ISharedMapProps {
    onItemClick: (item: IMapViewItemProps) => void
    activeView: string
}