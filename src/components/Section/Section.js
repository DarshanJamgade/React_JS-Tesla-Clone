import React from "react";

import classes from "./section.module.scss";
const Section = ({
  title,
  description,
  bgImage,
  lBtnText,
  rBtnText,
  downArrow,
}) => {
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url('/assets/${bgImage}')`,
      }}
    >
      <div className={classes.itemText}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <div className={classes.buttons}>
          <button className={classes.button_1}>{lBtnText}</button>
          {rBtnText && <button className={classes.button_2}>{rBtnText}</button>}
        </div>
        {downArrow ? (
          <div
            className={classes.downArrow}
            style={{
              backgroundImage: `url('/assets/down-arrow.svg')`,
            }}
          />
        ) : (
          <div className={classes.downArrow} />
        )}
      </div>
    </div>
  );
};

export default Section;
