import Enagram from "./headingComponents/Enagram";
import LeftArrows from "./headingComponents/LeftArrows";
import TextCompare from "./headingComponents/TextCompare";
import Navbar from "./Navbar";

function Heading({ className }: { className?: string }) {
  return (
    <div className={`w-full lg:bg-[#132450] flex-none ${className}`}>
      <LeftArrows />
      <Enagram />
      <TextCompare />
      <Navbar />
    </div>
  );
}

export default Heading;
