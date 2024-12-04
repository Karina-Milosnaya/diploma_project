import "./Card.css";

type TCard = {
  cardImage: string;
  cardDate: string;
  cardTitle: string;
};

function Card({ cardImage, cardDate, cardTitle }: TCard) {
  return (
    <>
      <div className="card">
        <div className="card__wrap">
          <div className="card__img">
            <img src={cardImage} alt="image" />
          </div>
          <div className="card__description">
            <span className="card__date">{cardDate}</span>
            <h2 className="card__title">{cardTitle}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
