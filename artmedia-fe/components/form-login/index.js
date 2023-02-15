import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import nookies from 'nookies'
const Form = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = nookies.get('jwt')
    if(cookies.jwt){
        router.push('/home')
    }
  const login = () => {
    let data = {
      email: email,
      password: password,
    };
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCookie(null, "jwt", data.token, {
          maxAge: 30 * 24 * 60 * 60, // 30 days
        });
        router.push("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const goToRegister = ()=>router.push('/register')
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="******************"
            />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={login}
            >
              Sign In
            </button>
            <a
              className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={goToRegister}
            >
              Sign Up
            </a>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Form;
