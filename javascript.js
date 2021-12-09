const handleclick=() =>{
    // gather user input 

constbirthdaybox=document.getelementbyid("birthday")
constbirthmonthbox=document.getelementbyid("birthmonth")
constbirthyearbox=document.getelementbyid("birthyear")
constbirthgenderbox=document.getelementbyid("gender")

 
//get the elements 
const birthday=birthdaybox.value;
const birthmonth=birthmonthbox.value;
const birthyear=birthyearbox.value;
const birthgender=birthgenderbox.value;


console.log(birthday,birthmonth,birthyear,birthgender)
//check user gender
const allgendersarrays=["male","female"]
if (allgendersarrays.includes(birthgender)){
// CC - is the century digits
//YY - is the Year digit
const centuryvar=string (birthyear).substring[0,2]
const yearvar=string (birthyear).substring[2]
console.log(century,year)
}
else{
    alert("please enter either male or female in the genderbox")

}

}