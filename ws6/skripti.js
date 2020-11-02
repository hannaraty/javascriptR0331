

function getData() {
    //tehtava 1
    if (typeof(Storage) !== "undefined") {
    var maaranpaa = document.getElementById("destination").value;
    var paiva = document.getElementById("arrival").value;

    localStorage.setItem("destination", maaranpaa);
    console.log(localStorage.getItem("destination"));

    localStorage.setItem("arrival", paiva);
    console.log(localStorage.getItem("arrival"));

    var checkbox = document.getElementById("CheckboxGroup1_0");
    localStorage.setItem("Internet", checkbox.checked);
    console.log("Internet " + localStorage.getItem("Internet"));

    var checkbox = document.getElementById("CheckboxGroup1_1");
    localStorage.setItem("AirConditioning", checkbox.checked);
    console.log("Air conditioning " + localStorage.getItem("AirConditioning"));

    var checkbox = document.getElementById("CheckboxGroup1_2");
    localStorage.setItem("Minibar", checkbox.checked);
    console.log("Minibar " + localStorage.getItem("Minibar"));

    var checkbox = document.getElementById("CheckboxGroup1_3");
    localStorage.setItem("CarRent", checkbox.checked);
    console.log("Car rent " + localStorage.getItem("CarRent"));

    var checkbox = document.getElementById("CheckboxGroup1_4");
    localStorage.setItem("Sauna", checkbox.checked);
    console.log("Sauna " + localStorage.getItem("Sauna"));

    } else {
        document.getElementById("destination").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function lataus() {
    //tehtava 2
    var dest = localStorage.getItem("destination");
    var paiv = localStorage.getItem("arrival");
    var internet = localStorage.getItem("Internet");
    var AirConditioning = localStorage.getItem("AirConditioning");
    var Minibar = localStorage.getItem("Minibar");
    var CarRent = localStorage.getItem("CarRent");
    var Sauna = localStorage.getItem("Sauna");

    document.getElementById("sessiondata").innerHTML = dest + " " + paiv + '<br>' + "Internet: " + internet + '<br>' 
    + "Air condintioning: " + AirConditioning + '<br>' + "Minibar: " + Minibar + '<br>' + "Car rent: " + CarRent + '<br>' 
    + "Sauna: " + Sauna;
}


