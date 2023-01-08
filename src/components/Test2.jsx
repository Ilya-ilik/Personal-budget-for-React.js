// import logo from './logo.svg';

import "./Test2.css";
import React, { useState } from "react";

function Test2() {
  const [value, setValue] = useState(0);

  //Функция ниже вызывает окно ввода при нажатии на категорию и отправляет
  //введенное значение в консоль
  let funcPromt = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));

    console.log(p);
    setValue(value + p);
  };

  //   var a = parseInt(prompt("1", ''));
  // var b = parseInt(prompt("2", ''));
  // var c = a + b;
  // alert(c);

  //Пример работы с промт
  // var test = prompt("Тест", '');
  // alert('Вам ' + years + ' лет!')

  let oneArray = ["Путешествия", "Машина", "Аптека"]; // Test array in my project
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

      <p>Расходы</p>

      <hr />

      <div className="category">
        <div className="first_rows">
          <div className="block_one">
            <div className="first_category" onClick={funcPromt}></div>
            <div>Путешествия</div>
            <div>{value}</div>
          </div>

          <div className="block_one">
            <div className="second_category"></div>
            <div>Путешествия</div>
            <div>{value}</div>
          </div>
          <div className="block_one">
            <div className="third_category"></div>
            <div>Путешествия</div>
            <div>{value}</div>
          </div>
          
        </div>
        <div className="second_rows">
          <div className="first_category"></div>
          <div className="second_category"></div>
          <div className="third_category"></div>
        </div>
        <div className="third_rows">
          <div className="first_category"></div>
          <div className="second_category"></div>
          <div className="third_category"></div>
        </div>

        {/* <p>{oneArray[0]}</p>
        <p>{oneArray[1]}</p>
        <p>{oneArray[2]}</p> */}
      </div>

      <p>Доходы</p>

      <hr />
    </div>
  );
}

export default Test2;
