function soma() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value
  var branco = ("Dados em branco, favor digitar algo")
  if (num1 == "" || num2 == "") {
    document.getElementById ("resultado").innerHTML = branco
  }
  else{
    var soma = parseFloat(num1) + parseFloat(num2)
    document.getElementById("resultado").innerHTML = soma }}


function subtrair() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value
  var branco = ("Dados em branco, favor digitar algo")
  if (num1 == "" || num2 == "") {
    document.getElementById ("resultado").innerHTML = branco
  }
  else{
    var subtrair = parseFloat(num1) - parseFloat(num2)
    document.getElementById("resultado").innerHTML = subtrair }}

function multiplicar() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value
  var branco = ("Dados em branco, favor digitar algo")
  if (num1 == "" || num2 =="") {
    document.getElementById ("resultado").innerHTML = branco
  }
  else{
    var multiplicar = parseFloat(num1) * parseFloat(num2)
    document.getElementById("resultado").innerHTML = multiplicar }}

function dividir() {
  var num1 = document.getElementById("num1").value
  var num2 = document.getElementById("num2").value
  var erro = ("Não há divisão por zero")
  var branco = ("Dados em branco, favor digitar algo")
  if (parseFloat(num2) == 0){
    document.getElementById("resultado").innerHTML = erro}
  else if (num1 == "" || num2 =="") {
    document.getElementById ("resultado").innerHTML = branco
  }
  else{
    var dividir = parseFloat(num1) / parseFloat(num2)
    document.getElementById("resultado").innerHTML = dividir }}