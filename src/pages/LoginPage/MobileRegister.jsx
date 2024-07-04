import React from "react";
import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const MobileRegister = () => {
  const addData = async (data) => {
    try {
      const response = await axios.post("https://thozhilali-backend.onrender.com/CAuth/register", data, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if(response.status===203){
        alert("Successfully Registered")
      }
    } catch (error) {
      console.error(error);
    }
  }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: null,
    phoneNo: null,
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.firstName) {
      validationErrors.firstName = "First Name is required.";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Last Name is required.";
    }
    if (!formData.age) {
      validationErrors.age = "age";
    }
    if (!formData.phoneNo) {
      validationErrors.phoneNo = "Phone No is required.";
    }
    if (!formData.gender) {
      validationErrors.gender = "Gender is required.";
    }
    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = " confirm password is required.";
    }
    if (!formData.address) {
      validationErrors.address = "address is required.";
    }
    if (!formData.occupation) {
      validationErrors.occupation = "occupation is required.";
    }

    // Basic email validation (example)
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        formData.email
      )
    ) {
      validationErrors.email = "Invalid email address.";
    }

    if (!formData.password || formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let abc = formData;
      abc.phoneNo = parseInt(abc.phoneNo);
      abc.age = parseInt(abc.age);

      setFormData(abc);
      addData(abc)
      // You can also handle form submission here (e.g., send data to a server)
    }
  };
  return (
    <div className="w-full h-auto bg-backGround">
      <div className="w-full h-full flex items-center justify-center">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[90%] sm:w-[60%] mt-5 p-7 mb-5 h-auto rounded-lg  bg-green-600"
        >
          <div className="w-full flex items-center justify-center mt-5 mb-5 h-auto ">
            <h1 className="font-semibold text-lg">Customer Registration</h1>
          </div>
          {/* <div className="mb-5">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.firstName && (
              <p className="text-red-500  text-[0.55rem]">{errors.firstName}</p>
            )}
          </div> */}
          <div className="mb-5">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className={`bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-2.5 `}
            />

            {errors.firstName && (
              <p className="text-red-500  text-[0.55rem]">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.lastName && (
              <p className="text-red-500  text-[0.55rem]">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="gender"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={` px-5 py-2 border border-gray-30  rounded-md text-gray-500 `}
            >
              <option value="" className="text-gray-500 ">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">others</option>

            </select>
            {errors.gender && (
              <p className="text-red-500  text-[0.55rem]">{errors.gender}</p>
            )}
          </div>
          <div className="mb-5 ">
            <label
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              min={18}
              max={100}
              value={formData.age}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-2.5
              "
            />

            {errors.age && (
              <p className="text-red-500 text-[0.55rem]">{errors.age}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="phoneNo"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone No
            </label>
            <div className="relative w-full items-start flex flex-col ">
              <span className="absolute inset-y-0 text-sm start-0 flex items-center px-2 pointer-events-none">
                +91
              </span>
              <input
                type="number"
                
                name="phoneNo"
                value={formData.phoneNo}

                onChange={handleChange}
                id="phoneNo"
                className="bg-gray-50 border border-gray-300 ps-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[70%] p-2.5
                "
              />
            </div>
            {errors.phoneNo && (
              <p className="text-red-500  text-[0.55rem]">{errors.phoneNo}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.email && (
              <p className="text-red-500  text-[0.55rem]">{errors.email}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="pass"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              id="pass"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.password && (
              <p className="text-red-500  text-[0.55rem]">{errors.password}</p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirm"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.confirmPassword && (
              <p className="text-red-500  text-[0.55rem]">
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="occ"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Occupation
            </label>
            <input
              type="text"
              id="occ"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.occupation && (
              <p className="text-red-500  text-[0.55rem]">
                {errors.occupation}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.address && (
              <p className="text-red-500  text-[0.55rem]">{errors.address}</p>
            )}
          </div>

          <div className="flex pt-5 items-center  justify-center w-full">
            <button
              type="submit"
              className="  sm:px-5  sm:py-2 px-4 py-2.5 sm:m-2 m-0 bg-backGround text-white rounded-md hover:bg-backGround  font-semibold"
            >
              SUBMIT
            </button>
          </div>
          <div className="w-full mt-5 sm:hidden h-[20%] justify-center  items-center flex">
            <div className=" w-full h-[50%] text-white flex flex-row gap-3 items-center justify-center ">
              <p>Have an Account</p>{" "}
              <Link
                to="/login"
                className="text-backGround font-semibold hover:text-green-500  ease-linear text-lg"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobileRegister;
