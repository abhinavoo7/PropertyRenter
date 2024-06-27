import Image from "next/image";
import React from "react";
import { convertTextToPascalCase, isEmpty } from "@/utils/utils";
import PropTypes from "prop-types";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarkerAlt,
} from "react-icons/fa";

const PropertyCard = ({
  _id,
  type,
  name,
  location: { city, state },
  rates = {},
  beds = 0,
  baths = 0,
  squareFeet = 0,
  images = [],
}) => {
  const rateTypes = Object.keys(rates)?.map((key) =>
    convertTextToPascalCase(key)
  );

  const getRateDisplay = () => {
    if (!isEmpty(rates?.monthly)) {
      return `${rates?.monthly}/mo`;
    } else if (!isEmpty(rates?.weekly)) {
      return `${rates?.weekly}/wk`;
    } else if (!isEmpty(rates?.nightly)) {
      return `${rates?.nightly}/night`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${images[0]}`}
        alt="property image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{type}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FaBed className="inline mr-2" /> {beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-2" /> {baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2" />
            {squareFeet}
            <span className="md:hidden lg:inline"> sqft</span>
          </p>
        </div>

        <div className="flex flex-row justify-center gap-4 text-green-900 text-sm mb-4">
          {rateTypes?.map((type) => (
            <p key={type}>
              <FaMoneyBill className="inline mr-2" />
              <span className="mx-1">{type}</span>
            </p>
          ))}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0 lg:mt-1">
            <FaMapMarkerAlt className="inline text-blue-500 mt-1" />
            <span className="text-blue-500 font-bold">
              {" "}
              {`${city} ${state}`}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${_id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  _id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.object,
  beds: PropTypes.number,
  baths: PropTypes.number,
  squareFeet: PropTypes.number,
  rates: PropTypes.object,
  images: PropTypes.array,
};
