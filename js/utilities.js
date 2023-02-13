
// all function here 
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(element){
    const textElement = document.getElementById(element);
    const elementValueString = textElement.innerText;
    const textElementValue = parseFloat(elementValueString);
    return textElementValue
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}