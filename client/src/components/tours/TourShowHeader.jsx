import React from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { FiMapPin } from "react-icons/fi";
import { processPayment } from '../../redux/actions/checkoutAction';
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51H6zkPKN5SocDHpLSE95tAASmPSCNBtkQFiM2bj4Y1puXojhFQ8XeLsqrpzG7ZCrFtJNDO2PqSjw85y2ywGMbfB400uRD2yZIO"
);

const TourShowHeader = ({
  id,
  startLocation,
  ratingsAverage,
  processPayment,
  price,
  isSignedIn,
  history,
}) => {
  const handlePayment = async () => {
    if (!isSignedIn) {
      history.push('/login')
    } else {
      processPayment(id, stripePromise);
    }
  }
  return (
    <Elements stripe={stripePromise}>
      <Header>
        <div className="header-box">
          <span>
            <FiMapPin className="icon" />
          </span>{" "}
          {startLocation}
        </div>
        <div className="header-box">
          <span>Rating:</span>{" "}
          <StarRatings
            rating={ratingsAverage}
            starDimension="17px"
            starSpacing="0px"
            starRatedColor="#FDCC0D"
          />
        </div>
        <div className="header-box">
          <span>Price:</span> ${price}
        </div>
        <div className="header-box button" onClick={handlePayment}>
          Book now
        </div>
      </Header>
    </Elements>
  );
};

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  border: var(--border);
  grid-gap: 1px;
  background-color: silver;

  .icon {
    vertical-align: middle;
    margin-bottom: 3px;
  }

  .header-box {
    background-color: #fff;
    padding: 1rem 2rem;
    text-align: center;
  }

  .button {
    background-color: var(--accent-clr);
    color: #fff;
  }

  span {
    color: silver;
  }

  .star-container {
    margin-top: 4px;
  }

  @media (min-width: 750px) and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    margin: 0 3rem;
  }
`;

export default connect(null, { processPayment })(TourShowHeader);
