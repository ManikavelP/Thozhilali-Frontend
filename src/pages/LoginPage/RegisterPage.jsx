import logo from "../../assets/images/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    phoneNo: "",
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
      console.log("Form data:", formData);
      // You can also handle form submission here (e.g., send data to a server)
    }
  };

  return (
    <div className=" items-center justify-center bg-backGround flex w-full h-screen">
      <div className=" flex sm:w-[70%] sm:h-[98%] rounded-lg   w-full h-[95%]  flex-row items-center justify-center    ">
        <div className="w-[70%] sm:h-full h-[98%] hidden lg:flex   rounded-l-lg  bg-green-800  flex-col items-center justify-center">
          <div className=" w-[90%] h-[80%] flex items-center  justify-center ">
            <img src={logo} alt="" />
          </div>

          <div className="w-full h-[20%] justify-center  items-center flex">
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
        </div>
        <div className="sm:w-full w-[95%] sm-m-0 p-10 sm:p-0 h-full flex items-center justify-center sm:rounded-r-lg sm:hidden:rounded-lg  bg-green-600  ">
          <div className="sm:w-[95%] sm:h-[90%] w-full h-full  flex flex-col">
            <div className="w-full h-[20%] flex items-center justify-center text-center">
              <h1 className="sm:text-3xl text-md font-semibold ">Customer Registration</h1>
            </div>{" "}
            {/* title*/}
            <div className="w-full flex-col   h-full flex items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="flex w-full h-full item-center flex-col "
              >
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center sm:justify-start justify-center ">
                  <div className="flex flex-col w-[50%]   sm:w-auto">
                    <label htmlFor="firstName" className="sm:text-sm  font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.firstName ? "border-red-500 " : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500  text-[0.55rem]">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col  w-[50%]  sm:w-auto">
                    <label htmlFor="lastName" className=" text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`rounded-md border  border-gray-300 p-2 ${
                        errors.lastName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex p-2 flex-row w-full h-[16%]  justify-start gap-2 items-center">
                  <div className="flex flex-col h-auto   w-24">
                    <label htmlFor="gender" className="text-sm font-medium">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={` px-0.5 py-2 border border-gray-30  rounded-md text-gray-500 `}
                    >
                      <option value="" className="text-gray-500 ">
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col h-auto w-[13%] ">
                    <label htmlFor="age" className="text-sm font-medium">
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
                      className={`rounded-md border py-2 px-1 border-gray-300 p-2 `}
                    />
                    {errors.age && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.age}
                      </p>
                    )}
                  </div>
                  <div className="flex   flex-col h-auto sm:w-[30%] w-[60%] ">
                    <label htmlFor="age" className="text-sm font-medium">
                      Phone No
                    </label>
                    <div className="relative w-full  flex ">
                      <span className="absolute inset-y-0 start-0 flex items-center sm:ps-3.5 px-1    pointer-events-none">
                        +91
                      </span>
                      <input
                        type="number"
                        id="phoneNo"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className={`rounded-md border border-gray-300 ps-9 w-48 sm:w-auto sm:ps-12 p-2 `}
                      />
                    </div>
                    {errors.phoneNo && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.phoneNo}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center sm:justify-start  ">
                  <div className="flex flex-col w-[74%]   sm:w-[65%]">
                    <label htmlFor="Email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center sm:justify-start  ">
                  <div className="flex flex-col w-[74%]    sm:w-[65%]">
                    <label htmlFor="occupation" className="text-sm font-medium">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.occupation ? "border-red-500" : ""
                      }`}
                    />
                    {errors.occupation && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.occupation}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  gap-2 w-full p-2 sm:h-[16%] h-[20%]  items-center sm:justify-start justify-center ">
                  <div className="flex flex-col w-[50%]   sm:w-auto">
                    <label htmlFor="Password" className="text-sm font-medium">
                      Password
                    </label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.password ? "border-red-500" : ""
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col  w-[50%]  sm:w-auto">
                    <label
                      htmlFor="confirmPassword"
                      className=" text-sm font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`rounded-md border  border-gray-300 p-2 ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex   w-full p-2 sm:h-[16%] h-[20%]  items-center sm:justify-start  ">
                  <div className="flex flex-col w-[74%]   sm:w-[92%]">
                    <label htmlFor="address" className="text-sm font-medium">
                      Address
                    </label>
                    <input
                      type="text"
                      id="Address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`rounded-md border border-gray-300 px-2 py-2  ${
                        errors.address ? "border-red-500" : ""
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-[0.55rem]">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* ... similar input fields for gender, age, address, email, password, confirmPassword, and occupation */}
                <div className="flex items-center  justify-center w-full">
                  <button
                    type="submit"
                    className="  sm:px-5  sm:py-2 px-4 py-2.5 sm:m-2 m-0 bg-backGround text-white rounded-md hover:bg-backGround  font-semibold"
                  >
                    SUBMIT
                  </button>
                </div>
                <div className="w-full sm:hidden h-[20%] justify-center  items-center flex">
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
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
