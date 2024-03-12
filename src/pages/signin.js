"use client";

import { UserAuth } from "@/components/context/auth-context";
import { auth } from "@/services/firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function LoginPage() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const router = useRouter();

  const { user, googleSignIn } = UserAuth();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async () => {
    try {
      console.log("==> Sign in with google");
      const res = await signInWithEmailAndPassword(emailValue, passwordValue);
      console.log(res);
      if (user) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      console.log("==> handleSignInWithGoogle ");
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  // Redirect to home page if user is authenticated
  // if (user) {
  //   router.push("/");
  // }

  return (
    <div className="h-[100vh] px-6 w-full relative">
      <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center -z-10">
        <img
          src="/images/news2.jpg"
          className="object-cover w-full h-full"
          alt=""
        />
      </div>

      <div className="flex h-full w-full flex-row justify-center items-center">
        <div className="mb-12 md:mb-0 md:w-2/3 lg:w-1/2 "></div>

        <div className="md:w-1/3 lg:w-1/2 h-[100vh] bg-white/95">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full flex flex-col items-center justify-center gap-5 px-5">
              <h1 className="text-amber-500 font-bold text-5xl font-mono">
                KATALOG_3D
              </h1>
            </div>

            <div className="mt-3 w-full flex flex-col justify-center items-center py-10">
              <form className="w-[70%]" id="signin-form">
                {/* Email Input */}
                <InputField
                  type="text"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  value={emailValue}
                  onChange={handleEmailChange}
                />

                {/* Password Input */}
                <InputField
                  type="password"
                  id="exampleFormControlInput3"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={handlePasswordChange}
                />

                <div className="mb-6 flex items-center justify-between">
                  {/* Remember me Checkbox */}
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      type="checkbox"
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>

                  {/* Forgot Password Link */}
                  <a href="#!" className="text-black/30 underline">
                    Forgot password?
                  </a>
                </div>

                {/* Login Button */}
                <div className="text-center lg:text-left w-full">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                      bg-yellow-500 w-full"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={handleSignIn}
                  >
                    Login
                  </button>

                  {/* Register Link */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href="/signup"
                      className="text-blue-500 underline pl-3 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register Here
                    </a>
                  </p>
                </div>
              </form>

              <div className="w-[70%]">
                {/* Or Section */}
                <div className="flex items-center my-6">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-4 text-gray-500 font-semibold">Or</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                {/* Sign in with Google Button */}
                <button
                  // onClick={() => signIn("google")}
                  onClick={handleSignInWithGoogle}
                  className="px-4 py-3
                  w-full
                  bg-rose-500 text-zinc-100 font-medium rounded-lg"
                >
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InputField({ type, id, placeholder, value, onChange }) {
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
        autoComplete="current-password" // Add this line
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
