import React, { useState } from "react";
import Comparison from "./Comparison";
import AddButton from "./innerComponents/AddButton";
import Inputs from "./innerComponents/Inputs";
import LanguageFormat from "./innerComponents/LanguageFormat";
import Loading from "./innerComponents/Loading";

const InnerSection: React.FC = () => {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [addActive, setAddActive] = useState<boolean>(false); // controls AddButton

  const isActive = text1.trim() !== "" && text2.trim() !== "";

  const handleComparisonClick = () => {
    if (!isActive) return;

    setShowLoader(true);
    setText1("");
    setText2("");

    setAddActive(true);
  };

  return (
    <div className="flex relative mt-6 flex-col px-4 w-full">
      <div className="flex md:justify-between flex-col md:flex-row w-full ">
        <LanguageFormat />
        <AddButton isActive={addActive} />
      </div>

      <div className="w-full h-[1px] bg-[#EDEDED] mt-4"></div>

      {!showLoader && (
        <Inputs
          value1={text1}
          value2={text2}
          onChange1={(e) => setText1(e.target.value)}
          onChange2={(e) => setText2(e.target.value)}
        />
      )}

      {showLoader && <Loading />}

      <Comparison isActive={isActive} onClick={handleComparisonClick} />
    </div>
  );
};

export default InnerSection;
