import Comparison from "./Comparison";
import AddButton from "./innerComponents/AddButton";
import Inputs from "./innerComponents/Inputs";
import LanguageFormat from "./innerComponents/LanguageFormat";

function InnerSection() {
  return (
    <div className="flex mt-6 flex-col px-4 w-full">
      <LanguageFormat />
      <AddButton />
      <div className="w-full h-[1px] bg-[#EDEDED] mt-4"></div>
      <Inputs />
      <Comparison />
    </div>
  );
}

export default InnerSection;
