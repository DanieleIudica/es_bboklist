import { Component } from "react";
import { Card } from "react-bootstrap";
// import history from "../data/history.json";

class SingleBook extends Component {
  render() {
    return (
      //   console.log(history[0].title),
      //   <Card style={{ width: "18rem" }} className="mx-auto">
      //     <Card.Img variant="top" src={history[0].img} />
      //     <Card.Body>
      //       <Card.Title>{history[0].title}</Card.Title>
      //     </Card.Body>
      //   </Card>
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Img variant="top" src={this.props.list.img} />
        <Card.Body>
          <Card.Title>{this.props.list.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
