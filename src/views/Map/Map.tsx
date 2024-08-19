import React from "react";
import GoogleMap, { BreakLine } from "./Map.style";
import { MAPCONTENTS } from "constants/StringConstants";

const Map = () => {
  return (
    <>
      <BreakLine style={{ marginTop: "35px" }} />
      <GoogleMap
        loading="lazy"
        allowFullScreen
        src={MAPCONTENTS.MAPURL}
      ></GoogleMap>
      <BreakLine />
    </>
  );
};

export default Map;
