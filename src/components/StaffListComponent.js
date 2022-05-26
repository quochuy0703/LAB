import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
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
          <div>
            <div className="row">
              <div className="text-center">
                <img className="avatar" src={item.image} />
                <h4>Họ và Tên: {item.name}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
                <p>
                  Ngày vào công ty: {dateFormat(item.startDate, "dd/mm/yyyy")}
                </p>
                <p>Phòng ban: {item.department.name}</p>
              </div>
              <div className="col-6">
                <p>Số ngày nghỉ còn lại: {item.annualLeave}</p>
                <p>Số ngày làm thêm: {item.overTime}</p>
              </div>
            </div>
          </div>
        </Card>
      );
    } else {
      return <div>Bấm vào tên nhân viên để xem thông tin</div>;
    }
  }
  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div className="col-md-4 col-sm-6 col-xs-12">
          {/* <Card
            key={staff.id}
            onClick={() => this.setState({ staffSelected: staff })}
          >
            <div className="row">
              <div className="col-3 text-center">
                <img className="avatar" src={staff.image} />
              </div>
              <div className="col-6">
                <p>{staff.name}</p>
              </div>
              <div className="col-3">
                <p>{staff.department.name}</p>
              </div>
            </div>
          </Card> */}
          <Card
            key={staff.id}
            onClick={() => this.setState({ staffSelected: staff })}
          >
            <CardImg top src={staff.image} alt={staff.image} />
            <CardBody className="text-center">
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{list}</div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            {this.renderStaffSelected(this.state.staffSelected)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
