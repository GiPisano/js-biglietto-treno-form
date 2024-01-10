const btnResult = document.getElementById('button-result');
const userName = document.getElementById('user-name');
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');

const price = 0.21;

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

// final price 


btnResult.addEventListener('click', function(){

    let km = parseInt(userKm.value);
    let age = userAge.value;

    if(!isNaN(km)){

        let underAgeCost = underAgePrice * km;
        let overAgeCost = overAgePrice * km;
        let tiketPriceCost = price * km;

        if(age == 'underage'){
            console.log(underAgeCost)
        } else if(age == 'overage'){
            console.log(overAgeCost)
        }else{
            console.log(tiketPriceCost)
        }
    
    
    }
    else{
        console.log("riprova");
        }
    }

   
)



