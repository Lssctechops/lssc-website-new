"use client";
import { useRouter } from "next/navigation";
import { lazy, useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiSearchLine, RiResetLeftLine } from "react-icons/ri";
import { useToggleQueryParam } from "~/utils/toggleQueryParam";
const cityList = [
  {
    name: "Delhi",
    value: "delhi",
    center: { lat: 28.709803, lng: 77.102493 },
    radius: 50000,
  },
  // {
  //   name: "Jharkhand",
  //   value: "jharkhand",
  //   center: { lat: 23.610182, lng: 85.279938 },
  //   radius: 50000,
  // },
  // {
  //   name: "Mumbai",
  //   value: "mumbai",
  //   center: { lat: 19.07, lng: 72.87 },
  //   radius: 50000,
  // },
  {
    name: "Kolkata",
    value: "kolkata",
    center: { lat: 22.57, lng: 88.36 },
    radius: 50000,
  },
  {
    name: "Chennai",
    value: "chennai",
    center: { lat: 13.08, lng: 80.27 },
    radius: 50000,
  },
  // {
  //   name: "Bengaluru",
  //   value: "bengaluru",
  //   center: { lat: 12.97, lng: 77.59 },
  //   radius: 50000,
  // },
  // {
  //   name: "Hyderabad",
  //   value: "hyderabad",
  //   center: { lat: 17.38, lng: 78.48 },
  //   radius: 50000,
  // },
  // {
  //   name: "Ahmedabad",
  //   value: "ahmedabad",
  //   center: { lat: 23.03, lng: 72.58 },
  //   radius: 50000,
  // },
  // {
  //   name: "Pune",
  //   value: "pune",
  //   center: { lat: 18.52, lng: 73.85 },
  //   radius: 50000,
  // },
  // {
  //   name: "Jaipur",
  //   value: "jaipur",
  //   center: { lat: 26.91, lng: 75.79 },
  //   radius: 50000,
  // },
  // {
  //   name: "Lucknow",
  //   value: "lucknow",
  //   center: { lat: 26.85, lng: 80.95 },
  //   radius: 50000,
  // },
  // {
  //   name: "Patna",
  //   value: "patna",
  //   center: { lat: 25.6, lng: 85.1 },
  //   radius: 50000,
  // },
  // {
  //   name: "Bhopal",
  //   value: "bhopal",
  //   center: { lat: 23.26, lng: 77.41 },
  //   radius: 50000,
  // },
  // {
  //   name: "Indore",
  //   value: "indore",
  //   center: { lat: 22.72, lng: 75.86 },
  //   radius: 50000,
  // },
  // {
  //   name: "Amritsar",
  //   value: "amritsar",
  //   center: { lat: 31.63, lng: 74.87 },
  //   radius: 50000,
  // },
  // {
  //   name: "Chandigarh",
  //   value: "chandigarh",
  //   center: { lat: 30.74, lng: 76.79 },
  //   radius: 50000,
  // },
  // {
  //   name: "Kochi",
  //   value: "kochi",
  //   center: { lat: 9.97, lng: 76.28 },
  //   radius: 50000,
  // },
  // {
  //   name: "Nagpur",
  //   value: "nagpur",
  //   center: { lat: 21.15, lng: 79.09 },
  //   radius: 50000,
  // },
  {
    name: "Kanpur",
    value: "kanpur",
    center: { lat: 26.45, lng: 80.34 },
    radius: 50000,
  },
  {
    name: "Ranipet",
    value: "ranipet",
    center: { lat: 12.9317, lng: 79.3333 },
    radius: 50000,
  },
  {
    name: "Tambaram",
    value: "tambaram",
    center: { lat: 12.9246, lng: 80.1271 },
    radius: 50000,
  },
  {
    name: "Agra",
    value: "agra",
    center: { lat: 27.1767, lng: 78.0081 },
    radius: 50000,
  },
  {
    name: "Unnao",
    value: "unnao",
    center: { lat: 26.5475, lng: 80.4878 },
    radius: 50000,
  },
  // {
  //   name: "Varanasi",
  //   value: "varanasi",
  //   center: { lat: 25.32, lng: 82.99 },
  //   radius: 50000,
  // },
  // {
  //   name: "Surat",
  //   value: "surat",
  //   center: { lat: 21.17, lng: 72.83 },
  //   radius: 50000,
  // },
  {
    name: "Faridabad",
    value: "faridabad",
    center: { lat: 28.4089, lng: 77.3178 },
    radius: 50000,
  },
  {
    name: "South 24 Parganas",
    value: "south-24-parganas",
    center: { lat: 22.1652, lng: 88.4317 },
    radius: 50000,
  },
  {
    name: "North 24 Parganas",
    value: "north-24-parganas",
    center: { lat: 22.7274, lng: 88.4753 },
    radius: 50000,
  },
  {
    name: "Bhadrak",
    value: "bhadrak",
    center: { lat: 21.0574, lng: 86.5156 },
    radius: 50000,
  },
  {
    name: "Angul",
    value: "angul",
    center: { lat: 20.84, lng: 85.1 },
    radius: 50000,
  },
  {
    name: "Dhenkanal",
    value: "dhenkanal",
    center: { lat: 20.65, lng: 85.6 },
    radius: 50000,
  },
  {
    name: "Deogarh",
    value: "deogarh",
    center: { lat: 21.5463, lng: 84.7333 },
    radius: 50000,
  },
  {
    name: "Sambalpur",
    value: "sambalpur",
    center: { lat: 21.47, lng: 83.98 },
    radius: 50000,
  },
];

export default function LocationSelector({ onCitySelect }) {
  const router = useRouter();
  const handleSelect = (value) => {
    const { center, name, radius } = value ? JSON.parse(value) : {};
    router.push(`/training-map?lat=${center?.lat}&lng=${center?.lng}`);
  };
  return (
    <div className="flex items-center gap-3 bg-primary-600 rounded-lg overflow-hidden transition-[max-width] duration-500 ease-in-out w-fit px-3 py-3">
      <div className="w-fit cursor-pointer text-white flex flex-row gap-1 items-center">
        <span className="text-xl">
          <FaLocationCrosshairs />
        </span>
        <select
          // value={selectedCity}
          onChange={(e) => handleSelect(e.target.value)}
          className="text-sm flex-1  outline-none text-black"
        >
          <option value="">Location</option>
          {cityList.map((city) => (
            <option key={city.value} value={JSON.stringify(city)}>
              {city.name}
            </option>
          ))}
        </select>{" "}
      </div>
    </div>
  );
}
