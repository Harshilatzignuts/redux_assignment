import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import Badge from "react-bootstrap/Badge";
import { addProductToCart } from "../redux/actions/cartAction";
const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.SAMPLE_PRDDUCTS);
  //console.log(products, "products all");
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    console.log(product, "product added");
    dispatch(addProductToCart(product));
  };

  const renderList = products.map((product) => {
    const { id, title, price, description } = product;

    return (
      <div className="col-12" key={id}>
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>
              <span>{title}</span>
              <Badge bg="secondary">$ {price}</Badge>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              onClick={() => handleAdd(product)}
              variant="outline-primary"
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <h1 className="text-center text-uppercase my-5">
        Buy your favorite products
      </h1>
      {renderList.length > 0 ? (
        <div className="row">{renderList}</div>
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

export default ProductListing;
