import { FunctionComponent } from "react";

const InstructorRight: FunctionComponent = () => {
  return (
    <div className="self-stretch rounded bg-gray-25 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start py-3 px-4 text-left text-xl text-gray-900 font-text-sm-semibold border-[1px] border-solid border-gray-100">
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative rounded w-12 h-12 object-cover"
          alt=""
          src="/public/images/intructorImg.png"
        />
        <div className="flex-1 flex flex-row items-end justify-between">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <b className="relative leading-[30px]">Course B</b>
            <div className="relative text-base leading-[24px] font-medium text-[#667085]">
              6 instructors
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-end gap-[4px] text-base text-[#667085]">
            <div className="relative leading-[24px] font-medium hidden">
              {" "}
              2 extra
            </div>
            <div className="flex flex-row items-end justify-center gap-[2px] text-right text-lg text-gray-900">
              <div className="flex flex-row items-end justify-center">
                <b className="relative">
                  <span className="leading-[28px]">9</span>
                  <span className="text-xs leading-[18px]">€</span>
                </b>
              </div>
              <div className="h-[21px] flex flex-row items-end justify-center pt-0 px-0 pb-[3px] box-border text-left text-xs text-[#667085]">
                <div className="relative leading-[150%]">/month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorRight;
