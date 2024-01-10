const btnResult = document.getElementById('button-result');
const btnReset = document.getElementById('button-reset');
const userName = document.getElementById('user-name');
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');
const textName = document.getElementById('text-name');
const ticketPrice = document.getElementById('ticket-price');
const carriageNumber = document.getElementById('carriage-number');
const cpCode = document.getElementById('codice-cp');
const ticketTitle = document.querySelector('.ticket-title')
const ticket = document.querySelector('.ticket-container');
const bannerTitle = document.querySelector('.banner');

const price = 0.21;

// percentage
let underAgePercentage = 20;
let overAgePercentage = 40;

// discount underage
const underAgeDiscount = price * underAgePercentage / 100;
console.log(underAgeDiscount);

// discount overage
const overAgeDiscount = price * overAgePercentage / 100;
console.log(overAgeDiscount);

// ticket price underage
const underAgePrice = price - underAgeDiscount;
console.log(underAgePrice);

// ticket price overage
const overAgePrice = price - overAgeDiscount;
console.log(overAgePrice); 


// button Genera

btnResult.addEventListener('click', function(){

    let km = parseInt(userKm.value);
    let age = userAge.value;

    if(!isNaN(km)){

        ticket.style.display = "flex";
        ticketTitle.style.display = "block"
        textName.innerText = userName.value;
        carriageNumber.innerText = Math.floor(Math.random() * 10) +1;
        cpCode.innerText = Math.floor(Math.random() * 100000) + 1;;

        let underAgeCost = underAgePrice * km;
        let overAgeCost = overAgePrice * km;
        let ticketPriceCost = price * km;

        if(age == 'underage'){
            ticketPrice.innerText = underAgeCost.toFixed(2) + '€'
            console.log(underAgeCost)
        } else if(age == 'overage'){
            ticketPrice.innerText = overAgeCost.toFixed(2) + '€'
            console.log(overAgeCost)
        }else{
            ticketPrice.innerText = ticketPriceCost.toFixed(2) + '€'
            console.log(tiketPriceCost)
        }
    
    
    }
    else{
        bannerTitle.innerText = 'I dati inseriti non sono corretti, si prega di riprovare'
        }
    }

   
)


// button Reset
btnReset.addEventListener('click', function(){
    ticketTitle.style.display = "none";
    ticket.style.display = "none";
    bannerTitle.style.display = "none";
})


