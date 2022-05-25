import React, { Component } from "react";
import { Card } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-md-6">
          <Card key={staff.id}>{staff.name}</Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default StaffList;
