import axios from "axios";
import TrainingMap from "~/components/pages/TrainingMap";
import MainLayout from "~/components/templates/MainLayout";

export default async function MapPage({ searchParams }) {
  const { lat, lng, category } = await searchParams;
  // const data = (lat && lng && (await getLocation(lat, lng, category))) || [];
  const data = (await getLocation(lat, lng, category)) || [];

  // const data = [
  //   {
  //     thumbnail: {
  //       url: "https://res.cloudinary.com/dgfvnmlkd/image/upload/v1748309427/zljtqlpuzbt2ocsmkibd.jpg",
  //       publicId: "zljtqlpuzbt2ocsmkibd",
  //     },
  //     _id: "68410090331365eb7f366271",
  //     category: "training",
  //     title: "My 2nd Event113",
  //     description: "This is a event post about something awesome.",
  //     coordinates: {
  //       lat: 28.70406,
  //       lng: 77.102493,
  //       _id: "68410090331365eb7f366272",
  //     },
  //     createdAt: "2025-06-05T02:27:28.192Z",
  //     updatedAt: "2025-06-05T02:27:28.192Z",
  //     __v: 0,
  //   },
  // ];

  return (
    <MainLayout>
      <TrainingMap
        initialData={data}
        selectedCity={{
          center: {
            lat: parseInt(lat),
            lng: parseInt(lng),
            category: category || null,
          },
        }}
      />
    </MainLayout>
  );
}

const getLocation = async (lat, lng, category) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/map`,
      // params: {
      //   lat,
      //   lng,
      //   category: category || null,
      // },
    });
    return response?.data?.data;
  } catch (error) {}
};
