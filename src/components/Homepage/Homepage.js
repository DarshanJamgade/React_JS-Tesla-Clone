import React from "react";
import Section from "../Section/Section";

import classes from "./homepage.module.scss";

const Homepage = () => {
  const sectionInfo = [
    {
      title: "Model S",
      description: "Order Online for Touchless Delivery",
      bgImage: "model-s.jpg",
      lBtnText: "Custom Order",
      rBtnText: "Existing Inventory",
      downArrow: true,
    },
    {
      title: "Model Y",
      description: "Order Online for Touchless Delivery",
      bgImage: "model-y.jpg",
      lBtnText: "Custom Order",
      rBtnText: "Existing Inventory",
      downArrow: false,
    },
    {
      title: "Model 3",
      description: "Order Online for Touchless Delivery",
      bgImage: "model-3.jpg",
      lBtnText: "Custom Order",
      rBtnText: "Existing Inventory",
      downArrow: false,
    },
    {
      title: "Model X",
      description: "Order Online for Touchless Delivery",
      bgImage: "model-x.jpg",
      lBtnText: "Custom Order",
      rBtnText: "Existing Inventory",
      downArrow: false,
    },
    {
      title: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
      bgImage: "solar-panel.jpg",
      lBtnText: "Order Now",
      rBtnText: "Learn More",
      downArrow: false,
    },
    {
      title: "Solar Roof",
      description: "Produce Clean Energy From Your Roof",
      bgImage: "solar-roof.jpg",
      lBtnText: "Order Now",
      rBtnText: "Learn More",
      downArrow: false,
    },
    {
      title: "Accessories",
      bgImage: "accessories.jpg",
      lBtnText: "Shop Now",
      downArrow: false,
    },
  ];

  return (
    <div className={classes.container}>
      {sectionInfo.map((info, i) => (
        <Section
          key={i}
          title={info.title}
          description={info.description}
          bgImage={info.bgImage}
          lBtnText={info.lBtnText}
          rBtnText={info.rBtnText}
          downArrow={info.downArrow}
        />
      ))}
    </div>
  );
};

export default Homepage;
