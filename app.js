const dateOfBirth = document.querySelector("#data-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")


function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber == 0){
        outputBox.innerText = "Your birthday is lucky!!🤞";
     
    }else{
        outputBox.innerText = "Your Birthday is not lucky!😢";
    }
 
}

function checkBirthdayDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(dob&&sum)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText = 'Please fill out all required fields.';

}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let index=0;index<dob.length;index++)
    {
    sum = sum + Number(dob.charAt(index));
    }
    return sum;   
}

checkNumberButton.addEventListener('click',checkBirthdayDateIsLucky)

