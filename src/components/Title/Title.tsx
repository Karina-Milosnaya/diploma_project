import { useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";
import "./Title.css";

function Title({ titleContent }: { titleContent: string }) {
  const [color, setColor] = useContext(contextCreation);
  return (
    <>
      <h1 className={`main-title main-title-${color}`}>{titleContent}</h1>
    </>
  );
}

export default Title;
