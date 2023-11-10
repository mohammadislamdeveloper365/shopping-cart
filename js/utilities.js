function getElement(id) {
    return document.getElementById(id);
}

function getFieldValue(id, isInput = false) {
    let value;
    
    if(isInput) {
        value = getElement(id).value;
    } else {
        value = getElement(id).innerText;
    }
    
    return value;
}

function getNumberValue(id, isInput = false) {
    return getFieldValue(id, isInput);
}


export { getElement, getFieldValue, getNumberValue };