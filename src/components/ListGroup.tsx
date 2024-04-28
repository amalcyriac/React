import { useState } from "react";
import Alert from "./Alert";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  let items = props.items;
  let heading = props.heading;
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [showAlert, setShowAlert] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {showAlert && <Alert onClose={() => setShowAlert(0)}>Hello world</Alert>}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowAlert(1 ^ showAlert)}
      >
        Dismissable alert
      </button>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              "list-group-item " + (index === selectedIndex ? "active" : "")
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
