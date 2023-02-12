import "./App.css";
import Budget from "./components/Budget";
import Report from "./components/Report";
import Goals from "./components/Goals";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // добвляем для работы роутов
import { Link } from "react-router-dom"; // добвляем для работы роутов компонента которая направляет

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Link to="/goals" className="route">/Цели (Goals)</Link>
        <Link to="/budget" className="route">/Бюджет (Budget)/</Link>
        <Link to="/report" className="route">/Отчет (Report)/</Link>
        
        <Routes>
          <Route path="/goals" element={<Goals/>} />
          <Route path="/budget" element={<Budget/>} />
          <Route
            path="/report"
            element={
              <Report
                dayOfTheMonth={props.data.dayOfTheMonth}
                month={props.data.month}
                year={props.data.year}
                categoryNames={props.data.categoryNames}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
