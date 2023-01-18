import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className={classes["sidebar__recentItem"]}>
        <span className={classes["sidebar__hash"]}>#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className={classes["sidebar"]}>
      <div className={classes["sidebar__top"]}>
        <img
          src="https://wallpaperaccess.com/full/8405337.jpg"
          alt="avatar background"
        />
        <Avatar src={user?.photoUrl} className={classes["sidebar__avatar"]}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes["sidebar__stats"]}>
        <div className={classes["sidebar__stat"]}>
          <p>Who viewed you</p>
          <p className={classes["sidebar__statNumber"]}>2,654</p>
        </div>
        <div className={classes["sidebar__stat"]}>
          <p>Views on post</p>
          <p className={classes["sidebar__statNumber"]}>2,999</p>
        </div>
      </div>

      <div className={classes["sidebar__bottom"]}>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
};

export default Sidebar;
