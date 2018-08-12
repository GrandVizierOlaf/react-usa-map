import React from "react";

const USAState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} ${props.className} state`} onClick={props.onClickState} />
  );
}
export default USAState;
