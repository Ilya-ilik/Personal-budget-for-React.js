import "./Test2.css";
import React, { useState } from "react";
import data from "./data";
import { Link } from 'react-router-dom';// добвляем для работы роутов компонента которая направляет

 

function Main_page(props) {

  // Массив ниже используется в этой компоненте но его нужно удалить и заменить на массив из data.js
  let oneArray = ["Путешествия", "Машина", "Интернет", "Доходы", "Расходы"]; // Test array in my project

  //state, income  categories (состояние, доходные категории)
  const [category1, setCategory1] = useState(0);
  const [category2, setCategory2] = useState(0);
  const [category3, setCategory3] = useState(0); 
  //  

  // Тестовый код
  // let category = category1;
  // Тестовый код


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

  let incomeAddingFunction1 = () => {
    let p = parseInt(prompt("Введите число"));
    setCategory1(category1 + p);
  };

  let incomeAddingFunction2 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setCategory2(category2 + p);
  };

  let incomeAddingFunction3 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setCategory3(category3 + p);
  };

  let expenditureAddingFunction1 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue4(value4 + p);
  };

  let expenditureAddingFunction2 = () => {
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue5(value5 + p);
  };

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





      <div className="intro">
        <p>Январь 2023</p>
        <p>Изменить</p>
      </div>

      <hr />

      <div className="graffik">
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

      <p>{oneArray[3]}</p>
      <div>{category1 + category2 + category3}</div>

      <hr />

      <div className="income_categories">
        <div className="first_rows">
          <div className="block_one">
            <div
              className="first_category"
              onClick={incomeAddingFunction1}
            ></div>
            <div>{oneArray[0]}</div>
            <div>{category1}</div>
          </div>

          <div className="block_one"> 
            <div
              className="second_category"
              onClick={incomeAddingFunction2}
            ></div>
            <div>{oneArray[1]}</div>
            <div>{category2}</div>
          </div>

          <div className="block_one">
            <div
              className="third_category"
              onClick={incomeAddingFunction3}
            ></div>
            <div>{oneArray[2]}</div>
            <div>{category3}</div>
          </div>
        </div>
      </div>

      <p>{oneArray[4]}</p>
      <div>{value4 + value5 + value6}</div>

      <hr />

      <div className="expenditure_categories">
        <div className="first_rows">
          <div className="block_one">
            <div
              className="first_category2"
              onClick={expenditureAddingFunction1}
            ></div>
            <div>{oneArray[0]}</div>
            <div>{value4}</div>
          </div>

          <div className="block_one">
            <div
              className="second_category2"
              onClick={expenditureAddingFunction2}
            ></div>
            <div>{oneArray[1]}</div>
            <div>{value5}</div>
          </div>

          <div className="block_one">
            <div
              className="third_category2"
              onClick={expenditureAddingFunction3}
            ></div>
            <div>{oneArray[2]}</div>
            <div>{value6}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_page;
