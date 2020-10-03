var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(dayOfTheWeek)

function myFunction(){
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value; 
  var year = document.getElementById("year").value;
  var gender = document.getElementById("gender").value;
  


var CC = parseInt(year.substr(0,2));
var YY = parseInt(year.substr(2,3));
// prompt(80)
var MM = month;
var DD = date;
var d = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7);

if (gender === "Male"){
  alert("For a male born on  " + dayOfTheWeek[d] + ", " + "your Akan name is " + maleNames[d] +","
  );
  
}else if(gender==="Female"){
  alert("For a female born on " + dayOfTheWeek[d] + ", " + "your Akan name is " + femaleNames[d] +","
  );
  
}else{
alert("For the one born on " + "undefined date " + "your Akan name is" + "," + "undefined") ;
}




}