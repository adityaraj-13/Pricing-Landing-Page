let my_price = [799,999,1999];
//logic to represent price based on user's input 
function updatePrices(currency) {   
    const exchangeRates = {
        'INR': 1,
        'USD': 0.014,
        'EUR': 0.012,
        'GBP': 0.010,
        'JPY': 1.54
    };
    
    const priceElements = document.querySelectorAll('.money');  //accessing the price elements from the structure

    
    priceElements.forEach((priceElement,index )=> { //updating the price for different currency
        const exchangeRate = exchangeRates[currency];
        const convertedPrice = (my_price[index] * exchangeRate).toFixed(2);
        priceElement.textContent = convertedPrice+' '+currency;
    }
    );
}     


document.getElementById('currency-select').addEventListener('change', function() { //accessing the selected currency 
    const selectedCurrency = this.value; 
    updatePrices(selectedCurrency); 
});

updatePrices('INR');
