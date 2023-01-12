import "./Test2.css";
import React, { useState } from "react";

function Test2() {
  //state, income  categories
  const [category1, setCategory1] = useState(0);
  const [category2, setCategory2] = useState(0);
  const [category3, setCategory3] = useState(0);
  //

  //state, expenditure categories
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  //

  //Функция ниже вызывает окно ввода при нажатии на категорию и отправляет
  //введенное значение в консоль
  let incomeAddingFunction = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));
    setCategory1(category1 + p);
  };

  let funcPromt2 = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setCategory2(category2 + p);
  };

  let funcPromt3 = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setCategory3(category3 + p);
  };

  let funcPromt4 = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue4(value4 + p);
  };

  let funcPromt5 = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
    let p = parseInt(prompt("Введите число"));
    console.log(p);
    setValue5(value5 + p);
  };

  let funcPromt6 = () => {
    // let p = prompt("Введите число", "");
    //Здесь использую prompt чтобы вызвать окно ввода и оборачиваю в parseInt
    //для того чтобы это было не строка а число
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
      <div>{category1 + category2 + category3}</div>

      <hr />

      <div className="expenditure_categories">
        <div className="first_rows">
          <div className="block_one">
            <div className="first_category" onClick={incomeAddingFunction}></div>
            <div>Путешествия</div>
            <div>{category1}</div>
          </div>

          <div className="block_one">
            <div className="second_category" onClick={funcPromt2}></div>
            <div>Путешествия</div>
            <div>{category2}</div>
          </div>

          <div className="block_one">
            <div className="third_category" onClick={funcPromt3}></div>
            <div>Путешествия</div>
            <div>{category3}</div>
          </div>
        </div>

        {/* <p>{oneArray[0]}</p>
        <p>{oneArray[1]}</p>
        <p>{oneArray[2]}</p> */}
      </div>

      <p>Доходы</p>
      <div>{value4 + value5 + value6}</div>

      <hr />

      <div className="income_categories">
        <div className="first_rows">
          <div className="block_one">
            <div className="first_category2" onClick={funcPromt4}></div>
            <div>Путешествия</div>
            <div>{value4}</div>
          </div>

          <div className="block_one">
            <div className="second_category2" onClick={funcPromt5}></div>
            <div>Путешествия</div>
            <div>{value5}</div>
          </div>

          <div className="block_one">
            <div className="third_category2" onClick={funcPromt6}></div>
            <div>Путешествия</div>
            <div>{value6}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test2;
