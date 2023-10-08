const RemoveModal = () => {
  return (
    <div className="rounded-lg bg-white shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.1),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.04)] w-[400px] overflow-hidden flex flex-col items-center justify-start p-6 box-border gap-[32px] max-w-full max-h-full text-center text-xl text-gray-900 font-text-xs-medium">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative leading-[30px] font-semibold">
          Are you want to Remove this course?
        </div>
        <div className="self-stretch relative text-sm leading-[20px] text-gray-500">
          If you want to remove this course, then click the Delete button, if
          not please click Cancel button.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
        <div className="flex-1 rounded flex flex-row items-start justify-start">
          <button className="cursor-pointer py-2.5 px-[18px] bg-white flex-1 rounded shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-gray-300">
            <div className="relative text-base leading-[24px] font-medium font-text-sm-normal text-gray-700 text-left">
              Cancel
            </div>
          </button>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 rounded flex flex-row items-start justify-start">
          <div className="flex-1 rounded bg-[#E43242] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[18px] border-[1px] border-solid border-[#E43242]">
            <div className="relative text-base leading-[24px] font-medium font-text-sm-normal text-white text-left">
              Delete
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RemoveModal;
