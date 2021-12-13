import React from "react";
import FactItem from "./FactItem";

function FactList({ data }) {
  return (
    <section className="facts-container">
      <ul>
        {data?.map((fact) => {
          return <FactItem key={fact._id} fact={fact} />;
        })}
      </ul>
    </section>
  );
}

export default FactList;
