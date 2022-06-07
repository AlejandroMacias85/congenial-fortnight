let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function eurostoDollars (amountInEuros) {
    let amountInDollars = amountInEuros * 1.2
    return amountInDollars
}

function dollarsToEuros (amountInDollars) {
    let resultInEuros = amountInDollars / 1.2
    return resultInEuros
}

function dollarsToYen (amountInDollars) {
    let dollarYen = dollarsToEuros(amountInDollars) * 127.9
    let resultInYen = Math.floor(dollarYen)
    return resultInYen
}

function yenToEuro (amountInYen) {
    let yenEuros = (amountInYen / 127.9)
    return yenEuros
}



function yenToPound (amountInYen) {
    let yenPounds = yenToEuro(amountInYen) * 0.8
    return yenPounds
}

module.exports = { dollarsToYen, eurostoDollars, yenToPound};
