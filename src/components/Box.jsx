import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Box.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Box = () => {
  const { page, data, handelClick, dataLength, handelSuprise } =
    useContext(AppContext);

  return (
    <div className="box">
      <div className="imgContainer">
        <div id="image">
          <img src={data.image} />
        </div>
        <div id="backGround"></div>
      </div>

      <div className="personDetails">
        <p id="name">{data.name}</p>
        <p id="job">{data.job}</p>
      </div>

      <div className="textContainer">
        <p>{data.text}</p>
      </div>

      <div className="arrowsContainer">
        {page == 0 ? (
          <FaLessThan id="arrow" onClick={() => handelClick(4)} />
        ) : (
          <FaLessThan id="arrow" onClick={() => handelClick(page - 1)} />
        )}

        {page === dataLength - 1 ? (
          <FaGreaterThan id="arrow" onClick={() => handelClick(0)} />
        ) : (
          <FaGreaterThan id="arrow" onClick={() => handelClick(page + 1)} />
        )}
      </div>

      <div className="supriseContainer">
        <button onClick={handelSuprise}>Suprise Me</button>
      </div>
    </div>
  );
};

export default Box;
