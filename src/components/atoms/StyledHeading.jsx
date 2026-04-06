import { RiSupabaseFill } from "react-icons/ri";
const StyledHeading = ({
  heading = (
    <>
      <span className="text-primary-600">Bridging</span> Skill Gap
    </>
  ),
  containerStyle,
}) => {
  return (
    <div className={`relative w-fit ${containerStyle}`}>
      <img src="/icon/abstract-line.svg" className="absolute -top-7 -left-7" />
      <div className="w-fit rounded-[11px] bg-[#F5FBFF] border-gray-100 border p-3 md:p-4 flex flex-row items-center gap-3">
        <div className="h-[45px] w-[45px] md:h-[62px] md:w-[62px] bg-gradient-to-r from-[#8C0902] to-[#420705] p-3 md:p-[14px] rounded-[6px] flex-center text-4xl text-white">
          <RiSupabaseFill />
        </div>

        <h2 className="text-[22px] md:text-[30px] xl:text-[40px] font-semibold text-black">
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default StyledHeading;
