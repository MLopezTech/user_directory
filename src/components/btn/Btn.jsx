import React from "react";
import "./btn.css";

// © Ben
function Btn(props) {
    // props: {color:"secondary", onClick=f(x), children: "Clear Filter"}
    const classList = ["btn"];
  
    if (props.color) classList.push("btn-" + props.color);
  
    return (
      <button
        className={classList.join(" ") + " btn3d" + " btn-xs"}
        onClick={props.onClick}
        type={props.type}
      >
        {props.children}
      </button>
    );
  }
  
  // DEFAULT PROPS
  Btn.defaultProps = {
    color: "primary",
    onClick: () => false,
    children: "",
    type: "button",
  };

  export default Btn;