const form = document.getElementById('form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const cardName = document.getElementById('cardName')
const cardNumber = document.getElementById('cardNumber')
const cardExpiry = document.getElementById('cardExpiry')
const cardCVV = document.getElementById('cardCVV')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkDetails()

    saveInfo()
})




function oldcode() {
    if(name.parentElement.className = 'valid') { //and email.parentelement etc for email carnumber all
        //save the info
    }
}

function checkDetails() {
    let nameVal = name.value.trim()
    let emailVal = email.value.trim()
    let cardNameVal = cardName.value.trim()
    let cardNumberVal = cardNumber.value.trim()
    let cardCVVVal = cardCVV.value.trim()

    if(nameVal === '') {
        invalidate(name, 'Please Enter Your Name')
    } else if(!checkName(nameVal)) {
        invalidate(name, 'Do Not Include Any Numbers or Special Characters')
    } else {
        validate(name)
    }

    if(emailVal === '') {
        invalidate(email, 'Please Enter Your Email')
    } else if(!checkEmail(emailVal)) {
        invalidate(email, 'Email Is Not Valid')
    } else {
        validate(email)
    }

    if(cardNameVal === '') {
        invalidate(cardName, 'Please Enter the Cardholder Name')
    } else if(!checkName(cardNameVal)) {
        invalidate(cardName, 'Do Not Include Any Numbers or Special Characters')
    } else {
        validate(cardName)
    }

    if(cardNumberVal === '') {
        invalidate(cardNumber, 'Please Enter the Credit Card Number')
    } else if(!checkCardNumber(cardNumberVal)) {
        invalidate(cardNumber, 'Card Number Invalid')
    } else {
        validate(cardNumber)
    }

    if(cardCVVVal === '') {
        invalidate(cardCVV, 'Please Enter the CVV Code')
    } else if(!checkCVV(cardCVVVal)) {
        invalidate(cardCVV, 'CVV Code Invalid')
    } else {
        validate(cardCVV)
    }
}




function invalidate(info, message) {
    const formControl = info.parentElement
    const errorMessage = formControl.querySelector('small')

    errorMessage.innerText = message

    formControl.className = 'invalid'
}

function validate(info) {
    const formControl = info.parentElement
    formControl.className = 'valid'
}

function checkName(string) {
    return /^[a-zA-Z ]*$/g.test(string)
}

function checkEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkCardNumber(value) {
if (/[^0-9-\s]+/.test(value)) return false;

if (value.length != 14) return false; 

    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

function checkCVV(number) {
    return /^\d{3}$/.test(number)
}

let info = [];
function saveInfo() {
    let userInfo = {
        name: document.getElementById('name').value.replace(/'|\\/g, ""),
        email: document.getElementById('email').value.replace(/'|\\/g, ""),
        cardNumber: document.getElementById('cardNumber').value.replace(/'|\\/g, ""),
        cardName: document.getElementById('cardName').value.replace(/'|\\/g, ""),
        cardExpiry: document.getElementById('cardExpiry').value.replace(/'|\\/g, ""),
        cardCVV: document.getElementById('cardCVV').value.replace(/'|\\/g, "")
    }
    info.push(userInfo);
    //document.forms[0].reset(); 

    console.warn('added' , {info} );
}
