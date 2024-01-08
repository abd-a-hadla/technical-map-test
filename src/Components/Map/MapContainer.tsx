import React, {useState} from "react";
import {MapContainer as LeafletMapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "./styles.scss";
import {IMapContainerProps} from "./interface";
import L from 'leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import {mapViewDetails} from "./constants";
import Controls from "./Controls/controls";
import {markersData} from "../../Constants/fakeData";
import {renderToString} from "react-dom/server";
import {BsTriangleFill} from "react-icons/bs";
import {FullScreen, useFullScreenHandle} from "react-full-screen";

const MapContainer: React.FC<IMapContainerProps> = ({
                                                        markerData,
                                                        ...props
                                                    }) => {
    const [currentView, setCurrentView] = useState<string>(mapViewDetails[0]?.url)
    const [isGroupingChecked, setIsGroupingChecked] = useState(true)
    const [isPingChecked, setIsPingChecked] = useState(true)
    const handle = useFullScreenHandle();
    const position = [59.3293, 18.0686];
    const CustomMarkerIcon = ({additionalIcon}: any) => {
        return (
            <div>
                <div
                    className={"absolute w-3 h-3 opacity-75 rounded-full top-[-3px] left-[9px] animate-ping duration-1000 ease-in infinite ping-animation"}/>
                <div className={`absolute top-[-8px] left-[11px] !text-[8px] additional-arrow`}>
                    {additionalIcon}
                </div>
            </div>
        );
    };
    const MarkersItems = () => {
        const additionalIcon = <BsTriangleFill/>
        let items = markersData.map((marker) => {
            return (
                <Marker
                    key={marker.id}
                    position={[marker.latitude, marker.longitude]}
                    icon={L.divIcon({
                        className: `!h-8 !w-8 text-white p-1 font-bold text-sm text-center bg-contain bg-center bg-no-repeat object-contain custom-marker-icon ${marker?.color}`,
                        html: renderToString(
                            <>
                                {isPingChecked && <CustomMarkerIcon marker={marker} additionalIcon={additionalIcon}/>}
                            </>
                        ),
                    })}
                >
                    <Popup>{marker.name}</Popup>
                </Marker>
            )
        })
        return <div>
            {items}
        </div>
    }
    return (
        <FullScreen handle={handle}>
            <div
                className={`overflow-hidden relative  rounded-lg ${handle.active ? "m-0 h-screen" : "h-[500px] m-10"}`}>
                <LeafletMapContainer
                    attributionControl={true}
                    zoomControl={false}
                    fadeAnimation={true}
                    center={position as any}
                    zoom={13}
                    scrollWheelZoom={false}
                    className={"h-full"}
                    {...props}
                >
                    <TileLayer url={currentView}/>
                    <Controls
                        activeView={currentView}
                        onItemClick={(item) => {
                            setCurrentView(item?.url)
                        }}
                        isGroupingChecked={isGroupingChecked}
                        setIsGroupingChecked={setIsGroupingChecked}
                        isPingChecked={isPingChecked}
                        setIsPingChecked={setIsPingChecked}
                        handle={handle}
                    />
                    <>
                        {
                            isGroupingChecked ?
                                <MarkerClusterGroup>
                                    <MarkersItems/>
                                </MarkerClusterGroup>
                                :
                                <MarkersItems/>
                        }
                    </>
                </LeafletMapContainer>
            </div>
        </FullScreen>
    );
};

export default MapContainer;