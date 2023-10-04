import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  decreaseQuatity,
  increaseQuatity,
  removeProductFromCart,
} from "../redux/actions/cartAction";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartItems);
  console.log(products, "products all");
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProductFromCart(id));
  };

  console.log(products);

  const handleIncreaseQuantity = (id) => {
    console.log(id);
    dispatch(increaseQuatity(id));
  };

  const handleDecreaseQuantity = (id) => {
    console.log(id);
    dispatch(decreaseQuatity(id));
  };

  const renderCartList = products.map((product) => {
    const { id, title, price, description, quantity } = product;

    const newPrice = price * product.quantity;

    return (
      <div className="col-12" key={id}>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>
              <span>{title}</span>
              <Card.Text>
                <span>$ {newPrice}</span>
                {product.quantity > 1 ? (
                  <span>
                    <i>(${`${price}`}/item)</i>
                  </span>
                ) : (
                  <></>
                )}
              </Card.Text>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="add_quntity">
              <Card.Text>Item : {quantity}</Card.Text>
              <div className="group_btn">
                <Button onClick={() => handleDecreaseQuantity(id)}>-</Button>
                <Button onClick={() => handleIncreaseQuantity(id)}>+</Button>
              </div>
            </div>
            <Button onClick={() => handleRemove(id)} variant="outline-primary">
              Remove
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="text-center text-uppercase my-5">Your shoping cart</h1>
      {/* <div className="row">{renderCartList}</div> */}

      {renderCartList.length > 0 ? (
        <div className="row">{renderCartList}</div>
      ) : (
        <div className="no_Data">
          <Card>
            <Card.Body>No data Found</Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Cart;
