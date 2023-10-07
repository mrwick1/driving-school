import { FunctionComponent } from "react";

const Step2Right: FunctionComponent = () => {
  return (
    <div className="grid grid-rows-2 gap-1 ">
      <div className="bg-[#F4F8FB] items-end flex  ">
        <img
          className="object-cover w-4/5 m-auto mb-0"
          alt=""
          src="/public/images/laptopScreen.png"
        />
      </div>
      <div className="bg-[#F4F8FB] items-end flex relative overflow-hidden">
        <div className="w-4/5 m-auto ">
          <div className=" flex flex-col items-start justify-start gap-[16px] w-[271px]  ">
            <div className="flex flex-col items-start justify-start gap-[6px] relative z-10">
              <b className="relative leading-[38px] text-[30px]">
                Your configuration
              </b>
              <div className="relative text-sm leading-[20px] font-medium text-gray-500 inline-block w-[235px]">
                Here's a preview of how your app will look like
              </div>
            </div>
            <button className="cursor-pointer p-3 bg-[transparent] self-stretch rounded box-border h-12 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-[#4853F3]">
              <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-[#4853F3] text-left">
                Show more
              </div>
            </button>
          </div>
          <img
            className="absolute top-0 right-[-30px]  object-cover pointer-events-none"
            alt=""
            src="/public/images/mobile.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2Right;
