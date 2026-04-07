import axios from "axios";
import HomePage from "~/components/pages/HomePage";
import MainLayout from "~/components/templates/MainLayout";
import { unstable_noStore as noStore } from "next/cache";
export default async function Home() {
  noStore();
  const heroBanners = await getHeroBanners();
  const noticeList = await getNotice();
  const eventList = await getEvents();
  return (
    <MainLayout>
      <HomePage
        eventList={eventList}
        noticeList={noticeList}
        heroBanners={heroBanners || []}
      />
    </MainLayout>
  );
}

async function getHeroBanners() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/banner`,
    });
    return res?.data?.data;
  } catch (error) {}
}

async function getNotice() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/notice?type=notice&limit=100`,
    });
    return res?.data?.data;
  } catch (error) {}
}

async function getEvents() {
  try {
    const res = await axios({
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/public/notice?type=event&limit=100`,
    });
    return res?.data?.data;
  } catch (error) {}
}
