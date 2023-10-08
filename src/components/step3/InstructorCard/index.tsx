const InstructorCard = () => {
  return (
    <div className=" w-[260px] rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-5 gap-[16px] text-left text-base text-gray-900 font-text-sm-semibold border-[1px] border-solid border-gray-100">
      <img
        className="relative w-[260px] h-[190px] object-cover"
        alt=""
        src="/public/images/courseImg.png"
      />
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-3">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[2px]">
          <b className="self-stretch relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
            Course A2
          </b>
          <div className="self-stretch relative text-xs leading-[18px] font-medium text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap">
            No extra cost
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-center">
          <button className="cursor-pointer rounded-full p-1 bg-white rounded-20xl flex flex-row items-end justify-center border-[1px] border-solid border-gray-200">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/public/images/minusIcon.svg"
            />
          </button>
          <div className="rounded flex flex-col items-center justify-center">
            <div className="relative leading-[24px] font-semibold flex items-center justify-center w-6">
              5
            </div>
          </div>
          <button className="cursor-pointer p-1 bg-white rounded-full rounded-20xl flex flex-row items-end justify-center border-[1px] border-solid border-gray-200">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/public/images/plusIcon.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
