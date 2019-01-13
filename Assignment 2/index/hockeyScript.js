

function validate(){
    document.getElementById("error").innerHTML = "";
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();

    var age = document.getElementById("age");
    var ageRange = age.options[age.selectedIndex].text;
    var watch = document.getElementById("watch");
    var watchType = watch.options[watch.selectedIndex].text;

    var nameError = "";
    var ageError = "";
    var watchError = "";

    if(firstName && lastName != ""){
        nameError = "";
        document.getElementById("error").innerHTML += "";
    }
    else{
        window.scrollTo(0, 0);
        nameError = "Please enter a First and Last name.\n";
        document.getElementById("error").innerHTML += nameError;
    }

    if(ageRange == "Select One"){
        window.scrollTo(0, 0);
        ageError =  "Please select an age range.\n";
        document.getElementById("error").innerHTML += ageError;
    }
    else{
        ageError = "";
        document.getElementById("error").innerHTML += "";
    }
    
    if(watchType == "Select One"){
        window.scrollTo(0, 0);
        watchError = "Please select a viewing method.\n";
        document.getElementById("error").innerHTML += watchError;
    }
    else{
        watchError = "";
        document.getElementById("error").innerHTML += "";
    }

    if(ageError && nameError && watchError == ""){
        alert("Thank you for your input!");
    }
    
}