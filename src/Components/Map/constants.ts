import {googleMapSatelliteViewImage, googleMapViewImage, openStreetMapViewImage} from "../../Constants/sharedConstants";
import {IMapViewItemProps} from "../../Interfaces/sharedInterfaces";

export const mapViewDetails :IMapViewItemProps[] = [
    {
        image: openStreetMapViewImage,
        text: "Open Street Map",
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    },
    {
        image: googleMapViewImage,
        text: "Google Map",
        url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
    },
    {
        image: googleMapSatelliteViewImage,
        text: "Google Map Satellite",
        url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
    },
]
