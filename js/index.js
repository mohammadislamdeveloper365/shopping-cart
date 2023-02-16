function getElement(id) {
    return document.getElementById(id);
}

function getInputValue(id) {
    return getElement(id).value; 
}

function getFieldValue(id) {
    return getElement(id).innerText;
}

function getNumberValue(value) {
    return parseFloat(value);
}