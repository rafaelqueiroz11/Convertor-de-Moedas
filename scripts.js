const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const convertCurrency = document.querySelector(".convert-currency");

async function fetchExchangeRates() {
    try {
        const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD"); // API gratuita para obter taxas
        const data = await response.json();
        return data.rates; // Retorna os valores das moedas
    } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error);
        return null;
    }
}

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const exchangeRates = await fetchExchangeRates();
    if (!exchangeRates) return; // Se não conseguir buscar as taxas, interrompe a execução

    const currencyMap = {
        "dolar": "USD",
        "euro": "EUR",
        "libra": "GBP",
        "bitcoin": "BTC",
        "real": "BRL"
    };

    const fromCurrency = currencyMap[convertCurrency.value]; // Moeda de origem
    const toCurrency = currencyMap[currencySelect.value]; // Moeda de destino

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return;

    const convertedValue = (inputCurrencyValue / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: toCurrency
    }).format(convertedValue);

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: fromCurrency
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    const currencyInfo = {
        dolar: { name: "Dólar americano", img: "./assets/dolar.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        libra: { name: "Libra", img: "./assets/libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/bitcoin.png" },
        real: { name: "Real", img: "./assets/real.png" }
    };

    const selectedCurrency = currencyInfo[currencySelect.value];
    if (selectedCurrency) {
        currencyName.innerHTML = selectedCurrency.name;
        currencyImage.src = selectedCurrency.img;
    }

    convertValues();
}

function changeConvert() {
    const convertName = document.getElementById("currency-convert");
    const convertImage = document.querySelector(".convert-img");

    const currencyInfo = {
        real: { name: "Real", img: "./assets/real.png" },
        dolar: { name: "Dólar americano", img: "./assets/dolar.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        libra: { name: "Libra", img: "./assets/libra.png" }
    };

    const selectedCurrency = currencyInfo[convertCurrency.value];
    if (selectedCurrency) {
        convertName.innerHTML = selectedCurrency.name;
        convertImage.src = selectedCurrency.img;
    }

    convertValues();
}

convertCurrency.addEventListener("change", changeConvert);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

