

//calculating akan name 
// formular given 

function farLeft(CC) {
    return ((CC / 4) - 2 * CC - 1);
}

function middle(YY) {
    return (5 * YY / 4);
}

function farRight(MM) {
    return (26 * (MM + 1) / 10);
}

var birthdayYear = Number(prompt("Which year were you born?"))
var gender = prompt("What is your gender?")

const farLeftResult = farLeft(10)
const farRightResult = farRight(10)
const middleResult = middle(birthdayYear)

var calculationResult = (farLeftResult + middleResult + farRightResult + 10) % 7
const wholeNumber = calculationResult.toPrecision(1);
alert(wholeNumber);

// calculationResult = 2
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

let result;
if (gender == "male") {
    result = maleNames[wholeNumber]
} else if (gender == "female") {
    result = femaleNames[wholeNumber]
} else {
    alert('Enter a valid gender')
}

alert(`Your day name is ${result}`, )

const handleclick = () => {
    // gather user input 

    constbirthdaybox = document.getelementbyid("birthday")
    constbirthmonthbox = document.getelementbyid("birthmonth")
    constbirthyearbox = document.getelementbyid("birthyear")
    constbirthgenderbox = document.getelementbyid("gender")


    //get the elements 
    const birthday = birthdaybox.value;
    const birthmonth = birthmonthbox.value;
    const birthyear = birthyearbox.value;
    const birthgender = birthgenderbox.value;


    console.log(birthday, birthmonth, birthyear, birthgender)
    //check user gender
    const allgendersarrays = ["male", "female"]
    if (allgendersarrays.includes(birthgender)) {
        // CC - is the century digits
        //YY - is the Year digit
        const centuryvar = string(birthyear).substring[0, 2]
        const yearvar = string(birthyear).substring[2]
        console.log(century, year)
        git

    
    }
    else {
        alert("please enter either male or female in the genderbox")

    }

}