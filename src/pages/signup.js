"use client";
import { auth } from "@/services/firebase";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [companyNameValue, setCompanyNameValue] = useState("");

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPasswordValue(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddressValue(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyNameValue(event.target.value);
  };

  const handleRegisterNewAccount = async () => {
    console.log("==> Sign in new user, " + emailValue + ", " + passwordValue);
    try {
      const res = await createUserWithEmailAndPassword(
        emailValue,
        passwordValue
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[100vh] px-6 w-full relative">
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center -z-10">
        <img
          src="/images/news2.jpg"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>

      <div
        className="flex h-full w-full flex-row justify-center items-center
      overflow-y-auto"
      >
        <div className="md:w-3/5 lg:w-2/5 w-full h-auto bg-white/95 py-10 !mt-52 mb-20">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full flex flex-col items-center justify-center gap-5 px-5">
              <h1 className="text-amber-600 font-bold text-5xl font-mono">
                KATALOG_3D
              </h1>

              <h1 className="text-black/60 font-semibold text-4xl text-left ">
                Register New Account
              </h1>
            </div>

            <div className="mt-3 w-full flex flex-col justify-center items-center py-10">
              <form className="w-[70%]">
                {/* First Name Input */}
                <InputField
                  type="text"
                  id="inputFirstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />

                {/* Last Name Input */}
                <InputField
                  type="text"
                  id="inputLastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />

                {/* Email Input */}
                <InputField
                  type="text"
                  id="inputEmail"
                  placeholder="Email"
                  value={emailValue}
                  onChange={handleEmailChange}
                />

                {/* Password Input */}
                <InputField
                  type="password"
                  id="inputPassword"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />

                {/* Confirm Password Input */}
                <InputField
                  type="password"
                  id="inputConfirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPasswordValue}
                  onChange={handleConfirmPasswordChange}
                />

                {/* Phone  Input */}
                <InputField
                  type="phone"
                  id="inputPhoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumberValue}
                  onChange={handlePhoneNumberChange}
                />

                {/* Address Input */}
                <InputField
                  type="text"
                  id="inputAddress"
                  placeholder="Address"
                  value={addressValue}
                  onChange={handleAddressChange}
                />

                {/* Company Input */}
                <InputField
                  type="text"
                  id="inputCompanyName"
                  placeholder="Company Name"
                  value={companyNameValue}
                  onChange={handleCompanyNameChange}
                />

                {/* Register Button */}
                <div className="text-center lg:text-left w-full">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary 
                    px-7 pb-2.5 pt-3
                    my-4
                    text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                    bg-yellow-500 w-full"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => handleRegisterNewAccount()}
                  >
                    Register
                  </button>

                  {/* Login Link */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <a
                      href="/signin"
                      className="text-blue-500 underline pl-3 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Login Here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ type, id, placeholder, value, onChange }) {
  const hasValue = value && value.length > 0;

  return (
    <div className={`relative mb-6 ${hasValue ? "has-value" : ""}`}>
      <input
        type={type}
        className="border-b border-black/30 peer block min-h-[auto] w-full rounded-none bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id={id}
        placeholder=""
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out dark:text-neutral-200 ${
          hasValue ? "-translate-y-[1.15rem] scale-[0.8]" : ""
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
}
