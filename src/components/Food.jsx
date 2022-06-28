import React, { useEffect} from "react";
import "./Style/Food.css";
import { useSelector, useDispatch } from "react-redux";
import { addCart, showFood } from "../redux/action";

const Food = () => {
  const dispatch = useDispatch();

  useEffect((e) => {
    dispatch(showFood);
  }, []);

  const handelAddCart = (idx) => {
    foodData.forEach((e) => {
      if (e.id === idx) {
        dispatch(addCart(e));
      }
    });
  };

  const foodData = useSelector((state) => state.reducer.data);
  return (
    <>
      <div className="food">
        {foodData.map((el) => {
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
                  <div className="food_add">
                    <button
                      onClick={() => {
                        handelAddCart(el.id);
                      }}
                    > 
                      Add Food +
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Food;
