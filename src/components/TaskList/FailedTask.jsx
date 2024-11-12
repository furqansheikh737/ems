import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="mt-5">
        <button className="bg-red-500 w-full py-1 px-2 rounded text-sm">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;
