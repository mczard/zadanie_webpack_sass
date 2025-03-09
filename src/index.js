import { poteguj } from './math';
import style from "./css/index.scss";
import Icon from "./assets/awsb.jpg";

let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");

const funkcjaSumujaca = require('./sum').sum;

console.log("Hello World!");
console.log(funkcjaSumujaca(3, 4));


//// 2 do potęgi 5 -> 32 ////
console.log("Wynik potęgowania 2 do 5 równa się", poteguj(2, 5));

let heading = document.querySelector("#demo"),
    sumValue = funkcjaSumujaca(12, 7);

const test = () => console.log("Jestem funkcją strzełkową");

heading.innerHTML = `12 + 7 = ${sumValue}`;