import cls from "@/helpers/cls";
import React from "react";

const index = () => {
  return (
    <div>
      <div className="min-h-[50vh] bg-red-400 relative z-20">
        <div className="w-full h-[50vh] bg-yellow-100"></div>
        <div
          className={cls(
            "bg-purple-700 w-96 aspect-video rounded-xl",
            "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          )}
        ></div>
      </div>
      <div className="min-h-[50vh] bg-green-400 relative z-10"></div>
    </div>
  );
};

export default index;
