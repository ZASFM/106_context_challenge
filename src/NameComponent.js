import React from "react";
import { useGlobalContext } from "./UserContext";
// This component displays name from Context
const RandomComponent = () => {
     const {data}=useGlobalContext(); 

    return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="is-size-4">
        {/* Pass name from context here */}
        <strong>Name</strong>: {data.name}
      </h2>
    </div>
  );
};

export default RandomComponent;
