import { getElement, getNumberValue } from './utilities.js';

function changeNumber(id,isIncrement) {
    let tvNumberField = getElement(id);
    let numberOfTv = getNumberValue(id, true);
    if(isIncrement) {
        tvNumberField.value = ++numberOfTv;
    }

    else {
        --numberOfTv;
        if(numberOfTv >= 0)
        tvNumberField.value = numberOfTv;
    }
}

function setTotalPrice(itemPrice, itemNumberId, itemPriceId) {
    let price = itemPrice;
    let numberOfItem = getNumberValue(itemNumberId, true)
    let itemField = getElement(itemPriceId);
    itemField.innerText = price * numberOfItem;
}

function setPrice (tvPriceId, tvStandPriceId) {
    let tvPrice = getNumberValue(tvPriceId);
    let tvStandPrice = getNumberValue(tvStandPriceId);
    let subTotalField = getElement('sub-total');
    subTotalField.innerText = tvPrice + tvStandPrice;

    let vatField = getElement('vat');
    vatField.innerText = (0.06 * (tvPrice + tvStandPrice)).toFixed(2);

    let totalField = getElement('total');
    totalField.innerText = getNumberValue('sub-total') + getNumberValue('vat')
}

setPrice('tv-price','tv-stand-price');

getElement("btn-tv-plus").addEventListener('click', function() {
    changeNumber('tv-number',true);
    setTotalPrice(450, 'tv-number', 'tv-price');
    setPrice('tv-price','tv-stand-price');
})

getElement("btn-tv-minus").addEventListener('click', function() {
   changeNumber('tv-number',false);
   setTotalPrice(450, 'tv-number', 'tv-price');
   setPrice('tv-price','tv-stand-price')
})

getElement("btn-tv-stand-plus").addEventListener('click', function() {
    changeNumber('tv-stand-number',true);
    setTotalPrice(20, 'tv-stand-number','tv-stand-price');
    setPrice('tv-price','tv-stand-price');
})

getElement("btn-tv-stand-minus").addEventListener('click', function() {
   changeNumber('tv-stand-number',false);
   setTotalPrice(20, 'tv-stand-number','tv-stand-price');
   setPrice('tv-price','tv-stand-price');
})