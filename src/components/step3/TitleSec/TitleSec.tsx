const TitleSec = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between text-left text-11xl text-gray-800 font-text-xs-medium">
      <b className="relative leading-[38px]">Courses</b>
      <div className="flex flex-row items-center justify-end gap-[16px] text-base text-gray-500 font-text-sm-normal">
        <div className="relative w-[255px] h-11">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-start justify-start">
            <div className="self-stretch flex  items-center pl-2 justify-start border border-solid border-gray-200 relative rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] ">
              <button>
                <img src="/public/images/searchIcon.svg" />
              </button>
              <input
                className=" ring-0 outline-none font-text-xs-medium text-base bg-white self-stretch  flex flex-row items-center justify-start py-2.5 px-3.5 border-[1px] border-none bg-transparent "
                placeholder="Search courses"
                type="search"
              />
            </div>
          </div>
        </div>
        <div className="rounded bg-[#F9FAFB] box-border h-11 flex flex-row items-center justify-start p-1.5 gap-[8px] border-[1px] border-solid border-gray-100">
          <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-[#4853F3] self-stretch rounded-md shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] overflow-hidden flex flex-row items-center justify-center">
            <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-white text-left">
              Monthly
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-3.5 bg-white self-stretch rounded-md overflow-hidden flex flex-row items-center justify-center gap-[8px]">
            <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-gray-500 text-left">
              Annual
            </div>
            <div className="flex flex-row items-start justify-start mix-blend-multiply">
              <div className="rounded-2xl bg-[#FB5B33D9] flex flex-row items-center justify-center py-0.5 px-2.5">
                <div className="relative text-sm leading-[20px] font-medium font-text-xs-medium text-white text-center">
                  20% Off
                </div>
              </div>
            </div>
          </button>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">Startups</div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">Team</div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">Plan</div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">Billing</div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">Email</div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">
              Notifications
            </div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">
              Integrations
            </div>
          </div>
          <div className="rounded-md overflow-hidden hidden flex-row items-center justify-center py-2.5 px-3.5">
            <div className="relative leading-[24px] font-medium">API</div>
          </div>
          <div className="rounded-lg hidden flex-row items-start justify-start">
            <div className="rounded-lg overflow-hidden flex flex-row items-center justify-center p-3">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/arrowright.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSec;
