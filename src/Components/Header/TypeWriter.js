import React from "react";
import Typical from "react-typical";

const TypeWrite = () => {
  return (
    <h1 className="title">
      I'm{" "}
      <Typical
        loop={Infinity}
        wrapper={"span"}
        steps={["Alexandru Budaca!", 1000, "a web developer!", 1000]}
      />
    </h1>
  );
};
export default TypeWrite;
