import { divAlignItemsClass, divFormClass } from "./style";
import Input from "../../components/input";
import { useState } from "react";
import Button from "../../components/button";
import Anchor from "../../components/anchor";
import apiFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { METHODS,USER_ENDPOINTS } from "../../utils/costants";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    apiFetch(METHODS.post, USER_ENDPOINTS.register, { name, surname, email, password })
      .then((data) => {
        toast.success("Account created!")
      })
      .catch((error) => {
        toast.error("One or more fields are missing!")
      });
  };
  return (
    <>
      <div className={divAlignItemsClass}>
        <div className={divFormClass}>
          <Input
            label="Name"
            type="text"
            name="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Surname"
            type="text"
            name="Surname"
            placeholder="Enter your surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
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
          <Button label="Sign Up" onClick={register} type="button" />
          <Anchor to="/" label="Login" />
        </div>
      </div>
    </>
  );
};
export default Register;
