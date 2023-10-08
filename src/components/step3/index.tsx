import Step3Left from "./Step3Left/Step3Left";
import Step3Right from "./Step3Right/Step3RIght";

const StepThree = () => {
  return (
    <div className="grid grid-cols-3 container m-auto p-7 gap-6">
      <div className="col-span-2 pr-8">
        <Step3Left />
      </div>
      <Step3Right />
    </div>
  );
};

export default StepThree;
