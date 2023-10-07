const Step2Left = () => {
  return (
    <div className="flex h-screen max-h-[800px] items-center pl-20">
      <div className=" flex flex-col items-start justify-start gap-[32px] text-left text-sm text-gray-500 font-text-sm-normal">
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
        <div className="w-[460px] flex flex-col items-center justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px] text-gray-800 font-text-xs-medium">
              <div className="self-stretch flex flex-col items-center justify-start gap-[12px] text-[30px]">
                <b className="self-stretch relative leading-[38px]">
                  Select colors for your app and admin panel
                </b>
                <div className="self-stretch relative text-sm leading-[20px] font-medium text-[#667085]">
                  Select colors and import logo of your driving school
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[20px] font-semibold">
                  Primary color
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="w-[324px] flex flex-row flex-wrap items-center justify-start gap-[12px]">
                    <button className="cursor-pointer p-1 bg-[transparent] rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start relative gap-[10px] border-[1px] border-solid border-gray-300">
                      <div className="relative rounded bg-crimson w-7 h-7 hidden z-[0]" />
                      <img
                        className="w-6 h-6"
                        alt=""
                        src="/public/images/plus.svg"
                      />
                    </button>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#E43242] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#ED8F1C] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#0FAA72] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#4853F3] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#B7C7FD] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-gray-400 w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative leading-[20px] font-semibold">
                  Secondary color
                </div>
                <div className="self-stretch flex flex-row items-center justify-start">
                  <div className="w-[324px] flex flex-row flex-wrap items-center justify-start gap-[12px]">
                    <button className="cursor-pointer p-1 bg-[transparent] rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start relative gap-[10px] border-[1px] border-solid border-gray-300">
                      <div className="relative rounded bg-crimson w-7 h-7 hidden z-[0]" />
                      <img
                        className="  w-6 h-6  "
                        alt=""
                        src="/public/images/plus.svg"
                      />
                    </button>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#E43242] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#ED8F1C] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#0FAA72] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#4853F3] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-[#B7C7FD] w-7 h-7" />
                    </div>
                    <div className="flex flex-row items-center justify-start p-1">
                      <div className="relative rounded bg-gray-400 w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[20px] font-semibold">
                    Upload logo
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-center text-5xl text-gray-white">
                    <img src="/public/images/profileIcon.svg" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[6px] text-left text-xs text-gray-500">
                      <div className="flex flex-row items-start justify-start gap-[12px]">
                        <button className="cursor-pointer py-2 px-6 bg-gray-white rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-gray-300">
                          <div className="flex flex-row items-center justify-start gap-[8px]">
                            <img
                              className="relative w-5 h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/public/images/uploadIcon.svg"
                            />
                            <div className="relative text-base leading-[24px] font-text-xs-medium text-gray-500 text-left">
                              Upload
                            </div>
                          </div>
                        </button>
                        <button className="py-2 px-6 bg-gray-white rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-gray-200">
                          <div className="relative text-base leading-[24px] font-text-xs-medium text-gray-500 text-left">
                            Remove
                          </div>
                        </button>
                      </div>
                      <div className="self-stretch relative leading-[18px] font-medium">
                        *.png, *jpg file up to 10 MB at least 300px by 300px
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative leading-[20px] font-text-sm-normal text-gray-500 hidden">
                  This is a hint text to help user.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-3 bg-[#4853F3] self-stretch rounded h-12 flex flex-row items-center justify-center box-border gap-[8px]">
              <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-white text-left">
                Continue
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-0 px-4 bg-gray-white rounded w-[460px] h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center box-border">
            <div className="self-stretch relative text-base leading-[24px] font-medium font-text-xs-medium text-[#4853F3] text-center">
              Skip, I'll customize later
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2Left;
