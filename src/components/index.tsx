import CanWeHelp from "./step1/CallMeModal/CallmeWork";
import St1Right from "./step1/Right/Right";
import TellUsLeft from "./step1/TellUsAbout/TellUsAbout";

const StepOne = () => {
  return (
    <div className="grid grid-cols-2 relative h-screen   container m-auto">
      <CanWeHelp />
      <TellUsLeft />
      <St1Right />
    </div>
  );
};

export default StepOne;
