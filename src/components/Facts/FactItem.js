import React from "react";
import Avatar from "../Avatar/Avatar";

function FactItem({ fact }) {
  return (
    <li>
      <div className="avatar">
        <Avatar url="https://dog.ceo/api/breeds/image/random" />
      </div>
      <div className="text">
        <p>{fact?.text}</p>
      </div>
    </li>
  );
}

export default FactItem;
