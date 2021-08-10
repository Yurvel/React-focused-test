import React, { useEffect, useState } from "react";

export const WithSetDivHeight = (Component) => {

  return function WrappedComponent(props) {

    const [heightGlobal, setHeightGlobal] = useState("40");

    useEffect(() => {
      window.setDivHeight = setHeightGlobal;
    }, [setHeightGlobal]);

    return (
      <Component
        height={heightGlobal}
        setHeight={setHeightGlobal}
        {...props}
      />
    );
  };
};