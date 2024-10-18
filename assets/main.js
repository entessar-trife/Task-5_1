const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine"); 
const plus = document.querySelector(".plus"); 
const min = document.querySelector(".min"); 
const multi = document.querySelector(".multi"); 
const division = document.querySelector(".division"); 
const equal = document.querySelector(".equal");
const deleteNumber = document.querySelector(".delete-number");
const deleteAll = document.querySelector(".delete-all");
const sin = document.querySelector(".sin");
const cos = document.querySelector(".cos");
const tan = document.querySelector(".tan");
const sqrt = document.querySelector(".sqrt")
const pow = document.querySelector(".pow")
const point = document.querySelector(".point")
const π = document.querySelector(".π")
const resultDiv = document.querySelector(".result");

zero.addEventListener("click", () => {
  resultDiv.value += "0";
} )
one.addEventListener("click", () => {
  resultDiv.value += "1";
} )
two.addEventListener("click", () => {
  resultDiv.value += "2";
} )
three.addEventListener("click", () => {
  resultDiv.value += "3";
} )
four.addEventListener("click", () => {
  resultDiv.value += "4";
} )
five.addEventListener("click", () => {
  resultDiv.value += "5";
} )
six.addEventListener("click", () => {
  resultDiv.value += "6";
} )
seven.addEventListener("click", () => {
  resultDiv.value += "7";
} )
eight.addEventListener("click", () => {
  resultDiv.value += "8";
} )
nine.addEventListener("click", () => {
  resultDiv.value += "9";
} )

sin.addEventListener("click", () => {
  resultDiv.value = Math.sin(resultDiv.value * Math.PI / 180);
} )
cos.addEventListener("click", () => {
  resultDiv.value = Math.cos(resultDiv.value * Math.PI / 180);
} )
tan.addEventListener("click", () => {
  resultDiv.value = Math.tan(resultDiv.value);
} )

plus.addEventListener("click", () => {
  resultDiv.value += "+";
} )
min.addEventListener("click", () => {
  resultDiv.value += "-";
} )
multi.addEventListener("click", () => {
  resultDiv.value += "*";
} )
division.addEventListener("click", () => {
  resultDiv.value += "/";
} )

sqrt.addEventListener("click", () => {
  resultDiv.value = Math.sqrt(resultDiv.value);
} )
point.addEventListener("click", () => {
  resultDiv.value += ".";
} )
π.addEventListener("click", () => {
  resultDiv.value = Math.PI;
} )
pow.addEventListener("click", () => {
  resultDiv.value = Math.pow(resultDiv.value,2);
} )
deleteAll.addEventListener("click", () => {
  resultDiv.value = " ";
} )
deleteNumber.addEventListener("click",()  => {
  resultDiv.value = resultDiv.value.slice(0,-1);
})
equal.addEventListener("click", () =>  {
  resultDiv.value = eval(resultDiv.value);
} )



