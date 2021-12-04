import React, { useContext } from "react";
import { OrderItem } from "@components/OrderItem";
import { AppContext } from "../context/AppContext";
import "@styles/MyOrder.scss";

const MyOrder = () => {
  const { state } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumulator, currentValue ) => accumulator + currentValue.price;

		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p className="titleOrder">My order</p>
      </div >
      <div className="my-order-content">
        <div className="order-items-container">
        {state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
        </div>
        
        <div className="order">
          <p>
            <span>TOTAL</span>
          </p>
          <p>$ {sumTotal()}</p>
        </div>
        <button className="btn-primary btn-myOrder">Checkout</button>
      </div>
    </aside>
  );
};

export { MyOrder };