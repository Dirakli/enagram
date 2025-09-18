import React, { useState } from "react";
import Comparison from "./Comparison";
import AddButton from "./innerComponents/AddButton";
import Inputs from "./innerComponents/Inputs";
import LanguageFormat from "./innerComponents/LanguageFormat";
import Loading from "./innerComponents/Loading";
import { compareTexts, type ComparisonResult } from "../utils/textComparison";

const InnerSection: React.FC = () => {
  const [firstText, setFirstText] = useState<string>("");
  const [secondText, setSecondText] = useState<string>("");
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [comparisonResult, setComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const isActive = firstText.trim() !== "" && secondText.trim() !== "";

  const handleComparisonClick = () => {
    if (!isActive) return;

    setShowLoader(true);

    setTimeout(() => {
      const result = compareTexts(firstText, secondText);
      setComparisonResult(result);
      setShowLoader(false);
      setShowComparison(true);
    }, 1000);
  };

  const handleNewComparison = () => {
    setFirstText("");
    setSecondText("");
    setComparisonResult(null);
    setShowComparison(false);
  };

  return (
    <div className="flex relative mt-6 flex-col px-4 w-full">
      <div className="flex md:justify-between flex-col md:flex-row w-full ">
        <LanguageFormat />
        <AddButton isActive={showComparison} onClick={handleNewComparison} />
      </div>

      <div className="w-full h-[1px] bg-[#EDEDED] mt-4"></div>

      {!showLoader && (
        <Inputs
          firstTextareaText={firstText}
          secondTextareaText={secondText}
          handleFirstTextChange={(e) => setFirstText(e.target.value)}
          handleSecondTextChange={(e) => setSecondText(e.target.value)}
          firstSegment={comparisonResult?.segmentsFirst}
          secondSegment={comparisonResult?.segmentsSecond}
          showComparison={showComparison}
        />
      )}

      {showLoader && <Loading />}

      <Comparison
        isActive={isActive && !showComparison}
        onClick={handleComparisonClick}
      />
    </div>
  );
};

export default InnerSection;
