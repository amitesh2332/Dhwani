import "./App.css";
import Page1 from "./Page1";
import PieChart from "./PieChart";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Page1} />
        <Route exact path="/piechart" component={PieChart} />
      </Router>
    </div>
  );
}

export default App;
