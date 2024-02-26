import React from "react";

const Lesson = ({ data }) => {
  return (
    <div className="cursor-pointer">
      <img
        className=" w-full h-full object-cover border-4 border-white shadow-lg"
        src={data.src}
        alt="lesson image"
      />
      {/* <p>{data.date.toISOString()}</p> */}
      <p className="p-2 text-greentwo">{data.description} </p>
    </div>
  );
};

export default Lesson;
