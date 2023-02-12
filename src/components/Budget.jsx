import "./Test2.css";
import React, { useState } from "react";


function Budget(props) { 

  // Массив ниже используется в этой компоненте но его нужно удалить и заменить на массив из data.js
  let oneArray = ["Путешествия", "Машина", "Интернет", "Доходы", "Расходы", "Долги", "Образование", "Еда", "Рестораны", "Одежда", "Спорт"]; // Test array in my project

  //state, income  categories (состояние, доходные категории)
  const [income, setIncome] = useState(0); 
  const [income2, setIncome2] = useState(0);
  const [income3, setIncome3] = useState(0); 
  //  

  //state, expenditure categories (состояние, категории расходов)
  const [value4, setValue4] = useState(0); // Изменить наименование категорий с  value на category
  const [value5, setValue5] = useState(0); // Изменить наименование категорий с  value на category
  const [value6, setValue6] = useState(0); // Изменить наименование категорий с  value на category
  //

  //Функция ниже вызывает окно ввода при нажатии на категорию и отправляет
  //введенное значение в консоль
  // let p = prompt("Введите число", "");
  //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
  //для того чтобы это было не строка а число


  // Функция изменения состояния категории по нажатию на кружок категории доходов
  let incomeAddingFunction1 = () => {
    let p = parseInt(prompt("Введите число"));
    setIncome(income + p);
  };
  // Функция изменения состояния категории по нажатию на кружок категории доходов
  let incomeAddingFunction2 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setIncome2(income2 + p);
  };
  // Функция изменения состояния категории по нажатию на кружок категории доходов
  let incomeAddingFunction3 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setIncome3(income3 + p);
  };








  // Функция изменения состояния категории по нажатию на кружок категории расходов
  let expenditureAddingFunction1 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue4(value4 + p);
  };
  // Функция изменения состояния категории по нажатию на кружок категории расходов
  let expenditureAddingFunction2 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue5(value5 + p);
  };
  // Функция изменения состояния категории по нажатию на кружок категории расходов
  let expenditureAddingFunction3 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue6(value6 + p);
  };

  //   var a = parseInt(prompt("1", ''));
  // var b = parseInt(prompt("2", ''));
  // var c = a + b;
  // alert(c);

  //Пример работы с промт
  // var test = prompt("Тест", '');
  // alert('Вам ' + years + ' лет!')

  return (
    <div className="">





      {/* Самый верхний текст на страннице */}
      <div className="intro">
        <p>Январь 2023</p>
        <p>Изменить</p>
      </div>

      {/* Горизонтальная черта */}
      <hr />

      {/* Граффик вверху странницы */}
      <div className="graffikk">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>
      </div>

      <div className="income">
        <div>{oneArray[3]}</div>
    
      {/* Сумма доходов */}
      <div>{income + income2 + income3}/100 000 P</div>
      </div>

     

      {/* Горизонтальная черта */}
      <hr />

      {/* доход_категории */}
      <div className="income_categories">

        <div className="first_rows">
          <div className="block_item">
            <div
              className="first_category"
              onClick={incomeAddingFunction1}
            ></div>
            <div>{oneArray[0]}</div>
            <div>{income}</div>
          </div>

          <div className="block_item"> 
            <div
              className="second_category"
              onClick={incomeAddingFunction2}
            ></div>
            <div>{oneArray[1]}</div>
            <div>{income2}</div>
          </div>

          <div className="block_item">
            <div
              className="third_category"
              onClick={incomeAddingFunction3}
            ></div>
            <div>{oneArray[2]}</div>
            <div>{income}</div>
          </div>
        </div>

      </div>

      <p>{oneArray[4]}</p>
      {/* Сумма расходов */}
      <div>{value4 + value5 + value6}</div>

      <hr />

      {/* расходы_категории */}
      <div className="expenditure_categories">

        <div className="first_rows">
          <div className="block_item">
            <div
              className="first_category2"
              onClick={expenditureAddingFunction1}
            ></div>
            <div>{oneArray[0]}</div>
            <div>{value4}</div>
          </div>

          <div className="block_item">
            <div
              className="second_category2"
              onClick={expenditureAddingFunction2}
            ></div>
            <div>{oneArray[1]}</div>
            <div>{value5}</div>
          </div>

          <div className="block_item">
            <div
              className="third_category2"
              onClick={expenditureAddingFunction3}
            ></div>
            <div>{oneArray[2]}</div>
            <div>{value6}</div>
          </div>
        </div>

        <div className="second_rows">
          <div className="block_item">
            <div
              className="first_category2"
              onClick={expenditureAddingFunction1}
            ></div>
            <div>{oneArray[5]}</div>
            <div>Состояние</div>
          </div>

          <div className="block_item">
            <div
              className="second_category2"
              onClick={expenditureAddingFunction2}
            ></div>
            <div>{oneArray[6]}</div>
            <div>Состояние</div>
          </div>

          <div className="block_item">
            <div
              className="third_category2"
              onClick={expenditureAddingFunction3}
            ></div>
            <div>{oneArray[7]}</div>
            <div>Состояние</div>
          </div>
        </div>

        <div className="third_rows">
          <div className="block_item">
            <div
              className="first_category2"
              onClick={expenditureAddingFunction1}
            ></div>
            <div>{oneArray[8]}</div>
            <div>Состояние</div>
          </div>

          <div className="block_item">
            <div
              className="second_category2"
              onClick={expenditureAddingFunction2}
            ></div>
            <div>{oneArray[9]}</div>
            <div>Состояние</div>
          </div>

          <div className="block_item">
            <div
              className="third_category2"
              onClick={expenditureAddingFunction3}
            ></div>
            <div>{oneArray[10]}</div>
            <div>Состояние</div>
          </div>
        </div>





      </div>
    </div>
  );
}

export default Budget;
