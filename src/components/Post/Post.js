import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "../Feed/InputOption";
import classes from "./Post.module.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className={classes["post"]}>
      <div className={classes["post__header"]}>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className={classes["post__info"]}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className={classes["post__body"]}>
        <p>{message}</p>
      </div>

      <div className={classes["post__buttons"]}>
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Commet" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
