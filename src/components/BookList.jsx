import { Component } from "react";
import { CardGroup, Row, Col, Card } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <CardGroup>
        {this.props.list.map((x) => (
          <SingleBook list={x} />
          //   <SingleBook />
        ))}
      </CardGroup>
      //   <CardGroup>
      //     {this.props.list.map((x) => (
      //       <Card className="mx-auto">
      //         <Card.Img variant="top" src={this.props.list.img} />
      //         <Card.Body>
      //           <Card.Title>{this.props.list.title}</Card.Title>
      //         </Card.Body>
      //       </Card>
      //     ))}
      //   </CardGroup>
    );
  }
}

export default BookList;
