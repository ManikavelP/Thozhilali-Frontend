import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import MyBookingsCard from "./MyBookingsCard";
import Footer from "../../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const MyBookingsPage = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const receivedId = loc.state?.id;
  const receivedname = loc.state?.name;
  useEffect(() => {
    if (!loc.state) {
      navigate("/login");
    }
  }, [navigate, loc.state]);

  const [mybookings, setmybookings] = useState();

useEffect(()=>{
  const getData = async (data) => {
    try {
      const response = await axios.post(
        "https://thozhilali-backend.onrender.com/Customer/bookings",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setmybookings(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  const requestData = { name: receivedname, id: receivedId };
  getData(requestData);

})


  return (
    <div className="w-full h-screen bg-backGround">
      <Navbar booking="true" Uid={receivedId} name={receivedname} />
      <div className="w-full h-[8%]  items-center flex justify-center  ">
        <h1 className=" flex text-2xl font-semibold text-white">
          Your Bookings
        </h1>
      </div>

      <div className="w-full  h-full flex items-center justify-center bg-backGround">
        <div className="w-[85%] h-[85%] bg-white relative overflow-x-auto shadow-md ">
          <table className="w-full text-center  table-auto">
            <thead className="text-md text-gray-700 bg-gray-100 uppercase">
              <tr>
                <th scope="col" className="sm:px-12 px-20 py-5">
                  Workers
                </th>
                <th scope="col" className="px-8 py-5">
                  Work
                </th>
                <th scope="col" className="px-6 py-5">
                  Date
                </th>
                <th scope="col" className="px-8 py-5">
                  Status
                </th>
                <th scope="col" className="px-8 py-5">
                  Cancellation
                </th>
              </tr>
            </thead>
            <tbody className="">
            {mybookings && mybookings.map((item,index)=>{
                return(<MyBookingsCard
                  name={item.name}
                  work={item.work}
                  date={item.date}
                  status={item.status}
                  phone={item.phone}
                  key={index}
                  uid={receivedId}
                  wid={item.id}
                />)
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
