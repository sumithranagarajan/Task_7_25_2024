import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";


import PropTypes from "prop-types";

Card.propTypes = {
  card: {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: {
      users: PropTypes.number.isRequired,
      storage: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      help: PropTypes.bool.isRequired,
    },
  },
};

function Card({ card }) {
  return (
    <div className="col">
      <div className={`card mb-4 rounded-3 ${card.plan == 'Enterprise' && 'border-primary'}`}>
        <div className={`card-header py-3 ${card.plan == 'Enterprise' && 'text-bg-primary border-primary'}`}>
          <h4 className="my-0 fw-normal text-body-tertiary">{card.plan}</h4>
          <h1 className="card-title pricing-card-title">
            ${card.price}
            <small>/month</small>
          </h1>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4 text-start">
            {card.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enable ? (
                    <span>
                      <FontAwesomeIcon icon={faCheck} />{' '}{feature.name}
                    </span>
                  ) : (
                    <span className="opacity-50">
                      <FontAwesomeIcon icon={faXmark} />{' '}
                      {feature.name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className={`w-100 btn btn-lg ${
              card.plan == "FREE" && "btn btn-primary disabled rounded-pill"
            } ${card.plan == "PLUS" && "btn btn-primary disabled rounded-pill"}
             ${card.plan == "PRO" && "btn-primary rounded-pill"}`}
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
