const BikeComponent = () => {
  return (
    <div className="flex-1 rounded bg-white flex flex-col items-center justify-center py-4 px-5 gap-[16px] text-left text-xl text-gray-800 font-text-xs-medium border-[1px] border-solid border-gray-200">
      <img
        className="relative rounded-sm w-[205px] h-[180px] object-cover"
        alt=""
        src="/public/images/bikeImg.png"
      />
      <div className="self-stretch flex flex-col items-center justify-center gap-[12px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[4px]">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <b className="relative leading-[30px]">Course A1</b>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/public/images/infoIcon.svg"
            />
          </div>
          <div className="relative text-base leading-[24px] font-medium text-gray-500">
            Max 4 kw - from 15 y.o.
          </div>
        </div>
        <div className="h-6 flex flex-row items-end justify-center gap-[2px] text-gray-900">
          <div className="h-7 flex flex-row items-start justify-start">
            <div className="relative leading-[30px] font-semibold">150</div>
            <div className="relative text-xs leading-[18px] font-semibold flex items-end w-[9px] h-[27px] shrink-0">
              €
            </div>
          </div>
          <div className="relative text-sm leading-[20px] text-gray-500">
            Monthly
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-2 bg-primary-primary-main self-stretch rounded h-10 flex flex-row items-center justify-center box-border gap-[8px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/outlinesupport7.svg"
        />
        <div className="relative text-base leading-[24px] font-medium font-text-xs-medium text-base-white text-left">
          Selected
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/outlinesupport7.svg"
        />
      </button>
    </div>
  );
};

export default BikeComponent;
