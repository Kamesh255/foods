import React, { useEffect, useState } from "react";
import "./Style/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementitem, deleteCart, incrementitem } from "../redux/action";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus, AiTwotoneDelete } from "react-icons/ai";
import { store } from "../redux/store";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const [upi, setUpi] = useState(false);
  const [total, setTotal] = useState(0);
  const [length, setLength] = useState(0);

  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.reducer.cart);

  const items = cartData.map((el) => {
    return el.price;
  });
  let totalItems = items.length;

  const setCartData = () => {
    let newPrice = 0;
    for (let i = 0; i < cartData.length; i++) {
      newPrice += cartData[i].price * cartData[i].quantity;
    }
    setTotal(newPrice);
  };
  useEffect(() => {
    setCartData();
    return () => {
      setCartData();
    };
  }, [cartData, length]);

  const handlecartRemove = async (idx) => {
    await dispatch(deleteCart(idx));

    let state = store.getState();
    setLength(state.reducer.cart.length);
  };

  const RemoveItem = (idx) => {
    dispatch(decrementitem(idx));
  };
  const Additem = (idx) => {
    dispatch(incrementitem(idx));
  };

  return (
    <>
      <div>
        <br />
        <h3>Cart Page</h3>
        <br />
        <hr />
        <div className="cart_div">
          <div>
            <h3>My Dish</h3>
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
                        <div style={{ display: "flex" }}>
                          <div>
                            <p>Price : ₹{el.price * el.quantity}</p>
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <p> {`quantity: ${el.quantity}`}</p>
                          </div>
                        </div>
                        <div className="food_remove">
                          <button id="btn" onClick={() => Additem(el.id)}>
                            <AiOutlinePlus />
                          </button>
                          {el.quantity > 1 ? (
                            <button
                              style={{ margin: "0 0 0 10px " }}
                              onClick={() => RemoveItem(el.id)}
                            >
                              <AiOutlineMinus />
                            </button>
                          ) : null}
                          <button
                            style={{ marginLeft: "10px" }}
                            onClick={() => handlecartRemove(el.id)}
                          >
                            <AiTwotoneDelete />
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
            <h3>Items</h3>
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
                        <h4>{el.price * el.quantity}</h4>
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
                  <h4>{total}</h4>
                </div>
              </div>

              <br />
              <br />
            </div>
            <hr />
            <h3>Payment</h3>
            <div style={{ padding: "5px" }}>
              <div onClick={() => setCart(!cart)} className="payDiv">
                <h4>Cart</h4>
                {cart && (
                  <div className="input">
                    <input type="text" placeholder="Card holder name" />
                    <br />
                    <input type="number" placeholder="Card Number" />
                    <br />
                    <input type="number" placeholder="Enter your CVV" />
                    <br />
                    <input type="number" placeholder="Enter your Pin" />
                    <br />
                    <br />
                    <Link to="/deliverd">
                      <button className="btn" style={{ padding: 5 }}>
                        Payment
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
                        Payment
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
