import React from "react";

const Item = ({id, name, email, cellphone, dob}) => {
  return (
    <div className="row item-row">
      <div className="col-sm-1">{id.value}</div>
      <div className="col-md-3">{`${name.first} ${name.last}`}</div>
      <div className="col-md-5">{email}</div>
      <div className="col-md-2">{cellphone}</div>
      <div className="col-sm-1">{dob.age}</div>
    </div>
  );
};

export default Item;
