import { useEffect, useState } from "react";

export const ViewSizeStep2
 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState("40");

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
        pattern="[0-9]"
        type="text"
        value={height}
        onChange={handleHeightChange}
      />
    </div>
  );
}
