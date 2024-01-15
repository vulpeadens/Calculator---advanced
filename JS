// Selectam elementele cu care vom interactiona.
// Cifrele
let digit7 = document.querySelector('#digit7');
let digit8 = document.querySelector('#digit8');
let digit9 = document.querySelector('#digit9');
// Operatiile
let multiply = document.querySelector('#multiply');
let equals = document.querySelector('#equals');
let result = document.querySelector('.result');

// Initializam variabilele globale
// Cele doua numere implicate in operatie
let firstNumber = 0;
let secondNumber = 0;
// O variabila care sa ne indice ce numar construim
let startBuildingSecondNumber = false;
// Tipul operatiei pe care o aplicam
let operation = '';

// Functie care construieste numerele
function buildNumber(numberReceived) {
  if (startBuildingSecondNumber === false) {
    // Construim primul numar.
    firstNumber = firstNumber * 10 + numberReceived;
    // Afisam numarul in zona rezultatului.
    result.innerHTML = firstNumber;
  } else {
    // Construim cel de-al doilea numar.
    secondNumber = secondNumber * 10 + numberReceived;
    result.innerHTML = secondNumber;
  }
}

// Functie care se ocupa de click-ul pe multiply
function handleMultiplyClick() {
  // Cand dam click pe *, incepe constructia celui de-al doilea numar si se seteaza operatia care urmeaza sa fie executata.
  startBuildingSecondNumber = true;
  operation = 'multiply';
  // Afisam operatia in zona rezultatului.
  result.innerHTML = '*';
}

// Functie care se ocupa de opasarea butonului de =
function handleEqualsClick() {
  // Cand dam click pe '=', in functie de operatie, se face calculul intre cele doua numere si se adauaga la rezultat.
  if (operation === 'multiply') {
    let operationResult = firstNumber * secondNumber;
    result.innerHTML = operationResult;
  }

  // Reinitializam valorile initiale pentru a face cacule multiple.
  firstNumber = '';
  secondNumber = '';
  startBuildingSecondNumber = false;
  operation = '';
}

// Cand dam click pe o cifra, construim un numar, deci apelam functia buildNumber, careia ii trimitem ca aparametru cifra pe care s-a dat click.
digit7.addEventListener('click', function() {
  buildNumber(7);
});
digit8.addEventListener('click', function () {
  buildNumber(8);
});
digit9.addEventListener('click', function () {
  buildNumber(9);
});

multiply.addEventListener('click', handleMultiplyClick);

equals.addEventListener('click', handleEqualsClick);
