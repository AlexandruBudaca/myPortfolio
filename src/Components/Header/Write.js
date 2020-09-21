import React from "react";
import Typical from "react-typical";

const Write = (props) => {
  return (
    <h1 className="title">
      <Typical
        className="type"
        loop={1}
        wrapper={"span"}
        steps={["Hi, I'm Alexandru Budaca!, I'm a full stack developer!"]}
      />
    </h1>
  );
};

export default Write;
