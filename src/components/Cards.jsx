import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";//
import { DELETE } from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart</h2>
      <div className="row">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  className="ml-2 mr-2 mt-2 mb-2"
                  style={{ height: "16rem" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price: ₹ {`${element.price}`}</Card.Text>
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => send(element)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
