//step 1
const isCurrFilled = () => {
  var inputs = document.querySelectorAll('#curr-points input');
  for (const input of inputs)
    if (input.value == '') return false;

  return true;
}

//step 2
var cfuBtn = document.getElementById('CFU-choice');
var raBtn = document.getElementById("RA-choice");
var saBtn = document.getElementById("SA-choice");

let otherPts;
function categoryClick(cat) {
  console.log(isCurrFilled());
  if (isCurrFilled()) {
    let RA = parseFloat(document.getElementById("RA-pts").value);
    let SA = parseFloat(document.getElementById("SA-pts").value);
    let CFU = parseFloat(document.getElementById("CFU-pts").value);

    if (cat == "CFU") 
      otherPts = RA + SA;
    else if (cat == "RA") 
      otherPts = CFU + SA;
    else 
      otherPts = CFU + RA;
  }
  else
    alert('Fill the required fields with valid inputs');
}

//step 3
const isCatFilled = () => {
  var inputs = document.querySelectorAll('#category-points input');

  for (const input of inputs)
    if (input.value == '') return false;

  return true;
}

//step 4
let max;
let stu;
let w;
let pred;
let goals;
function checkSubmit() {
  console.log(isCurrFilled());
  console.log(isCatFilled());
  if (isCurrFilled() && isCatFilled()) {
    stu = parseFloat(document.getElementById("stu-pts").value);
    max = parseFloat(document.getElementById("max-pts").value);
    w = parseFloat(document.getElementById("weight").value);
    pred = document.getElementById("predict").value;
    calculate();
  }
  else {
    alert('Fill the required fields with valid inputs');
  }
}

function calculate() {
  max = max + 100;

  goals = document.getElementsByClassName("grades");
  var goal = 89.5;
  for (var i = 0; i < goals.length; i++) {
    goals[i].innerHTML = `Minimum grade needed to maintain an ` + goals[i].id + ': ' + getGrade(goal);
    goal -= 10;
  }

  console.log(pred.length);
  if (pred.length != 0)  {
    var finGrade = (((stu + parseFloat(pred)) / max) * w) + otherPts;
    document.getElementById("pred-grade").innerHTML = "Final grade with predicted grade: " + finGrade;
  }
  else{
    document.getElementById("pred-grade").innerHTML  = "";
  }
}

function getGrade(goal) {
  return (max * ((goal - otherPts) / w) - stu).toFixed(2);
}

function reset(resetChoice) {
  if (resetChoice == "all"){
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    for (var j = 0; j < goals.length; j++) {
      goals[j].innerHTML = "";
    }

    document.getElementById("pred-grade").innerHTML = "";
  }
  raBtn.disabled = false;
  saBtn.disabled = false;
  cfuBtn.disabled = false;
}