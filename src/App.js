import "./App.css";
import StaffList from "./components/StaffListComponent";
import { STAFFS } from "./shared/staffs";
import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Nav,
  UncontrolledDropdown,
} from "reactstrap";

//class App
class App extends Component {
  constructor(props) {
    super(props);
    //state chứa:
    //staffs chứa thông tin của staff
    //col lưu trạng thái số cột cần hiển thị, giá trị ban đầu là 3 (các giá trị là: 2, 3, 6)
    this.state = {
      staffs: STAFFS,
      col: "3",
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    console.log(e.currentTarget.textContent);
    this.setState({
      staffs: STAFFS,
      col: e.currentTarget.textContent,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar color="primary" expand="md" dark>
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav right>
                  <strong>Cột hiển thị</strong>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={this.changeValue}>2</DropdownItem>
                  <DropdownItem onClick={this.changeValue}>3</DropdownItem>
                  <DropdownItem onClick={this.changeValue}>6</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <h4 className="text-center">Danh sách nhân viên</h4>
        {/* component stafflist */}
        <StaffList staffs={this.state.staffs} col={this.state.col} />
      </div>
    );
  }
}

export default App;
