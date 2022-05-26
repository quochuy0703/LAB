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
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarText,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      sodong: "3",
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    console.log(e.currentTarget.textContent);
    this.setState({
      staffs: STAFFS,
      sodong: e.currentTarget.textContent,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar color="primary" expand="md" dark>
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav left>
                  Cột hiển thị
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
        <StaffList staffs={this.state.staffs} sodong={this.state.sodong} />
      </div>
    );
  }
}

export default App;
