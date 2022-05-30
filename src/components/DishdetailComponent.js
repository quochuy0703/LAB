import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

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
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
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
    <div className="col-12 col-md-5 m-1">
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
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else return <div>Nhấn vào món ăn để xem chi tiết</div>;
}

export default DishDetail;
