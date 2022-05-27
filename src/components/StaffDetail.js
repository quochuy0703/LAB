import React, { Component } from "react";

class StaffDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
  }
}
