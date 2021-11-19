import React, { useState } from "react";
import "./Card.scss";

function Card(props) {
  const [pressed, setPressed] = useState(false);
  const handleChange = () => {
    setPressed(!pressed);
  };
  return (
    <div className="card" onClick={handleChange}>
      {!pressed ? (
        ""
      ) : (
        <div
          style={{
            height: "20px",
          }}
        >
          Вы выбрали тариф:
        </div>
      )}
      <div className={`card-header${props.price}`}>
        Безлимитный {props.price}
      </div>
      <div className="card-body">
        <div className={`card-price${props.price}`}>
          <div className="card-text1">руб</div>
          <div className="card-value">{props.price}</div>
          <div className="card-text2">/мес</div>
        </div>
        <div className="card-speed">до {props.speed} Мбит/сек</div>
        <div className="card-footer">Объем включенного трафика не граничен</div>
      </div>
    </div>
  );
}

export default Card;
