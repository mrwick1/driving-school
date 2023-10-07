const TellUsLeft = () => {
  return (
    <div className="h flex  h-screen max-h-[800px] items-center  pl-[76px]">
      <div className="max-w-[460px] flex flex-col items-center justify-start gap-[25px] text-left text-xs text-gray-900 font-text-md-medium">
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-[30px]">
          <b className="self-stretch relative leading-[38px]">
            Tell us about your driving school
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-sm">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-medium">
                  Select country
                </div>
                <select className="self-stretch rounded bg-gray-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-3 px-3.5 border-[1px] border-solid border-gray-300" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-medium">
                  Driving school name
                </div>
                <input
                  className="font-medium font-text-md-medium text-base bg-gray-white self-stretch rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-3 px-3.5 border-[1px] border-solid border-gray-300"
                  placeholder="Enter"
                  type="text"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                <div className="relative leading-[20px] font-medium">
                  Driving school city
                </div>
                <input
                  className="font-medium font-text-md-medium text-base bg-gray-white self-stretch rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-3 px-3.5 border-[1px] border-solid border-gray-300"
                  placeholder="Enter"
                  type="text"
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-3 bg-[#4853F3] self-stretch rounded h-12 flex flex-row items-center justify-center box-border gap-[8px]">
            <div className="relative text-base leading-[24px] font-medium font-text-md-medium text-white text-left">
              Continue
            </div>
          </button>
        </div>

        <div className="self-stretch rounded bg-[#F8F8F8] overflow-hidden  flex-col items-start justify-start p-2.5">
          <div className="self-stretch flex flex-row items-start justify-center gap-[12px]">
            <div className="flex flex-row items-start justify-center pt-1.5 px-0 pb-0">
              <div className="rounded bg-[#22809e] bg-opacity-10  overflow-hidden flex flex-row items-start justify-center p-1.5">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/images/location.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <b className="relative leading-[24px] text-[#101828]">
                Multiple location?
              </b>
              <div className="self-stretch relative leading-[150%] font-medium text-gray-500">
                Enter your main location details first. After registration, you
                can add more locations with special rewards and discounts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TellUsLeft;
