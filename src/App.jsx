import { Container, } from "react-bootstrap";
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import { BudgetProvider } from "./Context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <Container>
        <h1 className="mt-3">Budget tracker</h1>
        <div className="row mt-3 ">
          <Budget />
          <Remaining />
          <Spent />
        </div>
        <div className="m-3 d-flex justify-content-between">
          <h3 className="mt-3">Expenses</h3>
          <AddExpenseForm />
        </div>
        <ExpenseList />
      </Container>
    </BudgetProvider>
  );
}

export default App;
