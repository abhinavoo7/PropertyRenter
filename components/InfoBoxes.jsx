import React from "react";
import { InfoBox } from "./InfoBox";
import { BUTTON_TEXTS, SCREEN_MESSAGES } from "@/lib/Constants";
import PATHS from "@/config/Routes/routes";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={SCREEN_MESSAGES.HOME_PAGE.INFO_BOXES.RENTERS_HEAD}
            backGroundColor="bg-gray-100"
            buttonInfo={{
              text: BUTTON_TEXTS.BROWSE_PROPERTES,
              link: PATHS.PROPERTIES,
              backgroundColor: "bg-black",
            }}
          >
            {SCREEN_MESSAGES.HOME_PAGE.INFO_BOXES.FIND_DREAM_PROPERTIES}
          </InfoBox>
          <InfoBox
            heading={SCREEN_MESSAGES.HOME_PAGE.INFO_BOXES.PROPERTY_OWNER_HEAD}
            backGroundColor="bg-blue-100"
            buttonInfo={{
              text: BUTTON_TEXTS.ADD_PROPERTY,
              link: PATHS.ADD_PROPERTY,
              backgroundColor: "bg-blue-500",
            }}
          >
            {SCREEN_MESSAGES.HOME_PAGE.INFO_BOXES.LIST_YOUR_PROPERTY}
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
