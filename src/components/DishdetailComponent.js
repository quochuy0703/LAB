import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
        <CardBody>
          <CardTitle>{this.props.dish.name}</CardTitle>
          <CardText>{this.props.dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default DishDetail;
