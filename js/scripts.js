var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames= ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dayOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function myFunction (event);{
    event.preventDefault ();
    const form = new FormData(event.target);
    var gender= form.get("gender");
    var dateFinput= form.get("date");
    date= new Date (dateFinput);
    const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (!dateFormat.test(dateFinput)) {
        alert(" Please,fill in all the requirements to proceed on.");
        return false;
      }
      if (gender==="male") {
          alert(
              "As a male born on" + dayOfTheWeek[date.getDay() = "," + "Your Akan name is" + maleNames[date.getDay()] 
          );
          document.getElementById ("result").innerHTML = maleNames[date.getDay()];
      } else if (gender==="female") {
        alert(
            "As a female born on" + dayOfTheWeek[date.getDay() = "," + "Your Akan name is" + femaleNames[date.getDay()] 
        );
        document.getElementById ("result").innerHTML = femaleNames[date.getDay()];
      }else {
        alert(
          " For a female born " +
            " Undefined Date " +
            "," +
            " Your Akan Name Is " +
            " Undefined"
        );
      }
      

}