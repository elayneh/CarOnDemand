import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { registerUserRequest } from "../redux/auth/userSlice";

export default function CommandFunction() {
  const { user, loading, error } = useSelector(
    (state: RootState) => state.userAuthentication
  );

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");
  function handleFirstnameChange(event: ChangeEvent<HTMLInputElement>) {
    setFirstName(event.target.value);
  };
  const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await dispatch(
      registerUserRequest({ firstName, lastName, email, password })
    );
  };
}
