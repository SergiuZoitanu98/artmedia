import { useState } from "react";
import { setCookie } from "nookies";
import { toast } from "react-toastify";
import { divAlignItemsClass, divFormClass } from "./style";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/input";
import Button from "../../components/button";
import apiFetch from "../../utils/customFetch";
import Anchor from "../../components/anchor";
import { METHODS,USER_ENDPOINTS } from "../../utils/costants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    apiFetch(METHODS.post, USER_ENDPOINTS.login, { email, password })
      .then((data) => {
        setCookie(null, "jwt", data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        toast("logged!");
      })
      .catch((error) => {
        toast.error("Bad credentials");
      });
  };
  return (
    <>
      <div className={divAlignItemsClass}>
        <div className={divFormClass}>
          <Input
            label="Email"
            type="text"
            name="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            name="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Login" onClick={login} type="button" />
          <Anchor to="/register" label="Create an account" />
        </div>
      </div>
    </>
  );
};
export default Login;
