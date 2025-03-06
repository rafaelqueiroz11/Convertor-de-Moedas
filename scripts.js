const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const convertCurrency = document.querySelector(".convert-currency")




function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.8
    const euroToday = 6.2
    const libraToday = 7.4
    const bitcoinToday = 0.01234567
    const realToday = 0.17


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }

    if (convertCurrency.value == "real")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    if (convertCurrency.value == "dolar")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    if (convertCurrency.value == "euro")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    if (convertCurrency.value == "libra")
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changeConvert() {
    const convertName = document.getElementById("currency-convert")
    const convertImage = document.querySelector(".convert-img")

    if (convertCurrency.value == "real") {
        convertName.innerHTML = "Real"
        convertImage.src = "./assets/real.png"
    }
    if (convertCurrency.value == "dolar") {
        convertName.innerHTML = "Dólar americano"
        convertImage.src = "./assets/dolar.png"
    }
    if (convertCurrency.value == "euro") {
        convertName.innerHTML = "euro"
        convertImage.src = "./assets/euro.png"
    }
    if (convertCurrency.value == "libra") {
        convertName.innerHTML = "Libra"
        convertImage.src = "./assets/libra.png"
    }

    convertValues()
}


convertCurrency.addEventListener("change", changeConvert)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

