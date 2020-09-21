import React, { useState, useEffect } from "react";
import Typical from "react-typical";
import moment from "moment";
import { Row } from "react-bootstrap";

import Write from "./Write";

import "./header.css";
const TypeWrite = () => {
  var date = moment().format("LLLL");
  const [alex, setAlex] = useState(false);
  const [alex2, setAlex2] = useState(false);
  const [alex3, setAlex3] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlex(true);
    }, 2000);
    setTimeout(() => {
      setAlex2(true);
    }, 5000);
    setTimeout(() => {
      setAlex3(true);
    }, 6000);
  }, []);

  return (
    <Row>
      <div lg={12} className="type-write">
        <p>
          <Typical loop={1} wrapper={"span"} steps={`Last login: ${date}`} />
        </p>
        {alex && <Write />}
        {alex2 && (
          <p>
            <Typical loop={1} wrapper={"span"} steps={["~ cd myproject"]} />
          </p>
        )}
        {alex3 && (
          <p>
            <span className="blue"> myproject</span>

            <Typical
              loop={1}
              wrapper={"span"}
              steps={[` npx create-react-app frontend`]}
            />
          </p>
        )}
      </div>
    </Row>
  );
};
export default TypeWrite;
