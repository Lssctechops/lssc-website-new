"use client";
import { GoogleMap, Marker, InfoWindow, Circle } from "@react-google-maps/api";
import Image from "next/image";
import { useState } from "react";
import { BsBank2 } from "react-icons/bs";
import LocationSelector from "../atoms/LocationSelector";
import EventSelector from "../atoms/EventSelector";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const defaultCenter = { lat: 28.709803, lng: 77.102493 };

export default function CustomMap({
  data,
  loading,
  filterClick,
  city,
  onCitySelect,
  eventTypeFilterClick,
  category,
}) {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Controls */}
      <div className="flex flex-col gap-2 absolute top-4 left-4 z-[50]">
        <LocationSelector onCitySelect={onCitySelect} />
        <EventSelector category={category} handleClick={eventTypeFilterClick} />
        {/* <button
          onClick={() => filterClick("skill_center")}
          className="w-fit bg-primary-600 rounded-lg cursor-pointer px-4 py-3 text-white flex flex-row gap-2 items-center"
        >
          <span className="text-xl">
            <BsBank2 />
          </span>
          <span className="text-base font-medium">Skill Center Near Me</span>
        </button> */}
      </div>
      {/* Map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={city?.center?.lat ? city?.center : defaultCenter}
        zoom={city?.center?.lat ? 8 : 5}
      >
        {data?.map((item) => (
          <Marker
            key={item._id}
            position={item.coordinates}
            onClick={() => setActiveMarker(item._id)}
            icon={{
              url:
                item.category === "training"
                  ? "/icon/event-mark.png"
                  : "/icon/skill-center-mark.png",
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          >
            {activeMarker === item._id && (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src={item.thumbnail?.url}
                    height={200}
                    width={300}
                    unoptimized
                    alt={item.title}
                    className="w-[80px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="bg-yellow-100 capitalize w-fit rounded p-2 text-yellow-500 text-xs font-medium">
                      {item.type}
                    </span>
                    <h4 className="font-bold text-[15px] text-primary-600">
                      {item.title}
                    </h4>
                    <p className="font-normal text-xs text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </GoogleMap>
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-50">
          <span className="text-primary-600 font-medium">Loading...</span>
        </div>
      )}
    </div>
  );
}
