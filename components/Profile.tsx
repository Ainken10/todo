import React from "react";
export const Profile = ({ Counts }) => {
  return (
    <div className="w-1/5 hidden md:block min-h-screen shadow-lg">
      <div className="w-full flex flex-col items-center justify-center my-10 space-y-4">
        <div className="rounded-full bg-green-400 h-28 w-28 flex justify-center items-center">
          <p className="text-white text-3xl font-semibold">SD</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl text-green-300  font-bold">Suszta Domos</p>
          <p className="text-gray-400 text-sm">domos.suszta@hotmail.com</p>
        </div>
        <hr className="border-green-300 w-full border-2 " />
        <div className="flex justify-between w-full p-5 flex-wrap  ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold">{Counts.done}</p>
            <p className="font-semibold text-green-300">Done</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold">{Counts.inProgress}</p>
            <p className="font-semibold text-orange-300">in progress</p>
          </div>
          <div className="flex flex-col items-center justify-center px-2 ">
            <p className="text-2xl font-semibold">{Counts.total}</p>
            <p className="font-semibold ">Total</p>
          </div>
        </div>
      </div>
    </div>
  );
};
