import Image from "next/image";

const LetterOfInterest = () => {
  return (
    <section className="mt-10">
      <h2 className="text-center uppercase  mx-auto font-bold text-[#333333] mb-6 text-4xl">
        Letter of Intent
      </h2>
      <div className="rounded-xl bg-white shadow p-3 mx-auto w-full lg:w-[30%]">
        <h4 className="text-[18px] font-medium text-[#181D27]">
          Upload Letter of Intent
        </h4>
        <p className="font-normal text-sm">
          Please upload file in jpeg or png format and make sure the file size
          is under 25 MB.
        </p>
        <div className="my-5 border space-y-1 border-[#0070BA] flex flex-col justify-center items-center bg-[#ebf4fa] border-dashed rounded-xl h-44">
          <Image
            className="h-8 w-8 "
            src="/img/cloud.png"
            alt="cloud"
            width={100}
            height={100}
          />
          <h5>Drop file or browse</h5>
          <p className="font-normal text-[#6C606C] text-sm">
            Format: .jpeg, .png & Max file size: 25 MB
          </p>
          <span className="bg-[#0070BA] text-white text-sm px-2  py-1 rounded-sm">
            Browse Files
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <button className="text-[#031330] border border-gray-100 rounded-lg w-full py-2">
            Cancel
          </button>
          <button className="text-white bg-[#0070BA] rounded-lg w-full py-2">
            Done
          </button>
        </div>
      </div>
    </section>
  );
};

export default LetterOfInterest;
