import React from "react";

const Item = ({id, name, email, phone}) => {
  return (
    <div className="row item-row">
      <div className="col-sm-1">{id}</div>
      <div className="col-md-3">{name}</div>
      <div className="col-md-4">{email}</div>
      <div className="col-md-4">{phone}</div>
    </div>
  );
};

export default Item;
