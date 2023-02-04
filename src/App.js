// import logo from './logo.svg';
// import Chart from "./components/Chart";
import "./App.css";
import Expenses from "./components/Expenses";
import Main_page from "./components/Main_page";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // добвляем для работы роутов
import { Link } from "react-router-dom"; // добвляем для работы роутов компонента которая направляет

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <Link to="/main_page" className="route">/Бюджет (Main_page)/</Link> {/*наш линк для роута, компонента приложения "бюджет"*/}
        <Link to="/expenses" className="route">/Отчет (Expenses)/</Link>    {/*наш линк для роута, компонента приложения "отчет" */}

        {/*<Chart/> не рабочий компонент react-chartjs-2*/}
        {/* <Main_page /> компонента приложения "бюджет" */}

        <Routes>
          <Route path="/main_page" element={<Main_page />} />
          {/*строка ниже компонента приложения "отчет" */}
          <Route
            path="/expenses"
            element={
              <Expenses
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
