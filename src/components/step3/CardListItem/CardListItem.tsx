import BikeComponent from "../BikeComponent/BikeComponent";

const CardListItem = () => {
  return (
    <div
      className="self-stretch rounded bg-white shadow-[0px_2px_8px_rgba(0,_0,_0,_0.06)] flex flex-col items-start justify-start p-4 gap-[16px] text-left 
        text-[24px] text-[#1D2939] font-text-xs-medium border-[1px] border-solid border-gray-100"
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
        <img
          className="relative rounded w-12 h-12 object-cover"
          alt=""
          src="/public/images/modalIcon.png"
        />
        <div className="flex-1 flex flex-row items-center justify-between">
          <b className="relative leading-[32px]">Course A - motorcycle</b>
          <div className="flex flex-row items-center justify-center gap-[4px] text-right text-sm text-gray-500">
            <div className="relative leading-[20px] font-medium flex items-center  shrink-0">
              3 Course
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/public/images/arrowUp.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xl">
        <BikeComponent />
        <BikeComponent />
        <BikeComponent />
      </div>
    </div>
  );
};

export default CardListItem;
