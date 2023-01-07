// import logo from './logo.svg';
import { useState, useEffect } from "react";
import "./App.css";

function Test1() {
  // С помощью хуков создаем изначальный массив куда бедем все записывать
  const [arr, setArr] = useState([]);
  // Другим хуком мы будем получать новую строку и записывать ее в переменную
  const [value, setValue] = useState("");

  //?
  const result = arr.map((element, index) => {
    return (
      <p key={index} onDoubleClick={() => remove(index)}>
        {element}
      </p>
    );
  });

  //Функция добавления строки введенной в инпут в наш массив arr
  //-путем передачи в setArr изначальныое значение arr и полученное value
  function add() {
    setArr([...arr, value]);
  }

  // Это функция получения значения введенного в инпут, его принимает в себя setValue
  function inputValue(event) {
    setValue(event.target.value);
  }

  // Эта функция удаляет запись на которую кликнут дважды
  function remove(index) {
    setArr([...arr.slice(0, index), ...arr.slice(index + 1)]);
  }

  return (
    <div className="App">
      <div className="result">{result}</div>
      <div className="input"><input value={value} onChange={inputValue} placeholder="Введите название категории" /></div>
   
      <div className="button" onClick={add}></div>
    </div>
  );
}

export default Test1;