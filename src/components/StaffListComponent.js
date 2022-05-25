import React, { Component } from "react";
import { Card } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffSelected: null,
    };
  }

  renderStaffSelected(item) {
    console.log(item);
    if (item != null) {
      return (
        <Card>
          <h4>Ho va Ten: {item.name}</h4>
          <p>Ngay sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
          <p>Ngay vao cong ty: {dateFormat(item.startDate, "dd/mm/yyyy")}</p>
          <p>Phong ban: {item.department.name}</p>
          <p>So ngay nghi con lai: {item.annualLeave}</p>
          <p>So ngay da lam them: {item.overTime}</p>
        </Card>
      );
    } else {
      return <div>Bam vao ten de chon</div>;
    }
  }
  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div className="col-md-4 col-sm-6 col-xs-12">
          <Card
            key={staff.id}
            onClick={() => this.setState({ staffSelected: staff })}
          >
            {staff.name}
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{list}</div>
        <div className="row">
          {this.renderStaffSelected(this.state.staffSelected)}
        </div>
      </div>
    );
  }
}

export default StaffList;
