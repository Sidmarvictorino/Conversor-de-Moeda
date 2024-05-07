const oneButton = document.querySelector(".one-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real

    const CurrencyValueToConverted = document.querySelector(".currency-value") // outras moedas

    console.log(currencySelect.value)

    const dolarToday = 5.15
   



    if (currencySelect.value == "dolar") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }
        ).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        CurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euRoToday)

    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }
    ).format(inputCurrencyValue)




}


function changeCurrrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    


}

if (currencySelect.Valur == "dolar") {
    currencyName.innerHTML = " Dólar americano"
    currencyImage.src="./assets/brazil.png"
}

if (currencySelect.Valur == "euro") {
    currencyName.innerHTML = " Euro"
    currencyImage.src="./assets/Desig.png"
}


currencySelect.addEventListener("change", changeCurrrency)
oneButton.addEventListener("click", convertValues)
