

//calculating akan name 
// formular given 
var gender = prompt("What is your gender?")
var birthdayYear = Number(prompt("Which year were you born?"))
var gender = prompt("What is your gender?")

const farLeftResult = farLeft(10)
const farRightResult = farRight(10)
const middleResult = middle(birthdayYear)

var calculationResult = (farLeftResult + middleResult + farRightResult + 10) % 7
const wholeNumber = calculationResult.toPrecision(1);
alert(wholeNumber);
//calculation results is 2
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]


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
    
    }
    else {
        alert("please enter either male or female in the genderbox")

    }

}