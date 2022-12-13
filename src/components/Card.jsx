import "./card.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  title,
  description,
  category,
  price,
  image,
  handleClick,
}) => {
  return (
    <fieldset key={id} className="card">
      <legend className="category">{category}</legend>
      <img src={image} alt={title} />

      <div className="description">
        <h5>
          {title.substring(0, 25)}
          {"..."}
        </h5>
        <small>
          {description.substring(0, 100)}
          {"..."}
        </small>
        <div className="price">
          <h4>$ {price}</h4>
          <Link to={`/products/${id}`}>
            <button onClick={handleClick}>
              <span className="material-symbols-outlined">
                shopping_cart_checkout
              </span>
            </button>
          </Link>
        </div>
      </div>
    </fieldset>
  );
};

export default Card;
