import React from "react";
import "./ExploreMenu.css";
import { class_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Choose your Class</h1>
      <p className="explore-menu-text">
        Find your passion with us! Choose your favorite subject from our diverse
        selection and embark on a journey of learning and discovery. Start
        today!
      </p>
      <div className="explore-menu-list">
        {class_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.class_name ? "All" : item.class_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.class_name ? "active" : ""}
                src={item.class_image}
                alt=""
              />
              <p>{item.class_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
