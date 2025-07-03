const passwordElement = document.getElementById('password')
const copyElement = document.getElementById('copy')
const generateElement = document.getElementById('generate')
const lengthElement = document.getElementById('length')
const upperElement = document.getElementById('uppercase')
const lowerElement = document.getElementById('lowercase')
const numElement = document.getElementById('numbers')
const symbolElement = document.getElementById('symbols')

const randomFunction = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// By using execCommand (Now depricated)
// copyElement.addEventListener('click', () => {
//     const textArea = document.createElement('textarea')
//     const password = passwordElement.innerText

//     if (!password) { return }

//     textArea.value = password
//     document.body.appendChild(textArea)
//     textArea.select()
//     document.execCommand('copy')
//     textArea.remove()
//     alert('Your generated password has been copied ti the clipboad.')
// })

copyElement.addEventListener('click', () => {
    const password = passwordElement.innerText
    if (!password) { return }
    navigator.clipboard.writeText(password)
    alert('Your generated password has been copied to the clipboad.')
})

generateElement.addEventListener('click', () => {
    // const length = lengthElement.value
    // const length = Number(lengthElement.value)
    const length = parseInt(lengthElement.value)
    const includeUpper = upperElement.checked
    const includeLower = lowerElement.checked
    const includeNumber = numElement.checked
    const includeSymbol = symbolElement.checked

    passwordElement.innerHTML = generatePassword(length, includeLower, includeUpper, includeNumber, includeSymbol)
})

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = ''
    const typesCount = upper + lower + number + symbol
    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typesCount == 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0]
            generatedPassword += randomFunction[functionName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%~`^&*()-_.;:+=[]/<>|{}'
    return symbols[Math.floor(Math.random() * symbols.length)]
}