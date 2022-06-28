import React from "react";
import "./Style/Deliverd.css";

const Deliverd = () => {  
  return (
    <>
      <div className="del_div">
        <div>
          <h2>Thankyou To Order Dishs</h2>
          <br />
          <br />
          <h4>{`Your Payment Has Been Successfully`}</h4>
          <br />
          <h5>{`Your order will be delivered within 15 minutes`}</h5>
        </div>
      </div>
    </>
  );
};

export default Deliverd;
