const Snackbar = () => {
  return (
    <div className="w-fit rounded-md bg-neutral-white-0 shadow-[0px_2px_6px_-1px_rgba(16,_24,_40,_0.1),_0px_2px_4px_-2px_rgba(16,_24,_40,_0.1)] h-[72px] flex flex-row items-center justify-start py-0 pr-4 pl-8 box-border text-left text-base text-[#3A3A3A] font-text-sm-semibold">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/public/images/blueTick.svg"
        />

        <div className="relative leading-[24px] font-medium">
          Your additional management plan is successfully added
        </div>
      </div>
    </div>
  );
};

export default Snackbar;
