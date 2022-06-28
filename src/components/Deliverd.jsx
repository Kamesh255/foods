import React from "react";
import "./Style/Deliverd.css";

const Deliverd = () => {  
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
