const ManagementCard2 = () => {
  return (
    <div className=" max-w-[400px] flex-1 rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-end justify-start pt-2 px-6 pb-6 gap-[12px] text-left text-xl text-gray-900 font-text-sm-semibold border-[1px] border-solid border-gray-200">
      <div className="rounded" />
      <div className="self-stretch flex flex-col items-center justify-start gap-[17px]">
        <img
          className="self-stretch relative rounded max-w-full overflow-hidden h-[220px] shrink-0 object-cover"
          alt=""
          src="/public/images/ManagementImg2.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <b className="flex-1 relative leading-[30px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Instructor in-app scheduling
                </b>
              </div>
              <div className="self-stretch relative text-sm leading-[20px] font-medium text-gray-500">{`Select all courses  that will be  available to students. `}</div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-base text-gray-500 font-text-sm-normal">
              <div className="self-stretch flex flex-row items-start justify-center gap-[12px] font-text-sm-semibold">
                <img
                  className="relative rounded-xl w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">
                    200+ Driving Lesson
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[12px] font-text-sm-semibold">
                <img
                  className="relative rounded-xl w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">
                    Advanced reporting
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[12px] font-text-sm-semibold">
                <img
                  className="relative rounded-xl w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="relative leading-[24px]">
                    Manual/Auto driving practice
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold text-[#4853F3] text-right">
            Learn more
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-right text-[24px]">
          <div className="flex flex-row items-end justify-center gap-[2px]">
            <div className="flex flex-row items-end justify-center">
              <b className="relative text-[#101828]">
                <span className="leading-[32px]">40</span>
                <span className="text-base leading-[24px]">€</span>
              </b>
            </div>
            <div className="h-[21px] flex flex-row items-end justify-center pt-0 px-0 pb-[3px] box-border text-left text-sm text-gray-500">
              <div className="relative leading-[20px]">Monthly</div>
            </div>
          </div>
          <button className="cursor-pointer p-3 bg-[transparent] self-stretch rounded box-border w-[194px] flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-[#4853F3]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/outlinesupport5.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-text-sm-semibold text-[#4853F3] text-left">
              Add
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/outlinesupport7.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard2;
