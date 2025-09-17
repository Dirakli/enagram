import React, { useState } from "react";
import Comparison from "./Comparison";
import AddButton from "./innerComponents/AddButton";
import Inputs from "./innerComponents/Inputs";
import LanguageFormat from "./innerComponents/LanguageFormat";

const InnerSection: React.FC = () => {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");

  const isActive = text1.trim() !== "" && text2.trim() !== "";

  return (
    <div className="flex relative mt-6 flex-col px-4 w-full">
      <LanguageFormat />
      <AddButton />
      <div className="w-full h-[1px] bg-[#EDEDED] mt-4"></div>

      <Inputs
        value1={text1}
        value2={text2}
        onChange1={(e) => setText1(e.target.value)}
        onChange2={(e) => setText2(e.target.value)}
      />

      <Comparison isActive={isActive} />
    </div>
  );
};

export default InnerSection;
