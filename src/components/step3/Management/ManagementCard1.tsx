const ManagementCard1 = () => {
  return (
    <div className="self-stretch flex-1 max-w-[400px] rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-end justify-start pt-2 px-6 pb-6 relative gap-[12px] text-left text-xl text-gray-900 font-text-sm-semibold border-[1px] border-solid border-[#4853F3]">
      <div className="rounded z-[0]" />
      <div className="self-stretch flex flex-col items-end justify-start gap-[24px] z-[1]">
        <img
          className="self-stretch relative rounded max-w-full overflow-hidden h-[220px] shrink-0 object-cover"
          alt=""
          src="/public/images/ManagementImg.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <b className="self-stretch relative leading-[30px] overflow-hidden text-ellipsis whitespace-nowrap">
                Manager - Managed
              </b>
              <div className="self-stretch relative text-sm leading-[20px] font-medium text-[#667085]">
                Select all courses that will be available to students. courses
                that will be available to students. courses that will be
                available to students.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-base text-[#667085] font-text-sm-normal">
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
          <a
            href="#"
            className="relative text-sm [text-decoration:underline] leading-[20px] font-semibold text-[#4853F3] text-right"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className=" leading-[normal] my-0 mx-[!important] absolute top-[12px] left-[24px] rounded-sm bg-[#ECF0FC] flex flex-row items-center justify-center py-1 px-2 z-[2] text-center text-[10px] text-[#4853F3]">
        <div className="relative font-medium mix-blend-normal">Included</div>
      </div>
    </div>
  );
};

export default ManagementCard1;
