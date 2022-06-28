import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./Style/Deliverd.css";

const Deliverd = () => {
//   const cartData = useSelector((state) => state.reducer.cart);
//   const items = cartData.map((el) => {
//     return el.price;
//   });
//   let totalItems = items.length;
//   let totalPrice = 0;
//   for (let i = 0; i < totalItems; i++) {
//     totalPrice += items[i];
//   }
  
  return (
    <>
      <div className="del_div">
        <div>
          <h3>Thankyou To Order Dish's</h3>
          <br />
          <br />
          <h5>{`Your Payment Has Been Successfully`}</h5>
          <br />
          <h6>{`Your order will be delivered within 15 minutes`}</h6>
        </div>
      </div>
    </>
  );
};

export default Deliverd;
