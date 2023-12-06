import { useState } from "react";
import { useSelector } from "react-redux";

const Card = ({ data, handlePush }) => {
  const { themeColor, hideAvatar, hideDesignation, cardSize, borderRadius } =
    useSelector((state) => state);

  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="grid grid-cols-1 w-max mx-auto place-items-start"
      onMouseOver={() => setIsActive(true)}
      onMouseOut={() => setIsActive(false)}
    >
      <div
        className={`py-8 px-5 text-white mx-auto h-max flex flex-col justify-center items-center overflow-hidden relative`}
        style={{
          background: themeColor,
          width: `${cardSize}px`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        {isActive && (
          <div
            onClick={() => handlePush(data.id)}
            className="w-[50px] cursor-pointer h-[50px] z-10 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
          >
            <i className="fa-solid fa-plus" style={{ color: themeColor }}></i>
          </div>
        )}
        {data.Avatar && (
          <div
            className={`w-[65px] h-[65px] bg-gray-100 rounded-full overflow-hidden relative ${
              hideAvatar ? "hidden mb-0" : "block mb-5"
            }`}
          >
            <img
              src={data.Avatar}
              alt={"Zisanur Haque"}
              className=" object-cover w-[65px] h-[65px] "
            />
          </div>
        )}
        {data.Name && (
          <h6 className="font-medium text-white text-center text-xl">
            {data.Name}
          </h6>
        )}
        {!hideDesignation && data.Designation && (
          <h6 className="font-medium text-white text-center text-xl">
            {`(${data.Designation})`}
          </h6>
        )}
      </div>
    </div>
  );
};

export default Card;
