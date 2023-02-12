import "./Report.css";
import React from "react";
import { useRef } from "react";
// import Screenshot_1 from './Screenshot_1.png'; 

function Report(props) {
  console.log(props.dayOfTheMonth[0]); //Тест пропсов в консоль (можно удалить)
  console.log(props.month[0]);         //Тест пропсов в консоль (можно удалить)
  console.log(props.year[0]);          //Тест пропсов в консоль (можно удалить)
  // console.log(props.array4[0]);     //Тест пропсов в консоль (можно удалить)



  return (
    <div className=""> 
      <p>Расходы</p>
      <hr /> 
       <div className="glavniy_block">         {/*Надо смменить имя класса на нормальное*/}
       
        <div className="test_block_text1">     {/*Надо смменить имя класса на нормальное*/}
          <p className="test_text1">Начало</p> {/*Надо смменить имя класса на нормальное*/}
          <p className="test_text2">           {/*Надо смменить имя класса на нормальное*/}
            {props.dayOfTheMonth[0]} {props.month[0]} {props.year[0]}  
          </p>
        </div>

        <div className="test_block_text2">     {/*Надо смменить имя класса на нормальное*/}
          <p className="test_text3">Конец</p>  {/*Надо смменить имя класса на нормальное*/}
          <p className="test_text4">           {/*Надо смменить имя класса на нормальное*/}
            {props.dayOfTheMonth[30]} {props.month[11]} {props.year[0]}
          </p>
        </div>

    
        
      </div>
      
      {/* <div className="graffik"><img src={Screenshot_1}/></div>          Надо смменить имя класса на нормальное, если получиться написать график на js то удаляю эту строку */}
      
      
      
      
      
      
      
      
      <div className="block_categoriya_dohodov_1">                      {/*Надо смменить имя класса на нормальное*/}
        <div className="zvetnoy_kvadrat"></div>                         {/*Надо смменить имя класса на нормальное*/}
        <div className="categoriya">{props.categoryNames[0]}</div>      {/*Надо смменить имя класса на нормальное*/}
       <div className="chislo_deneg">100</div>            {/*здесь должно быть передано состояние категории но оно не передается почеу то                   Надо смменить имя класса на нормальное */}
      </div>     

       <div className="block_categoriya_dohodov_1">                      {/*Надо смменить имя класса на нормальное*/}
        <div className="zvetnoy_kvadrat"></div>                         {/*Надо смменить имя класса на нормальное*/}
        <div className="categoriya">{props.categoryNames[1]}</div>      {/*Надо смменить имя класса на нормальное*/}
       <div className="chislo_deneg">100</div>            {/*здесь должно быть передано состояние категории но оно не передается почеу то                   Надо смменить имя класса на нормальное */}
      </div> 

       <div className="block_categoriya_dohodov_1">                      {/*Надо смменить имя класса на нормальное*/}
        <div className="zvetnoy_kvadrat"></div>                         {/*Надо смменить имя класса на нормальное*/}
        <div className="categoriya">{props.categoryNames[2]}</div>      {/*Надо смменить имя класса на нормальное*/}
       <div className="chislo_deneg">100</div>            {/*здесь должно быть передано состояние категории но оно не передается почеу то                   Надо смменить имя класса на нормальное */}
      </div>

    </div>
  );
}

export default Report;
