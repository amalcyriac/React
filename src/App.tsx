import ListGroup from "./components/ListGroup";

function App() {
  let items = ["c1", "c2", "c3"];
  const heading = "List";
  const logString = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading={heading} onSelectItem={logString} />
    </div>
  );
}

export default App;
