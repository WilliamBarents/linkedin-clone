import React from "react";
import classes from "./Widgets.module.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className={classes["widgets__article"]}>
        <div className={classes["widgets__articleLeft"]}>
          <FiberManualRecordIcon />
        </div>

        <div className={classes["widgets__articleRight"]}>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes["widgets"]}>
      <div className={classes["widgets__header"]}>
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("William Barents is AMAZING!", "Top news - 69000 readers")}
      {newsArticle(
        "Elon Musk Makes Twitter Better",
        "Why Twitter is coming back!"
      )}
      {newsArticle(
        "Andrew Tate is INNOCENT",
        "How Andrew Tate was arrested to FIND evidence against him."
      )}
    </div>
  );
};

export default Widgets;
