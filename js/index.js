import { getElement, getNumberValue } from './utilities.js';

function changeNumber(id,isIncrement) {
    let tvNumberField = getElement(id);
    let numberOfTv = getNumberValue(id, true);
    if(isIncrement) {
        tvNumberField.value = ++numberOfTv;
    }

    else {
        if(numberOfTv > 0) {
            --numberOfTv;
            tvNumberField.value = numberOfTv;
        }
    }
}

function setTotalPrice(itemPrice, itemNumberId, itemPriceId) {
    let price = itemPrice;
    let numberOfItem = getNumberValue(itemNumberId, true)
    let itemField = getElement(itemPriceId);
    itemField.innerText = price * numberOfItem;
}

function setPrice (tvPriceId, tvStandPriceId, vatId, subTotalId, totalId) {
    const subTotalField = getElement(subTotalId);
    const totalField = getElement(totalId);
    const tvPrice = getNumberValue(tvPriceId);
    const tvStandPrice = getNumberValue(tvStandPriceId);
    const vatField = getElement(vatId);
    
    subTotalField.innerText = tvPrice + tvStandPrice;
    vatField.innerText = (0.06 * (tvPrice + tvStandPrice)).toFixed(2);
    totalField.innerText = getNumberValue(subTotalId) + getNumberValue(vatId)
}

setPrice('tv-price','tv-stand-price','vat','sub-total','total');

getElement("btn-tv-plus").addEventListener('click', function() {
    changeNumber('tv-number',true);
    setTotalPrice(450, 'tv-number', 'tv-price');
    setPrice('tv-price','tv-stand-price','vat','sub-total','total');
})

getElement("btn-tv-minus").addEventListener('click', function() {
   changeNumber('tv-number',false);
   setTotalPrice(450, 'tv-number', 'tv-price');
   setPrice('tv-price','tv-stand-price', 'vat','sub-total','total')
})

getElement("btn-tv-stand-plus").addEventListener('click', function() {
    changeNumber('tv-stand-number',true);
    setTotalPrice(20, 'tv-stand-number','tv-stand-price');
    setPrice('tv-price','tv-stand-price', 'vat','sub-total','total');
})

getElement("btn-tv-stand-minus").addEventListener('click', function() {
   changeNumber('tv-stand-number',false);
   setTotalPrice(20, 'tv-stand-number','tv-stand-price');
   setPrice('tv-price','tv-stand-price','vat','sub-total','total');
})