import MediaNews from "../molecules/MediaNews";
import MediaEvents from "../molecules/MediaEvents";
import BackButton from "../atoms/BackButton";

const MediaLibrary = () => {
  return (
    <main className="container  py-10">
      {/* <BackButton /> */}
      <div className="space-y-10 lg:space-y-28">
        <MediaNews />
        <MediaEvents />
      </div>
    </main>
  );
};

export default MediaLibrary;
