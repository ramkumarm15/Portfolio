import React from "react";
import { Link } from "react-router-dom";

import { UilArrowRight, UilArrowLeft } from "@iconscout/react-unicons";

export const PagenavigationLeft = ({ title, path, whiteBg }) => {
   return (
      <>
         <Link to={path} className={`scrollDown-left ${whiteBg ? "white-bg" : ""}`}>
            <UilArrowLeft /> {title}
         </Link>
      </>
   );
};
export const PagenavigationRight = ({ title, path, whiteBg }) => {
   return (
      <>
         <Link to={path} className={`scrollDown ${whiteBg ? "white-bg" : ""}`}>
            {title} <UilArrowRight />
         </Link>
      </>
   );
};
