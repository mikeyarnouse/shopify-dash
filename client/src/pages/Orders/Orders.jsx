import React, { useEffect, useState } from "react";
import axios from "axios";
import Order from "../../components/Order/Order";
import "./Orders.scss";

const Orders = () => {
  //   let baseURL = process.env.REACT_APP_ORDERS_URL;
  //   console.log(baseURL);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUserOrders = async (req, res) => {
      try {
        const res = await axios.get("http://localhost:8080/api/orders");
        console.log(res.data);
        setOrders(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getUserOrders();
  }, []);

  return (
    <main className="orders">
      <div className="orders-head">
        <h1 className="orders__title">Orders</h1>
      </div>
      <div className="orders-content">
        {orders?.map((o) => {
          return <Order key={o.order_id} order={o} />;
        })}
      </div>
    </main>
  );
};

export default Orders;
