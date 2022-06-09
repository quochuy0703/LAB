import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

import { LocalForm, Control, Errors } from "react-redux-form";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClickModal() {
    this.toggleModal();
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  handleSubmit(values, e) {
    e.preventDefault();
    console.log(JSON.stringify(values));
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    this.toggleModal();
  }
  render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !val || val.length <= len;
    const minLength = (len) => (val) => val && val.length >= len;
    return (
      <div>
        <Button color="primary" onClick={this.handleClickModal}>
          Submit Comment
        </Button>
        <div>
          <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={(values, e) => this.handleSubmit(values, e)}>
                <Row className="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    className="form-control"
                    id="rating"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text
                    model=".author"
                    className="form-control"
                    id="author"
                    name="author"
                    validators={{
                      required,
                      maxLength: maxLength(15),
                      minLength: minLength(2),
                    }}
                  />
                  <Errors
                    model=".author"
                    show="touched"
                    className="text-danger"
                    messages={{
                      required: "required",
                      maxLength: "Must be 15 characters or less",
                      minLength: "Must be greater than 2 characters",
                    }}
                  />
                </Row>
                <Row className="form-group">
                  <Label htmlFor="comment">Comment</Label>
                  <Control.textarea
                    model=".comment"
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows="10"
                  />
                </Row>
                <Row className="form-group">
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Row>
              </LocalForm>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default CommentForm;
