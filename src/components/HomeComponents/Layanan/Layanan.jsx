import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

// img

// style
import "./Layanan.css";

const Layanan = (props) => {
  return (
    <Card className="text-center card-css" style={{ width: "20rem" }}>
      <CardBody>
        <img src={props.gambar} alt="ok lah" />
        <CardTitle tag="h4">{props.judul}</CardTitle>
        <CardText>{props.text}</CardText>
        <Button color="primary" href="" onClick={(e) => e.preventDefault()}>
          Detail
        </Button>
      </CardBody>
    </Card>
  );
};

export default Layanan;
