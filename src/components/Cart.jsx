import React, { useState } from "react";
import "./Style/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const [upi, setUpi] = useState(false);

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer.cart);
  const items = cartData.map((el) => {
    return el.price;
  });
  let totalItems = items.length;
  let totalPrice = 0;
  for (let i = 0; i < totalItems; i++) {
    totalPrice += items[i];
  }

  const handlecartRemove = (idx) => {
    const filterdata = cartData.filter((e) => {
      return e.id !== idx;
    });
    dispatch(deleteCart(idx));
  };

  return (
    <>
      <div>
        <br />
        <h3>Welcome to cart page</h3>
        <br />
        <hr />
        <div className="cart_div">
          <div>
            <h3>Your Dish</h3>
            <br />
            <div className="cart_item">
              {cartData.map((el) => {
                return (
                  <>
                    <div className="box">
                      <div className="food_img">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "8px 8px 0 0",
                          }}
                          src={el.img}
                          alt={el.name}
                        />
                      </div>
                      <div className="food_text">
                        <p>{el.name}</p>
                        <p>Price : ₹{el.price}</p>
                        <div className="food_remove">
                          <button onClick={() => handlecartRemove(el.id)}>
                            Remove Food -
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="pyment_div">
            <h3>Item's</h3>
            <br />
            <div className="pyment_text">
              <h4>{`Total Quantity: ${totalItems}`}</h4>
              <br />
              {cartData.map((el) => {
                return (
                  <>
                    <div className="details">
                      <div>
                        <h4>{el.name}</h4>
                      </div>
                      <div>
                        <h4>{el.price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
              <hr />
              <div className="details">
                <div>
                  <h4>Total Price</h4>
                </div>
                <div>
                  <h4>{totalPrice}</h4>
                </div>
              </div>
              <br />
              <br />
            </div>
            <hr />
            <h3>Pymant</h3>
            <div style={{ padding: "5px" }}>
              <div onClick={() => setCart(!cart)} className="payDiv">
                <h4>Cart</h4>
                {cart && (
                  <div className="input">
                    <input type="text" placeholder="cart holder name" />
                    <br />
                    <input type="number" placeholder="Card number" />
                    <br />
                    <input type="number" placeholder="enter your CVV" />
                    <br />
                    <input type="number" placeholder="enter your pin" />
                    <br />
                    <br />
                    <Link to="/deliverd">
                      <button className="btn" style={{ padding: 5 }}>
                        Pyment
                      </button>
                    </Link>
                  </div>
                )}
              </div>
              <br />
              <div onClick={() => setUpi(!upi)} className="payDiv">
                <h4>UPI</h4>
                {upi && (
                  <div className="input">
                    <input type="text" placeholder="UPI ID" />
                    <br />
                    <input type="text" placeholder="PIN" />
                    <br />
                    <br />
                    <Link to="/deliverd">
                      <button className="btn" style={{ padding: 5 }}>
                        Pyment
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
