import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import classes from "./HeaderOption.module.css";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className={classes["headerOption"]}>
      {Icon && <Icon className={classes["headerOption__icon"]} />}
      {avatar && (
        <Avatar className={classes["headerOption__icon"]} src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className={classes["headerOption__title"]}>{title} </h3>
    </div>
  );
};

export default HeaderOption;
