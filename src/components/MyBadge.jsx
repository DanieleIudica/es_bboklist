import { Badge } from "react-bootstrap";

const MyBadge = (props) => (
  <h2>
    {props.title}{" "}
    <Badge variant={props.color} className="my-3">
      New
    </Badge>
  </h2>
);

export default MyBadge;
