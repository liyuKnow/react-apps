import { Container, Nav, Stack } from "react-bootstrap";
import Budget from "./components/Budget";
import Remaining from "./components/Reamaining";
import Spent from "./components/Spent";

function App() {
  return (
    <Container>
      <h1 className="mt-3">Budget tracker</h1>
      <div className="row mt-3">
        <Budget />
        <Remaining />
        <Spent />
      </div>
    </Container>
  );
}

export default App;
