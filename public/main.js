// equal button
var equal = document.getElementById("equal");

// operator click listener
equal.addEventListener('click', function() {
    equalClickUpdate();
});

// operator buttons
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");


// operator click listener
plus.addEventListener('click', function() {
    operatorClickUpdate('+');
});
minus.addEventListener('click', function() {
    operatorClickUpdate('-');
});
divide.addEventListener('click', function() {
    operatorClickUpdate('/');
});
multiply.addEventListener('click', function() {
    operatorClickUpdate('*');
});



// clear button
var clear = document.getElementById("clear");
// clear click listener
clear.addEventListener('click', function() {
    clearClickUpdate();
});


// plus or minus button
var plusOrMinus = document.getElementById("plusOrMinus");
// plus or minus click listener
plusOrMinus.addEventListener('click', function() {
    plusOrMinusClickUpdate();
});


// number buttons
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

// click listeners for number buttons
zero.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(zero.innerText);
});
one.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(one.innerText);
});
two.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(two.innerText);
});
three.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(three.innerText);
});
four.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(four.innerText);
});
five.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(five.innerText);
});
six.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(six.innerText);
});
seven.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(seven.innerText);
});
eight.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(eight.innerText);
});
nine.addEventListener('click', function() {
    updateEquation();
    numberClickUpdate(nine.innerText);
});

// dot button
var dot = document.getElementById("dot");

// dot click listener
dot.addEventListener('click', function() {
    updateEquation();
    dotClickUpdate();
});


// input display element
var displayValElement = document.getElementById("calc-inputt");
// variable that has the value of the input display
var displayVal = '';
// current operator
var curOperator = '';
// string representation of equaltion
var equation = '';
// variable that indicates if previous button clicked was equal
var equalClickedPrev = false;



// update function for whenever a number button is clicked
function numberClickUpdate(num) {
    // do not append num to display input if the value of display input is empty and num is 0
    if(!(displayValElement.value == '' && num == 0)){
        displayVal += num;
        displayValElement.value = displayVal;
    }   
}

// function to handle dot button clicks
function dotClickUpdate() {
    // do not append num to display input if the value of display input is empty and num is 0
    if(!displayVal.includes('.')){
        displayVal += '.';
        displayValElement.value = displayVal;
    }   
}

// function to handle clear button clicks
function clearClickUpdate() {
    equalCLickedPrev = false;
    equal.className='btn-warning';
    displayVal = '';
    displayValElement.value = displayVal;
    equation = '';
    curOperator = '';
}

// function to handle plus or minus button clicks
function plusOrMinusClickUpdate() {
    // if displayVal is not empty
    if (displayVal != '') {
        // if displayVal is negative, then remove -
        if (displayVal.includes('-')){
            displayVal = displayVal.replace('-', '');
        // otherwise, insert - in front of the displayVal
        } else {
            displayVal = '-' + displayVal
        }
        displayValElement.value = displayVal;
    }
}


// function to handle operator button clicks
function operatorClickUpdate(operator){
    equalClickedPrev = false;
    equal.class='btn-warning';
    if (displayVal != ''){
        curOperator = operator;
    }
}

// function for updating equation when a number button is clicked after operator button
function updateEquation(){
    // clear if previous button clicked is equal
    if (equalClickedPrev){
        clearClickUpdate();
    // update equation if previous button clicked was an operator
    } else if (curOperator != ''){
        equation = equation+displayVal+curOperator;
        curOperator = '';
        displayVal = '';
    } 
}

// function for handling equal button click
function equalClickUpdate(){
    // display new value, set equalCLikedPrev to true, and reset variables
    if (equation != ''){
        equation = equation+displayVal;
        displayVal = eval(equation);
        displayValElement.value = displayVal;
        // change input background color if answer is 27
        if (displayVal == "27"){
            equal.className='btn-danger';
        }
        equation = '';
        curOperator = '';
        equalClickedPrev = true;
    }
}
