import CanWeHelp from "./CallMeModal/CallmeWork";
import St1Right from "./Right/Right";
import TellUsLeft from "./TellUsAbout/TellUsAbout";

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
