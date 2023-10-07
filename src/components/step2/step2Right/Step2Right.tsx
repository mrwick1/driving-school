import { FunctionComponent } from "react";

const Step2Right: FunctionComponent = () => {
  return (
    // <div className="relative overflow-hidden text-left text-11xl text-gray-800 font-text-xs-medium">
    //   <div className=" bg-[#F4F8FB] w-[756px] h-[882px]" />
    //   <div className="absolute top-[0px] left-[0px] w-[756px] h-[441px] overflow-hidden">
    //     <img
    //       className="absolute top-[64px] left-[50%] translate-x-[-50%]  object-cover w-4/5 m-auto"
    //       alt=""
    //       src="/public/images/laptopScreen.png"
    //     />
    //   </div>
    //   <div className="absolute top-[320px] left-[114px] bg-aliceblue w-[580px] h-px hidden" />
    //   <img
    //     className="absolute top-[484px] left-[240px]  object-cover"
    //     alt=""
    //     src="/public/images/mobile.png"
    //   />
    //   <div className="absolute top-[599px] left-[69px] flex flex-col items-start justify-start gap-[16px]">
    //     <div className="flex flex-col items-start justify-start gap-[6px]">
    //       <b className="relative leading-[38px]">Your configuration</b>
    //       <div className="relative text-sm leading-[20px] font-medium text-gray-500 inline-block w-[235px]">
    //         Here's a preview of how your app will look like
    //       </div>
    //     </div>
    //     <button className="cursor-pointer p-3 bg-[transparent] self-stretch rounded box-border h-12 flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-[#4853F3]">
    //       <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-[#4853F3] text-left">
    //         Show more
    //       </div>
    //     </button>
    //   </div>
    // </div>
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
