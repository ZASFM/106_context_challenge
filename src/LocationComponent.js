import React from "react";
import { useGlobalContext } from "./UserContext";
// This component displays location from context
const Location = () => {
    const {data}=useGlobalContext();
  
    return (
    <div>
      {/* Display user's location from Context */}
      <h2 className="is-size-4">
        <strong>Location</strong>: {data.location}
      </h2>
    </div>
  );
};

export default Location;
