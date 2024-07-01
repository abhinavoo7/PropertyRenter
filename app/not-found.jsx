import PATHS from "@/config/Routes/routes";
import {
  BUTTON_TEXTS,
  META_DATA_404,
  NOT_FOUND_MESSAGES,
} from "@/lib/Constants";
import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  ...META_DATA_404,
};

const NotFound = () => {
  return (
    <section className="bg-blue-50 min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="inline mr-2 text-red-600 text-7xl" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
            <p className="text-gray-500 text-xl mb-10">
              {NOT_FOUND_MESSAGES.PAGE_NOT_FOUND}
            </p>
            <Link
              href={PATHS.HOME}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
            >
              {BUTTON_TEXTS.GO_HOME}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
