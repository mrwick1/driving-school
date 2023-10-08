const CourseModal = () => {
  return (
    <div className="rounded-lg bg-gray-25 shadow-[0px_4px_12px_rgba(0,_0,_0,_0.04)] box-border w-[872px] flex flex-col items-start justify-start p-6 gap-[16px] text-left text-xl text-gray-900 font-text-xs-medium border-[1px] border-solid border-gray-300">
      <div className="w-[824px] flex flex-row items-start justify-between text-[24px]">
        <div className="w-[784px] flex flex-row items-start justify-between">
          <div className="flex flex-col items-start justify-center gap-[4px]">
            <b className="relative leading-[32px]">Course A1</b>
            <div className="relative text-sm leading-[20px] font-medium text-[#667085]">
              Course A! for motorcycles follows all actual laws set by the
              Slovak Government.
            </div>
          </div>
          <div className="h-6 flex flex-row items-center justify-center gap-[2px] text-xl">
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[30px] font-semibold">150</div>
              <div className="relative text-xs leading-[18px] font-semibold flex items-end w-[9px] h-[27px] shrink-0">
                €
              </div>
            </div>
            <div className="relative text-sm leading-[20px] text-[#667085]">
              mesačne
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
          <img
            className=" max-w-full overflow-hidden max-h-full"
            alt=""
            src="/public/images/closeButton.svg"
          />
        </button>
      </div>
      <div className="self-stretch bg-gray-white flex flex-row items-center justify-start p-4 border-[1px] border-solid border-[#E4E7EC]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <b className="relative leading-[30px]">Course Breakdown</b>
            <div className="relative text-sm leading-[20px] text-[#667085]">
              Discover the optimal path to elevate your driving proficiency with
              our design.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-base text-[#667085]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
              <img
                className="relative w-10 h-10 overflow-hidden shrink-0"
                alt=""
                src="/public/images/theoryImg.svg"
              />
              <div className="relative leading-[24px] font-medium">
                Theory lessons
              </div>
              <b className="relative text-xl leading-[30px] text-gray-900">
                06
              </b>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start gap-[4px] text-center">
              <img
                className="relative w-10 h-10 overflow-hidden shrink-0"
                alt=""
                src="/public/images/steeringImg.svg"
              />
              <div className="relative leading-[24px] font-medium flex items-center justify-center w-[178px]">
                Simulator/Driving center lessions
              </div>
              <b className="relative text-xl leading-[30px] text-gray-900 text-left">
                06
              </b>
            </div>
            <div className="flex-1 flex flex-col items-center justify-start gap-[4px]">
              <img
                className="relative w-10 h-10 overflow-hidden shrink-0"
                alt=""
                src="/public/images/trafficImg.svg"
              />
              <div className="relative leading-[24px] font-medium">
                Traffic lessons
              </div>
              <b className="relative text-xl leading-[30px] text-gray-900">
                18
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-gray-white flex flex-row items-center justify-start p-4 border-[1px] border-solid border-[#E4E7EC]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
          <b className="relative leading-[30px]">Course Features</b>
          <div className="self-stretch flex flex-row items-start justify-between text-base text-[#667085] font-text-sm-normal">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    200+ Driving Lesson
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Advanced
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Manual/Auto driving practice
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    200+ Driving Lesson
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Advanced
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Manual/Auto driving practice
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[8px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    200+ Driving Lesson
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Advanced
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-xs font-text-xs-medium">
                <img
                  className="relative rounded-3xs w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/public/images/checkIcon.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    Manual/Auto driving practice
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
