var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function myFunction(){
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  // var invalidMonth = ( month<1 || month>12 || ((document.getElementById("month").value)=="") );  
  var year = document.getElementById("year").value;
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

var CC = parseInt(year.substr(0,2));
var YY = parseInt(year.substr(2,3));
var MM = month;
var DD = date;
var d = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7);
alert(" Please,fill in all the requirements to proceed on.");
return false;
if (gender === "male"){
  alert("For a male born on" + dayOfTheWeek[date.getDay()] + "," + "your Akan name is" + maleNames[date.getDay()] +","
  );
}if else (gender==="female"){
  alert("For a male born on" + dayOfTheWeek[date.getDay()] + "," + "your Akan name is" + maleNames[date.getDay()] +","
  );

}




}