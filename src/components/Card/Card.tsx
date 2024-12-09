import { useContext } from "react";
import { contextCreation } from "../../providers/ThemeContext";
import "./Card.css";
import { TCard } from "../types/types";

function Card({ cardImage, cardDate, cardTitle }: TCard) {
  const [color, setColor] = useContext(contextCreation);
  return (
    <>
      <div className={`card card-${color}`}>
        <div className="card__wrap">
          <div className="card__img">
            <img src={cardImage} alt="image" />
          </div>
          <div className="card__description">
            <span className={`card__date card__date-${color}`}>{cardDate}</span>
            <h2 className={`card__title card__title-${color}`}>{cardTitle}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
