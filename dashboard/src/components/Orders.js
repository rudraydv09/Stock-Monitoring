import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [newOrder, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://stock-monitoring-yhpo.onrender.com/newOrder")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="title">Orders ({newOrder.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {newOrder.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td
                  style={{
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {newOrder.length === 0 && (
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p>You haven't placed any orders yet.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;