import { useEffect, useState } from "react";

export const ViewSizeStep3 =({ height, setHeight }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeViewSize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeViewSize);
    return () => window.removeEventListener("resize", changeViewSize);
  }, []);

  const filterSymbols = (string) => {
    return string.replace(/[^0-9.]/g, "")
  }

  const handleHeightChange = (event) => {
    setHeight(filterSymbols(event.target.value));
  };
  
  /* 
    Here I'm using onChange for input component
    because it listens to events more properly than onKeypress
  */
  return (
    <div
      className="App"
      style={{ border: "1px solid green", height: `${height}px` }}
    >
      <span>Live width: {width}</span>|<label>Height:</label>
      <input
        type="text"
        onChange={handleHeightChange}
        value={height}
      />
    </div>
  );
}
