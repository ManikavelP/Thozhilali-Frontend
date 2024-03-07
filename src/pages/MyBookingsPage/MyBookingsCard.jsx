import React from "react";

const MyBookingsCard = () => {
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-100">
        <td className="sm:px-10 px-24    py-5 ">
          C S Shriram Jayanth <br></br> +91.1234567890
        </td>
        <td className="sm:px-10 py-5 px-20 ">Total Cleaning</td>
        <td className="sm:px-6 py-5 px-10">06/03/2024</td>
        <td className="px-8 py-9  flex justify-center items-center  text-center">
          <div className="w-28 h-6 flex flex-row bg-orange-100 rounded-lg items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            <p className="text-sm text-orange-400">Pending</p>
          </div>
        </td>
        <td className=" py-5 px-10 ">
          <button
            type="submit"
            className="w-[70%]  sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-red-500 text-white rounded-md hover:bg-backGround  font-semibold"
          >
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyBookingsCard;
