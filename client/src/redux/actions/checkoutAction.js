import axios from "axios";
import history from "../../history";
import { STRIPE_CHECKOUT } from "../type/types";

// PROCESS PAYMENT
export const processPayment = (id, stripePromise) => async dispatch => {
  try {
    const stripe = await stripePromise;
    const response = await axios(`/api/v1/bookings/checkout-session/${id}`);
    // await stripe.redirectToCheckout({
    //   sessionId: response.data.session.id
    // });
    window.open(response.data.session.url, '_blank');

    dispatch({ type: STRIPE_CHECKOUT, payload: response.data });
    history.push('/');
  } catch (err) {
    console.log(err);
  }
}