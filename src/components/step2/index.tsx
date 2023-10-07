import React from "react";
import Step2Left from "./step2Left/Step2Left";
import Step2Right from "./step2Right/Step2Right";

const StepTwo = () => {
  return (
    <div className="grid grid-cols-2 container m-auto h-screen max-h-[800px]">
      <Step2Left />
      <Step2Right />
    </div>
  );
};

export default StepTwo;
