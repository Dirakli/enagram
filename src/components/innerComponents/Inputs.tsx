import React from "react";
import { type DiffSegment } from "../../utils/textComparison";

interface InputsProps {
  firstTextareaText: string;
  secondTextareaText: string;
  handleFirstTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSecondTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  firstSegment?: DiffSegment[];
  secondSegment?: DiffSegment[];
  showComparison?: boolean;
}

const Inputs: React.FC<InputsProps> = ({
  firstTextareaText,
  secondTextareaText,
  handleFirstTextChange,
  handleSecondTextChange,
  firstSegment,
  secondSegment,
  showComparison,
}) => {
  const renderHighlightedText = (segments: DiffSegment[]) => {
    return segments.map((segment, index) => {
      const className =
        segment.type === "delete"
          ? "bg-red-200 text-red-800"
          : segment.type === "insert"
          ? "bg-green-200 text-green-800"
          : "";

      return (
        <span key={index} className={className}>
          {segment.text}
        </span>
      );
    });
  };

  return (
    <div className="w-full mt-6 flex flex-col md:flex-row">
      <div className="w-full relative">
        {showComparison && firstSegment ? (
          <div className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] text-[14px] leading-[22px] tracking-[0px] overflow-auto">
            {renderHighlightedText(firstSegment)}
          </div>
        ) : (
          <textarea
            placeholder="დაიწყე წერა..."
            value={firstTextareaText}
            onChange={handleFirstTextChange}
            className="w-full bg-[#F0F7FF] textarea rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] placeholder:text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
          />
        )}
      </div>

      <div className="w-full md:w-[52px] md:mx-2.5 flex justify-center py-4">
        <img
          src="arrows.svg"
          alt="arrows icon"
          className="transform md:rotate-90 md:w-8"
        />
      </div>

      <div className="w-full relative">
        {showComparison && secondSegment ? (
          <div className="w-full bg-[#F0F7FF] rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] text-[14px] leading-[22px] tracking-[0px] overflow-auto">
            {renderHighlightedText(secondSegment)}
          </div>
        ) : (
          <textarea
            placeholder="დაიწყე წერა..."
            value={secondTextareaText}
            onChange={handleSecondTextChange}
            className="w-full bg-[#F0F7FF] textarea rounded-[8px] p-3 min-h-[190px] md:h-[432px] text-[#383A48] placeholder:text-[#383A4899] focus:outline-none focus:ring-0 text-[14px] leading-[22px] tracking-[0px] resize-none"
          />
        )}
      </div>
    </div>
  );
};

export default Inputs;
