// //global variables
let userInput = 0;
let userSum = 0; // user total
let i = 0; // user entries
let average = 0; // user average
let enteredAmt = document.querySelector('.input-container span');
const mainForm = document.querySelector('.form');
const addButton = document.querySelector('.add-button');
const finishedButton = document.querySelector('.finished-button');

// listen for a click on addButton
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("i'm in!");

    //grabbing the value of the input
    userInput = Number(document.querySelector('#number-entry').value);
    // console.log(userInput);

    // grabbing global 'userSum' and adding to userInput to create new global userSum
    // userSum = userInput + userSum;
    // inrementing i each time which is our entries
    // i++;
    // calculating the average
    // average = userSum / i;

    console.log('Variable userInput = ' + userInput);
    console.log('Variable userSum = ' + userSum);
    console.log('Variable i / entries = ' + i);
    console.log('Variable average = ' + average);



    if (Number.isNaN(userInput) === true) {
      alert("This is an invalid input, please enter your numbers again");
    } else {
      userSum = userInput + userSum;
      i++;
      average = userSum / i;
    }

    if (i === i) {
      enteredAmt.innerHTML = `You've entered ${i} number. Enter another or press finished.`
    }

    mainForm.reset();
});
// listen for a click on finishedButton
finishedButton.addEventListener('click', (event) => {

  let input = document.querySelector('.finals .user-input p');
  input.innerHTML = `Current entry is ${userInput}`;

  let sum = document.querySelector('.finals .user-sum p');
  sum.innerHTML = `Current sum is ${userSum}`;

  let entries = document.querySelector('.finals .user-entries p');
  entries.innerHTML = `Current entries is ${i}`;

  let aver = document.querySelector('.finals .user-average p');
  aver.innerHTML = `Current average is ${average}`;
});
