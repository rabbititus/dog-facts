import React from "react";
import useFetch from "../../hooks/useFetch";

function Avatar({ url }) {
  const { data, loading } = useFetch(url);
  const imgUrl = data?.message;

  return (
    <div
      style={{ visibility: loading ? "hidden" : "visible" }}
      className="avatar-container"
    >
      <img alt="dog" src={imgUrl} />
    </div>
  );
}

export default Avatar;
