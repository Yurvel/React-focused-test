import React, { useEffect, useState } from 'react'

export const ViewSizeStep1
 = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeViewSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeViewSize);
    return () => window.removeEventListener("resize", changeViewSize);
  }, []);

  return (
    <div
      className="App"
      style={{ border: "1px solid green" }}
    >
      <span>Live width: {width} </span>
    </div>
  );
}
