const CanWeHelp = () => {
  return (
    <div className=" absolute right-[74px] top-8 z-10  rounded bg-white shadow-[0px_1px_20px_rgba(16,_24,_40,_0.12)] w-[427px] overflow-hidden flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-xl text-gray-900 font-text-md-medium">
      <div className="self-stretch h-20 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex-1 flex flex-row items-center justify-start">
            <div className="relative leading-[30px] font-semibold">
              Can we help you?
            </div>
          </div>
          <button className="relative w-[30px] h-[30px] overflow-hidden shrink-0">
            <img alt="" src="/images/close-button.svg" />
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-base text-gray-500">
          <div className="w-[140px] flex flex-row items-center justify-between">
            <div className="relative rounded-[50%] bg-[#00C24E] w-3 h-3" />
            <div className="relative leading-[24px] font-medium">
              We are available
            </div>
          </div>
          <div className="flex flex-row items-center justify-end">
            <div className="relative leading-[24px] font-medium">
              10:00AM - 6:30PM
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px] text-base">
        <div className="self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-row items-center justify-between py-1.5 px-0 box-border">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="rounded-full bg-[#F4F8FB] flex flex-row items-center justify-start p-1.5">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/public/images/telephone-icon.svg"
              />
            </div>
            <div className="relative leading-[24px] font-medium">
              0955 555 555
            </div>
          </div>
          <button className="cursor-pointer py-2 px-10 bg-[transparent] rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center border-[1.5px] border-solid border-primary-primary-main">
            <div className="relative text-base leading-[24px] font-medium font-text-md-medium text-primary-primary-main text-left">
              Call us
            </div>
          </button>
        </div>
        <div className="self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-0 box-border gap-[8px]">
          <div className="rounded-full bg-[#F4F8FB] flex flex-row items-center justify-start p-1.5">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/public/images/mail-icon.svg"
            />
          </div>
          <div className="relative leading-[24px] font-medium">
            info@zarfautoskola.sk
          </div>
        </div>
        <div className="self-stretch rounded-lg h-12 overflow-hidden shrink-0 flex flex-row items-center justify-start py-1.5 px-0 box-border gap-[8px]">
          <div className="rounded-full bg-[#F4F8FB] flex flex-row items-center justify-start p-1.5">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/public/images/whatsapp-icon.svg"
            />
          </div>
          <div className="relative leading-[24px] font-medium">
            0800 000 0000
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanWeHelp;
