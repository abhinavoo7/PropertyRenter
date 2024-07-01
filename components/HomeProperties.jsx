import React from "react";
import properties from "@/lib/properties.json";
import { isEmpty } from "@/utils/utils";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import {
  BUTTON_TEXTS,
  NOT_FOUND_MESSAGES,
  SCREEN_MESSAGES,
} from "@/lib/Constants";
import PATHS from "@/config/Routes/routes";

const HomeProperties = () => {
  const recentProperties = properties
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-500 mb-6 text-center">
            {SCREEN_MESSAGES.HOME_PAGE.RECENT_PROPERTIES.HEAD}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isEmpty(recentProperties) ? (
              <p>{NOT_FOUND_MESSAGES.NO_PROPERTIES_FOUND}</p>
            ) : (
              recentProperties?.map((property) => (
                <PropertyCard key={properties._id} {...property} />
              ))
            )}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href={PATHS.PROPERTIES}
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          {BUTTON_TEXTS.VIEW_ALL_PROPERTIES}
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
