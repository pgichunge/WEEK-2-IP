
const handleclick= () => {


    //gather user input
    const birthdaybox=document.getElementById['birthday']
    const birthmonthbox=document.getElementById['birthmonth']
    const birthyearbox=document.getElementById['birthyear']
    const genderbox=document.getElementById['gender']
   // get input element value
    const birthday=birthdaybox.value;
    const birthmonth=birthmonthbox.value;
    const birthyear=birthyearbox.value;
    const gender=genderbox.value;


    console.log(birthday, birthmonth, birthyear, gender)
    //calculating the akanname which depends on the day of the week born
// formula given  
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
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
//calculatin results is 2
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
const femaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

    // define gender
    const allgendersarrays=["male","female"]
    if (allgendersarrays.includes(birthgender)){
        //defining century and year

const centuryvar=string (birthyear).substring[0,2]
const yearvar=string (birthyear).substring[2]
console.log(century,year)}
        else{
            alert("please enter either male or female in the genderbox ")
        }
}