import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full my-[192px] flex justify-center">
      <div className="flex p-4 items-center w-[280px] h-20 rounded-[8px] border-1 border-[#E1E1E1]">
        <img className="w-10 h-10" src="loader.svg" alt="loader icon" />

        <div className="flex flex-col ml-2">
          <p className="text-[#383A4899] font-normal text-[10px] leading-[16px] tracking-[0px]">
            Converting...Thank you For your Patience
          </p>

          <div className="w-full flex items-center">
            <div className="flex">
              <span className="font-bold text-[16px] leading-[24px] tracking-[0] text-center align-bottom">
                {progress}%
              </span>
            </div>

            <div className="w-[159px] h-2 ml-2 bg-[#F6F9FF] rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-[64px] transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
