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
    console.log("continue here")
}
else{
    alert("please enter either male or female in the genderbox")

}

}