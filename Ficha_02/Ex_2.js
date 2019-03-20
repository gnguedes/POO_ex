//1-------------------------------------------------------------

function showMessage (){
	alert("Olá mundo")
}


showMessage();
showMessage();
showMessage();

//2------------------------------------------------------------
//a----
const name = "Rui";

function sayHello (name){
	alert(`Ola ${name}!`)
}

sayHello(name);



//b-----
function calcArea(a,b){
	alert(`A area e ${a*b}`)
}

calcArea(2,3);


//c----------
const num1=+prompt("Digite o primeiro n");
const num2=+prompt("Digite o segundo n");
const operado= prompt("operador");

calculadora(num1,num2,operado);

function calculadora(num1,num2,operado){
	
  switch(operado){
  	
    case '+':
    	alert(`o resultado e ${num1+num2}`);
      break;
    case '-':
    	alert(`o resultado e ${num1-num2}`);
      break;
    case '*':
    	alert(`o resultado e ${num1*num2}`);
      break;
    case '/':
    	if(num2==0){
      	alert("nao pode dividir por 0") 
        }
      else{
      	alert(`o resultado e ${num1/num2}`);
      }     
    	
    
  }
}



//d--------------
const peso=+prompt("Digite o peso");
const altura=+prompt("Digite a altura");

function calcIMC(peso,altura){
		const imc=peso / (altura*altura)
		
    alert(imc)
    
    if(imc<18.5){
    	alert("Abaixo de peso")
    }
    else if(imc>=18.5 && imc<24.9){
    	alert("peso normal")
    }
    else if(imc>=18.5 && imc<24.9){
    	alert("peso normal")
    }
    else if(imc>=24.9 && imc<29.9){
    	alert("sobrepeso")
    }
    else if(imc>=30 && imc<34.9){
    	alert("obesidade grau I")
    }
		else if(imc>=35 && imc<34.9){
    	alert("obesidade grau II")
    }
    else{
    	alert("obesidade grau III")
    }
}

calcIMC(peso,altura);


//e----------
const texto = prompt("Escreva um texto");
const numero = +prompt("Numero de vezes");

function getEco(texto,numero){

    let result = '';
	
    for(let i=0; i<numero; i++){
  	    result = result + texto
    
    }
    alert(result)
	
}

getEco(texto,numero);



//f-----------
const num1 = +prompt("inicio");
const num2 = +prompt("fim");

function getNumbers(num1,num2){
	
  let numberList = '';
  
	for(let i=num1; i<num2; i++){
  	numberList = numberList + i
  }
  alert(numberList)
  
}

getNumbers(num1,num2)



//g-----------
const num1 = +prompt("inicio");
const num2 = +prompt("fim");

function sumMultiplesOfThree(num1,num2){
	
  let numberSum = 0;
  
	for(let i=num1; i<=num2; i++){
  	if (i % 3 == 0){
    	numberSum = numberSum + i
    }
  }
  alert(numberSum)
  
}

sumMultiplesOfThree(num1,num2)

//h------------
const num1 = +prompt("numero");

function showTabuada(num1 = 1){

	let saveTabuada = '';

	for(let i=1; i<=10; i++){
  	
    saveTabuada += (`${num1} * ${i} = ${num1 * i} \n`)
  }
  
  alert(saveTabuada)
  
}


showTabuada(num1)


//i--------------
sumNums(2,5,6);

sumNums(4,8);

function sumNums(){
	
	let result=0;
  
  for (let i=0; i<arguments.length; i++){
  	result = result + arguments[i];
  }
  
  alert(result);
}


//j---------------
showFriends("Gabriela", "Queiros", "Joana");

showFriends("Gabriela", "Queiros", "Joana", "Margarida", "Laura");

function showFriends (firstname, lastname, ...friends){

	alert(`A ${firstname} ${lastname} tem ${friends.length} amigas!`)
}


//3----------------------------------------------------------------
//a----------
let result = showMin(3,-1);
alert (result)

function showMin(num1,num2){
	
  if (num1<num2){
  	return num1
  }
  else{
  	return num2
  }

}

//b------------
let x =+ prompt("valor de x");
let n =+ prompt("valor de n");

let result=pow(x,n);
alert(result)

function pow(x,n){
	
  if (x <= 1 || isNan(x)){
  	return( "base invalida")
  }
  else if (n <= 1 || isNan(n)){
    return( "expoente invalido")
  }
  
  else {
    return x**n
  }	
  
}


//c-------------
let num = +prompt("numero");

if (checkPrime(num)===true){
	alert (`O ${num} é primo`)	
}else{
	alert(`O ${num} nao é primo`)
}


function checkPrime (num){
	let isPrime = true;
	for(let i=2; i<num; i++){
  	if ( num % i == 0){
    	isPrime = false;
      break;
    }
  }
  return isPrime;
}

//d------------
let num = +prompt("numero");

function factorial(num){
	
	let result = 1;
  for (let i=num; i>0;i--){
    result = result * i
  
  }
  
  return result
}

let fim = factorial(num);
alert(fim)

//4-------------------------------------------------------------
//a-----------------------
let year = +prompt("numero");

let checkLeapYear = function (year){
	
	return ((year % 100 !== 0 ) && (year % 4 == 0)) || (year % 400 ===0)
}

const result = checkLeapYear(year);
alert(result);


//b------------------------(check again)
let perfect;

let isPerfect = function(num){
	
  let result = 0; 
  let perfect = false;
	for( let i=1; i<=num/2; i++){
  	if ( num % i === 0){
    	result = result + i
    } 
  }
  if (result == num){
  	perfect = true
  }
  
	return perfect
}

do{
	const num = +prompt("numero");
  perfect = isPerfect(num);
}while (perfect !== true);

//c------------------------(check again)

let checkPalindromo = num =>{
	num[0] === num[2];
}

let checkPalindromo2 = num =>{
	num % 10 === Math.floor(num/100);
}

alert(checkPalindromo("121"));

//5--------------------------------------------------------------------
const random = Math.floor((Math.random() * 100)+1);
let tentativas = 0;
const limite = 5;
let result;

do{
	tentativas++;
	const num = +prompt("Numero (1,100)");
  result = getNumber(random,num);
  if (result == 0){
  	alert("Parabens, ganhou");
    break;
  }
  else if(result == 1){
  	alert("Para baixo")
  }
  else{
  	alert("Para cima")
  }
}while(tentativas < limite);

if(tentativas === limite ){
	alert("Perdeu!")
  
}

function getNumber(random,num){
	
	if (num>random)	{
  	return 1
  }
  else if (num<random){
  	return -1
  }
  else{
  	return 0    
  }	
}

