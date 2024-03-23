import React from "react";
import axios from "axios";

const MyBookingsCard = (props) => {
  let senddata={
    userId:props.uid,
    workerID:props.wid
  }
  const deleteBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/Customer/deletebooking",
        senddata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.status===200){
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-100">
      <td className="sm:px-10 px-24 py-5 ">
        {props.name} <br /> +91.{props.phone}
      </td>
      <td className="sm:px-10 py-5 px-20 ">{props.work}</td>
      <td className="sm:px-6 py-5 px-10">{props.date}</td>
      {props.status == null ? (
        <td className="px-8 py-9  flex justify-center items-center  text-center">
          <div className="w-28 h-6 flex flex-row bg-red-100 rounded-lg items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <p className="text-sm text-red-500">Denied</p>
          </div>
        </td>
      ) : props.status ? (
        <td className="px-8 py-9  flex justify-center items-center  text-center">
          <div className="w-28 h-6 flex flex-row bg-green-100 rounded-lg items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full"></span>
            <p className="text-sm text-green-400">Accepted</p>
          </div>
        </td>
      ) : (
        <td className="px-8 py-9  flex justify-center items-center  text-center">
          <div className="w-28 h-6 flex flex-row bg-orange-100 rounded-lg items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            <p className="text-sm text-orange-400">Pending</p>
          </div>
        </td>
      )}
      <td className=" py-5 px-10 ">
        <button
          onClick={deleteBooking}
          type="button"
          className="w-[70%]  sm:w-auto sm:px-5 sm:py-3 py-2.5 bg-red-500 text-white rounded-md hover:bg-backGround  font-semibold"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default MyBookingsCard;
