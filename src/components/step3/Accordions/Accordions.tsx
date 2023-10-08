import { FunctionComponent } from "react";
import CardListItem from "../CardListItem/CardListItem";

const Accordions: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-row items-start justify-start gap-[8px] text-left text-[24px] text-gray-800 font-text-xs-medium">
      <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
        <CardListItem />
        <div className="self-stretch rounded bg-white shadow-[0px_4px_16px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-gray-100">
          <img
            className="relative rounded w-12 h-12 object-cover"
            alt=""
            src="/public/images/modalIcon.png"
          />
          <div className="flex-1 flex flex-row items-center justify-between">
            <b className="relative leading-[32px]">Course B</b>
            <div className="flex flex-row items-center justify-center gap-[4px] text-right text-sm text-gray-500">
              <div className="relative leading-[20px] font-medium flex items-center w-[140px] shrink-0">
                1 Course
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/public/images/arrowDown.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded bg-white shadow-[0px_4px_16px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-gray-100">
          <img
            className="relative rounded w-12 h-12 object-cover"
            alt=""
            src="/public/images/modalIcon.png"
          />
          <div className="flex-1 flex flex-row items-center justify-between">
            <b className="relative leading-[32px]">Course C</b>
            <div className="flex flex-row items-center justify-center gap-[4px] text-right text-sm text-gray-500">
              <div className="relative leading-[20px] font-medium flex items-center w-[140px] shrink-0">
                1 Course
              </div>
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src="/public/images/arrowDown.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
