import TitleSec from "../TitleSec/TitleSec";
import Accordions from "../Accordions/Accordions";

const Step3Left = () => {
  return (
    <div className=" h-[826px] overflow-hidden flex flex-col items-start justify-start gap-[32px] text-left text-11xl text-gray-800 font-text-xs-medium">
      <div className="self-stretch flex flex-col items-start justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[6px]">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/public/images/arrow-left.svg"
          />
          <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-[#4853F3] text-center">
            Back
          </div>
        </button>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-[16px]">
        <TitleSec />
        <Accordions />
      </div>
    </div>
  );
};

export default Step3Left;
