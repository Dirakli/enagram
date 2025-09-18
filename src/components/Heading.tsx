import Enagram from "./headingComponents/Enagram";
import LeftArrows from "./headingComponents/LeftArrows";
import TextCompare from "./headingComponents/TextCompare";
import Navbar from "./Navbar";

const Heading = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full lg:bg-[#132450] flex-none flex flex-col lg:h-screen ${className}`}
    >
      <LeftArrows />
      <Enagram />
      <TextCompare />
      <Navbar />
    </div>
  );
};

export default Heading;
