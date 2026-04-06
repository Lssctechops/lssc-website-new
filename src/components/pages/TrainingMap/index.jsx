"use client";

import { useState, useEffect } from "react";
import CustomMap from "~/components/molecules/CustomMap";
import GoogleMapProvider from "~/components/molecules/GoogleMapProvider";

export default function TrainingMap({ initialData, selectedCity }) {
  // const [selectedCity, setSelectedCity] = useState(null);
  const [filter, setFilter] = useState("all"); // all, event, skill_center
  const [eventTypeFilter, setEventTypeFilter] = useState("all");
  const [data, setData] = useState(initialData || []);
  const [loading, setLoading] = useState(false);

  // Handle city selection
  const handleSelectCity = (cityData) => {
    const city = JSON.parse(cityData);
    // setSelectedCity(city);
  };

  // Handle event filter
  const handleEventTypeFilter = (value) => {
    setFilter("event");
    setEventTypeFilter(value);
  };

  // Handle skill center filter
  const handleSkillCenterFilter = () => {
    setFilter("skill_center");
    setEventTypeFilter("all");
  };

  return (
    <GoogleMapProvider>
      <div className="flex flex-col gap-4">
        <CustomMap
          category={eventTypeFilter}
          onCitySelect={handleSelectCity}
          filterClick={handleSkillCenterFilter}
          eventTypeFilterClick={handleEventTypeFilter}
          data={initialData}
          loading={loading}
          city={selectedCity}
        />
      </div>
    </GoogleMapProvider>
  );
}
