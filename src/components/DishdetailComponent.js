import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

// class DishDetail extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     if (this.props.dish != null) {
//       console.log(this.props.dish.comments);
//       let comments = this.props.dish.comments.map((item) => {
//         return (
//           <div>
//             <p>{item.comment}</p>
//             <p>-- {item.author}</p>
//           </div>
//         );
//       });

//       return (
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-md-5 m-1">
//               <Card>
//                 <CardImg
//                   top
//                   src={this.props.dish.image}
//                   alt={this.props.dish.name}
//                 />
//                 <CardBody>
//                   <CardTitle>{this.props.dish.name}</CardTitle>
//                   <CardText>{this.props.dish.description}</CardText>
//                 </CardBody>
//               </Card>
//             </div>
//             <div className="col-12 col-md-5 m-1">
//               <h4>Comments</h4>
//               <div>{comments}</div>
//             </div>
//           </div>
//         </div>
//       );
//     } else return <div>Nhấn vào món ăn để xem chi tiết</div>;
//   }
// }

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  let listComment = comments.map((item) => {
    return (
      <div>
        <p>{item.comment}</p>
        <p>-- {item.author}</p>
      </div>
    );
  });
  return (
    <div>
      <h4>Comments</h4>
      <div>{listComment}</div>
    </div>
  );
}

function DishDetail(props) {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else return <div>Nhấn vào món ăn để xem chi tiết</div>;
}

export default DishDetail;
