import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";
import classes from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Pleasse enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };
  const profilePicHandler = (event) => {
    setProfilePic(event.target.value);
  };

  return (
    <div className={classes["login"]}>
      <img
        src="https://blog.waalaxy.com/wp-content/uploads/2021/01/LinkedIn-Symbole.png"
        alt="Linkedin Logo"
      />

      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={nameInputHandler}
          placeholder="Full name (this is needed)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={profilePicHandler}
          placeholder="Profile Pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={emailInputHandler}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={passwordInputHandler}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Sign in</button>
      </form>

      <p>
        Not a member?{" "}
        <span className={classes["login__register"]} onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
