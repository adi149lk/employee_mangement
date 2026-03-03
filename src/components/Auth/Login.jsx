import React, { useRef } from "react";

const Login = () => {
  let email = useRef("");
  let password = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            ref={email}
            required
            className="bg-transparent outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            ref={password}
            required
            className="bg-transparent outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3"
            type="password"
            placeholder="Enter your password"
          />
          <button className=" w-full outline-none border-none bg-emerald-600 py-2 px-8 text-xl text-white rounded-full mt-5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
