import React from "react";
import order1_1 from "../../assets/images/order1-1.png";
import order1_2 from "../../assets/images/order1-2.png";
import order2_1 from "../../assets/images/order2-1.png";
import order2_2 from "../../assets/images/order2-2.png";
import order2_3 from "../../assets/images/order2-3.png";
import order3_1 from "../../assets/images/order3-1.png";
import order3_2 from "../../assets/images/order3-2.png";
import order3_3 from "../../assets/images/order3-3.png";
import order3_4 from "../../assets/images/order3-4.png";
import busIcon from "../../assets/icons/bus.png";
import "./Order.scss";

const Order = ({ order }) => {
  return (
    <article className="order">
      <div className="order-delivery">
        <div className="order-delivery-head">
          <img src={busIcon} alt="" className="order-delivery__icon" />
          <p className="order-delivery__out">Out for delivery</p>
        </div>
        <p className="order-delivery__estimated">{`Estimated Delivery ${order.delivery_date}`}</p>
      </div>
      <div className="order-card">
        <div className="order-card__images">
          {order.order_id === 1 ? (
            <div className="order-card__image-block-1">
              <img
                src={order1_1}
                alt=""
                className="order-card__img order-card__img--lg"
              />
              <img
                src={order1_2}
                alt=""
                className="order-card__img order-card__img--lg"
              />
            </div>
          ) : order.order_id === 2 ? (
            <div className="order-card__image-block-2">
              <div className="order-card__image-block-2__wrapper">
                <img
                  src={order2_1}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
                <img
                  src={order2_2}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
              </div>
              <img
                src={order2_3}
                alt=""
                className="order-card__img order-card__img--lg"
              />
            </div>
          ) : (
            <div className="order-card__image-block-3">
              <div className="order-card__image-block-3__wrapper">
                <img
                  src={order3_1}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
                <img
                  src={order3_2}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
              </div>
              <div className="order-card__image-block-3__wrapper-2">
                <img
                  src={order3_3}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
                <img
                  src={order3_4}
                  alt=""
                  className="order-card__img order-card__img--sm"
                />
              </div>
            </div>
          )}
        </div>
        <div className="order-card__info">
          <div className="order-card__info-order">
            <p className="order-card__quantity">{`${order.item_quantity} items`}</p>
            <p className="order-card__order-number">{`Order #${order.order_id}`}</p>
          </div>
          <div className="order-card__info-profile">
            <p className="order-card__profile-name">{`${order.first_name} ${order.last_name}`}</p>
            <p className="order-card__profile-address">{`${order.shipping_address}`}</p>
          </div>
          <div className="order-card__info-total">
            <p className="order-card__total">{`${order.order_total}`}</p>
          </div>
          <div className="order-card__info-buttons">
            <button className="order-card__info-btn order-card__info-btn--buy">
              Buy Again
            </button>
            <button className="order-card__info-btn order-card__info-btn--manage">
              Manage
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Order;
