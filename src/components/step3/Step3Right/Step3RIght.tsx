const Step3Right = () => {
  return (
    <div className=" flex flex-col items-start justify-start gap-[24px] text-left text-xl text-gray-800 font-text-xs-medium">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="relative leading-[30px]">Selected Course</b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
        <div className="self-stretch h-[388px] overflow-hidden shrink-0 flex flex-row items-start justify-start relative gap-[8px] text-xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[12px] z-[0] h-[388px] overflow-y-scroll">
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course A - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowUp.svg"
                  />
                </div>
              </div>
              <div className="self-stretch rounded bg-white flex flex-row items-center justify-start py-2.5 px-4 border-[1px] border-solid border-gray-100">
                <div className="flex-1 flex flex-row items-center justify-between">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                      <b className="relative leading-[30px]">Course AM</b>
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/public/images/infoIcon.svg"
                      />
                    </div>
                    <div className="relative text-base leading-[22px] font-medium text-gray-500">
                      Max 4 kw - from 15 y.o.
                    </div>
                  </div>
                  <div className="self-stretch w-[116px] flex flex-col items-end justify-between text-right text-lg text-gray-900">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-5 h-5 overflow-hidden shrink-0">
                      <img
                        className="absolute h-[82.5%] w-[74.17%] top-[8.75%] right-[12.92%] bottom-[8.75%] left-[12.92%] max-w-full overflow-hidden max-h-full"
                        alt=""
                        src="/public/images/trashIcon.svg"
                      />
                    </button>
                    <div className="flex flex-row items-end justify-center gap-[2px]">
                      <div className="flex flex-row items-end justify-center">
                        <b className="relative">
                          <span className="leading-[28px]">150</span>
                          <span className="text-xs leading-[18px]">€</span>
                        </b>
                      </div>
                      <div className="h-[21px] flex flex-row items-end justify-center pt-0 px-0 pb-[3px] box-border text-left text-xs text-gray-500">
                        <div className="relative leading-[150%]">Monthly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course B - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowDown.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course B - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowDown.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course B - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowDown.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course B - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowDown.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-2.5 px-4 gap-[16px] border-[1px] border-solid border-gray-100">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative rounded w-12 h-12 object-cover"
                  alt=""
                  src="/public/images/bikeImg2.png"
                />
                <div className="flex-1 flex flex-row items-center justify-between">
                  <b className="relative leading-[30px]">
                    Course B - Motorcycle
                  </b>
                  <img
                    className="relative w-5 h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/public/images/arrowDown.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute my-0 mx-[!important] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(252,_252,_253,_0),_#fff)] [filter:blur(32px)] w-[428px] h-[9px] z-[2]" />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
          <div className="self-stretch rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-between py-0.5 px-0 text-[#98A2B3]">
            <div className="relative leading-[20px]">Total excluding VAT</div>
            <div className="relative text-right text-base">
              <span className="leading-[24px]">600</span>
              <span className="text-xs leading-[150%]">€</span>
            </div>
          </div>
          <div className="self-stretch rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-between py-1.5 px-0 text-base">
            <div className="relative leading-[24px] font-semibold">Total</div>
            <div className="flex flex-row items-end justify-center gap-[2px] text-right text-lg text-gray-900">
              <div className="flex flex-row items-end justify-center">
                <b className="relative">
                  <span className="leading-[28px]">720</span>
                  <span className="text-xs leading-[18px]">€</span>
                </b>
              </div>
              <div className="h-[21px] flex flex-row items-end justify-center pt-0 px-0 pb-[3px] box-border text-left text-xs text-gray-500">
                <div className="relative leading-[150%]">Monthly</div>
              </div>
            </div>
          </div>
        </div>
        <button className="self-stretch rounded bg-[#4853F3] h-12 flex flex-row items-center justify-center p-3 box-border gap-[8px] text-white">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/outlinesupport2.svg"
          />
          <div className="relative leading-[24px] font-medium">Confirm</div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
            alt=""
            src="/outlinesupport2.svg"
          />
        </button>
        <a
          href="#"
          className="self-stretch rounded h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center py-0 px-4 box-border text-center text-[#4853F3]"
        >
          <div className="self-stretch relative [text-decoration:underline] leading-[24px] font-medium">
            Frequently Asked Questions
          </div>
        </a>
      </div>
    </div>
  );
};

export default Step3Right;
