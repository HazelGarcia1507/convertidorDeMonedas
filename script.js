document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Convertidor');
    const AmountInput = document.getElementById('Amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const convertedAmountSpan = document.getElementById('convertedAmount');
    const resultsDiv = document.getElementById('results');


    const conversionRates = {
        MXN: { USD: 0.055, CAD: 0.071, EUR: 0.047 },
        USD: { MXN: 18.18, CAD: 1.29, EUR: 0.85 },
        CAD: { MXN: 14.13, USD: 0.77, EUR: 0.66 },
        EUR: { MXN: 21.19, USD: 1.18, CAD: 1.52 },
    };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const Amount = parseFloat(AmountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        
        if (isNaN(Amount) || Amount <= 0) {
            alert('Por favor, ingresa un monto válido para la factura.');
            return;
        }
        
        
    
        if (fromCurrency === toCurrency) {
            convertedAmountSpan.textContent = Amount.toFixed(2);
        } else {
            const conversionRate = conversionRates[fromCurrency][toCurrency];
            const convertedAmount = Amount * conversionRate;
            convertedAmountSpan.textContent = convertedAmount.toFixed(2);
        }
    
        resultsDiv.classList.remove('hidden');
        });
    });