import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export const InfoBox = ({
  heading,
  buttonInfo,
  children,
  backGroundColor = "bg-gray-100",
  textColor = "text-gray-800",
}) => {
  const { link, text, backgroundColor } = buttonInfo;
  return (
    <div className={`${backGroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={link}
        className={`${backgroundColor} inline-block  text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {text}
      </Link>
    </div>
  );
};

InfoBox.propTypes = {
  heading: PropTypes.string,
  buttonInfo: PropTypes.object,
  children: PropTypes.string,
  backGroundColor: PropTypes.string,
  textColor: PropTypes.string,
};
