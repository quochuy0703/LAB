import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Row } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    //state chứa:
    //staffSelected lưu trạng thái nhân viên được chọn, giá trị ban đầu là null
    this.state = {
      staffSelected: null,
    };
  }
  //hàm render staff được chọn, dựa trên state
  //tham số đầu vào là object nhân viên
  //nếu tham số đầu vào là null thì sẽ hiện "bấn vào nhân viên để xem thông tin chi tiết"
  renderStaffSelected(item) {
    console.log(item);
    if (item != null) {
      return (
        <div className="my-5">
          <h2 className="text-center">Chi tiết nhân viên</h2>
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
        </div>
      );
    } else {
      return <div>Bấm vào tên nhân viên để xem thông tin</div>;
    }
  }
  render() {
    //list chứa danh sách nhân viên
    const list = this.props.staffs.map((staff) => {
      return (
        <div>
          <Card
            key={staff.id}
            // khi người dùng click vào card thì sẽ thay đổi state, và lưu thông tin của staff vào state
            onClick={() => this.setState({ staffSelected: staff })}
          >
            <CardImg
              top
              src={staff.image}
              alt={staff.image}
              className="avatar"
            />
            <CardBody className="text-center">
              <CardTitle>
                <strong>{staff.name}</strong>
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        {/* render list nhân viên */}
        <Row md={this.props.col} sm="2" xs="1">
          {list}
        </Row>
        <div className="row">
          {/* render nhân viên được chọn */}
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            {this.renderStaffSelected(this.state.staffSelected)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
